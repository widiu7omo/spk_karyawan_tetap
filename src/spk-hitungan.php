<?php
if (session_status() == PHP_SESSION_NONE) {
	session_start();
}
require_once './model/spk.php';
require_once './model/getdata.php';
require_once './model/kriteria.php';
require_once './model/karyawan.php';

$kriterias = show_kriteria();
$karyawans = show_karyawan();

function check_matching(){
	$db = new Database();
	$q = "SELECT count(*) as karyawan_left FROM calon_karyawan LEFT OUTER JOIN data_kriteria ON calon_karyawan.id = data_kriteria.karyawan_id WHERE data_kriteria.karyawan_id IS NULL";
	if($db->query($q)){
		$result = $db->fetch();
		return $result[0]->karyawan_left;
	}

}
function main($kriterias,$karyawans) {
	if(check_matching() == 0){
		$db = new Database();
		$q = "TRUNCATE hasil_akhir";
		$db->query($q);
		$max_by_kriteria = getMax( $kriterias);

		$normalisasi_nilai = normalisasi($max_by_kriteria,$karyawans);

		$ranked_karyawan = getRank($normalisasi_nilai,$kriterias);

		$values = '';
		foreach ($ranked_karyawan as $key=> $rank){
			$values .= "($rank->karyawan_id,".round($rank->total,2).")";
			if(count( $ranked_karyawan) !== $key+1){
				$values .= ",";
			}
		}
		$db = new Database();
		$q = "INSERT INTO hasil_akhir(karyawan_id,total) VALUES $values";
		if($db->query($q)){
			$q =
			$_SESSION['status'] = (object)['status'=>'fail','message'=>"Penghitungan berhasil"];
			header( 'Location: spk-hasil.php');
		}
	}
	else{
		$_SESSION['status'] = (object)['status'=>'fail','message'=>"Penghitungan gagal, karena ".check_matching(). " karyawan masih belum terisi datanya"];
		header( 'Location: spk-list.php');
	}

}

function getMax($kriterias) {
	$max_by_kriteria = [];
	foreach ( $kriterias as $kriteria ) {
		$data_kriteria = get_data( "SELECT * FROM data_kriteria WHERE kriteria_id = '$kriteria->id'" );
		$nilai_max = max(array_map(function($kriteria){
			return $kriteria->nilai;
		},$data_kriteria));
		array_push( $max_by_kriteria, (object)['kriteria_id'=>$kriteria->id,'nilai_max'=>$nilai_max]);
	}
	return $max_by_kriteria;

}

function normalisasi($max_by_kriteria,$karyawans) {
	$data_kriteria_ternormalisasi = [];
	foreach ($karyawans as $karyawan){
		$data_kriteria_by_karyawan = get_data( "SELECT * FROM data_kriteria WHERE karyawan_id = '$karyawan->id'" );
		$kriteria_ternormalisasi = array_map( function ($nilai_max_kriteria,$index) use($data_kriteria_by_karyawan){
			return (object)['nilai_ternormalisasi'=>$data_kriteria_by_karyawan[$index]->nilai/$nilai_max_kriteria->nilai_max,'kriteria_id'=>$nilai_max_kriteria->kriteria_id];
		},$max_by_kriteria,array_keys( $max_by_kriteria));
		array_push( $data_kriteria_ternormalisasi,(object)['karyawan_id'=>$karyawan->id,'data_kriteria_ternormalisasi'=>$kriteria_ternormalisasi]);
	}
	return $data_kriteria_ternormalisasi;
}

function getRank($normalisasi_nilai,$kriterias) {
	$results = [];
	foreach ($normalisasi_nilai as $nilai_ranking){
		$total = array_map(function($nilai,$index) use ($kriterias){
			return ((float)$nilai->nilai_ternormalisasi*(float)$kriterias[$index]->bobotpecahan);
		},$nilai_ranking->data_kriteria_ternormalisasi,array_keys( $kriterias));

		array_push($results,(object)['karyawan_id'=>$nilai_ranking->karyawan_id,'total'=>array_sum($total)]);
	}
	return $results;
}


if(isset($_GET['f'])){
	switch ($_GET['f']){
		case 'run':
			main( $kriterias,$karyawans);
			break;
		default:return;
	}
}