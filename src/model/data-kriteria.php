<?php
if (session_status() == PHP_SESSION_NONE) {
	session_start();
}
require_once 'database.php';

function add_data_kriteria($post){
	$db = new Database();
	$q = "INSERT INTO data_kriteria(kriteria_id, karyawan_id,nilai) VALUES ('$post[kriteria_id]','$post[karyawan_id]','$post[nilai]')";
	if($db->query($q)){
		header('Location: ../spk-list.php');

		$db = new Database();
		$q = "INSERT INTO log(aksi) VALUES ('Admin Menambahkan Data Nilai Karyawan')";
		$db->query($q);
		header('Location: ../spk-list.php');
	}
}
function edit_data_kriteria($post){
	$db = new Database();
	$q = "UPDATE data_kriteria SET nilai='$post[nilai]' WHERE kriteria_id='$post[kriteria_id]' AND karyawan_id='$post[karyawan_id]'";
	if($db->query($q)){
		header('Location: ../spk-list.php');

		$db = new Database();
		$q = "INSERT INTO log(aksi) VALUES ('Admin Meubah Data Nilai Karyawan')";
		$db->query($q);
		header('Location: ../spk-list.php');
	}
}
function delete_data_kriteria($id){
	$db = new Database();
	$q = "DELETE FROM data_kriteria WHERE karyawan_id='$id'";
	if($db->query($q)){
		header('Location: ../spk-list.php');

		$db = new Database();
		$q = "INSERT INTO log(aksi) VALUES ('Admin Menghapus Data Nilai Karyawan')";
		$db->query($q);
		header('Location: ../spk-list.php');
	}
}
function show_data_kriteria($id = null,$where =null,$joins = [[]]){
	$db = new Database();
	$q = "SELECT * FROM data_kriteria";
	foreach ($joins as $join){
		if(count($join)>0){
			$q .= " RIGHT JOIN $join[0] ON $join[1] ";
		}
	}
	if($id != null){
		$q .= " WHERE $where = '$id'";
	}
	if($db->query($q)){
		return $db->fetch();
	}

}
if(isset($_GET['f'])){
	switch ($_GET['f']){
		case 'delete':
			delete_data_kriteria( $_GET['id']);
			break;
		default:return;
	}
}

if(isset($_POST['button'])){
	switch ($_POST['button']){
		case 'simpan':
			if(is_array( $_POST['kriteria_id'])){
				foreach ($_POST['kriteria_id'] as $key=> $k_id){
					$post['kriteria_id'] = $k_id;
					$post['karyawan_id'] = $_POST['karyawan_id'];
					$post['nilai'] = $_POST['nilai'][$key];
					add_data_kriteria($post);
				}
			}
			break;
		case 'edit':
			if(is_array( $_POST['kriteria_id'])){
				foreach ($_POST['kriteria_id'] as $key=> $k_id){
					$post['kriteria_id'] = $k_id;
					$post['karyawan_id'] = $_POST['karyawan_id'];
					$post['nilai'] = $_POST['nilai'][$key];
					edit_data_kriteria( $post);
				}
			}
			break;
		default:echo 'No route available';
	}
}