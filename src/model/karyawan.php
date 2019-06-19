<?php
if (session_status() == PHP_SESSION_NONE) {
	session_start();
}
require_once 'database.php';

function add_karyawan($post){
	$db = new Database();
	$q = "INSERT INTO karyawan(nama_karyawan, umur, ttl) VALUES ('$post[nama]','$post[umur]','$post[ttl]')";
	if($db->query($q)){
		header('Location: ../karyawan-list.php');
	}
}
function edit_karyawan($post){
	$db = new Database();
	$q = "UPDATE karyawan SET nama_karyawan='$post[nama]',umur='$post[umur]',ttl='$post[ttl]' WHERE id = '$post[id]'";
	if($db->query($q)){
		header('Location: ../karyawan-list.php');
	}
}
function delete_karyawan($id){
	$db = new Database();
	$q = "DELETE FROM karyawan WHERE id='$id'";
	if($db->query($q)){
		header('Location: ../karyawan-list.php');
	}
}
function show_karyawan($id = null,$join = []){
	$db = new Database();
	$q = "SELECT * FROM karyawan";
	if($id != null){
		$q .= " WHERE id = '$id'";
	}
	if($db->query($q)){
		return $db->fetch();
	}

}
if(isset($_GET['f'])){
	switch ($_GET['f']){
		case 'delete':
			delete_karyawan( $_GET['id']);
			break;
		default:return;
	}
}

if(isset($_POST['button'])){
	switch ($_POST['button']){
		case 'simpan':
			add_karyawan($_POST);
			break;
		case 'edit':
			edit_karyawan( $_POST);
			break;
		default:echo 'No route available';
	}
}