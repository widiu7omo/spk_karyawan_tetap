<?php
if (session_status() == PHP_SESSION_NONE) {
	session_start();
}
require_once 'database.php';

function add_karyawan($post){
	$db = new Database();
	$q = "INSERT INTO calon_karyawan(nama_karyawan, umur, ttl) VALUES ('$post[nama]','$post[umur]','$post[ttl]')";
	if($db->query($q)){
		header('Location: ../karyawan-list.php?status=calon');
	}
}
function edit_karyawan($post){
	$db = new Database();
	$q = "UPDATE calon_karyawan SET nama_karyawan='$post[nama]',umur='$post[umur]',ttl='$post[ttl]' WHERE id = '$post[id]'";
	if($db->query($q)){
		header('Location: ../karyawan-list.php?status=calon');
	}
}
function delete_karyawan($id){
	$db = new Database();
	$q = "DELETE FROM calon_karyawan WHERE id='$id'";
	if($db->query($q)){
		header('Location: ../karyawan-list.php?status=calon');
	}
}
function show_karyawan_tetap(){
	$db = new Database();
	$q = "SELECT * FROM karyawan_tetap";
	if($db->query($q)){
		return $db->fetch();
	}
}
function show_karyawan($id = null,$join = [],$where =[]){
	$db = new Database();
	$q = "SELECT * FROM calon_karyawan";
	if($id != null){
		$q .= " WHERE id = '$id'";
	}
	if(count($where) > 0){
		$q .= " WHERE $where[0] = $where[1]";
	}
	if($db->query($q)){
		return $db->fetch();
	}

}
function set_karyawan_tetap(){
	$db = new Database();

	$q = "update calon_karyawan inner join (select * from hasil_akhir order by total desc limit 5) hasil_akhir on karyawan.id = hasil_akhir.karyawan_id set karyawan.status = 1 where karyawan.status = 0";
	if($db->query($q)){
		$q = "TRUNCATE hasil_akhir";
		$db->query($q);
		$q = "TRUNCATE data_kriteria";
		$db->query($q);
		$_SESSION['status'] = (object) ['status'=>'success','message'=>'5 Karyawan berhasil dijadikan karyawan tetap'];
		header('Location: ../karyawan-list.php?status=tetap');
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
		case 'set':
			set_karyawan_tetap();
			break;
		default:echo 'No route available';
	}
}