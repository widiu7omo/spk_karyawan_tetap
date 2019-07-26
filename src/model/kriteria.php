<?php
if (session_status() == PHP_SESSION_NONE) {
	session_start();
}
require_once 'database.php';

function add_kriteria($post){
	$db = new Database();
	$q = "SELECT nama_kriteria FROM kriteria WHERE nama_kriteria LIKE '%$post[nama]%'";
	if($db->query( $q)){
		if(count( $db->fetch())==0){
			$q = "INSERT INTO kriteria(nama_kriteria, bobot,bobotpecahan) VALUES ('$post[nama]','$post[bobot]','$post[bobotpecahan]')";
			if($db->query($q)){
				header('Location: ../kriteria-list.php');
			}
		}
		else{
			$_SESSION['status'] = (object) ['status'=>'danger','message'=>'Kriteria tidak boleh sama'];
			header('Location: ../kriteria-list.php');
		}

	}
	$db = new Database();
	$q = "INSERT INTO log(aksi) VALUES ('Admin Menambahkan Data Kriteria')";
	$db->query($q);
	header('Location: ../kriteria-list.php');

}
function edit_kriteria($post){
	$db = new Database();
	$q = "UPDATE kriteria SET nama_kriteria='$post[nama]',bobot='$post[bobot]',bobotpecahan='$post[bobotpecahan]' WHERE id = '$post[id]'";
	if($db->query($q)){
		header('Location: ../kriteria-list.php');

		$db = new Database();
		$q = "INSERT INTO log(aksi) VALUES ('Admin Meubah Data Kriteria')";
		$db->query($q);
		header('Location: ../kriteria-list.php');
	}
}
function delete_kriteria($id){
	$db = new Database();
	$q = "DELETE FROM kriteria WHERE id='$id'";
	if($db->query($q)){
		header('Location: ../kriteria-list.php');

		$db = new Database();
		$q = "INSERT INTO log(aksi) VALUES ('Admin Menghapus Data Kriteria')";
		$db->query($q);
		header('Location: ../kriteria-list.php');
	}
}
function show_kriteria($id = null){
	$db = new Database();
	$q = "SELECT * FROM kriteria";
	if($id != null){
		$q .= " WHERE id = '$id'";
	}
	if($db->query($q)){
		return $db->fetch();
	}

	$db = new Database();
	$q = "INSERT INTO log(aksi) VALUES ('Admin Menlihat Data Kriteria')";
	$db->query($q);

}
if(isset($_GET['f'])){
	switch ($_GET['f']){
		case 'delete':
			delete_kriteria( $_GET['id']);
			break;
		default:return;
	}
}

if(isset($_POST['button'])){
	switch ($_POST['button']){
		case 'simpan':
			add_kriteria($_POST);
			break;
		case 'edit':
			edit_kriteria( $_POST);
			break;
		default:echo 'No route available';
	}
}