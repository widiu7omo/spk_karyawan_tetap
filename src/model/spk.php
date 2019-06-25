<?php
if (session_status() == PHP_SESSION_NONE) {
	session_start();
}
require_once 'database.php';

function show_hasil_akhir(){
	$db = new Database();
	$q = "SELECT hasil_akhir.*,nama_karyawan FROM hasil_akhir LEFT OUTER JOIN karyawan ON hasil_akhir.karyawan_id = karyawan.id ";
	if($db->query($q)){
		return $db->fetch();
	}
}
function show_hasil_akhir_free_user(){
	$db = new Database();
	$q = "SELECT * FROM karyawan ORDER BY status DESC";
	if($db->query($q)){
		return $db->fetch();
	}
}
function truncate_all_spk(){
	$db = new Database();
	$q = "TRUNCATE data_kriteria";
	if($db->query($q)){
		$_SESSION['status'] = (object) ['status'=>'success','message'=>'Data berhasil dihapus semua'];
		header( 'Location: ../spk-list.php');
	}
}

if(isset($_GET['f'])){
	switch ($_GET['f']){
		case 'truncate':
			truncate_all_spk();
			break;
		default:return;
	}
}
