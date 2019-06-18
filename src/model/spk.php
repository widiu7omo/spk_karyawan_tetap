<?php

require_once 'database.php';

function add_spk($post){
	$db = new Database();
	$q = "INSERT INTO kriteria(nama_kriteria, bobot,bobotpecahan) VALUES ('$post[nama]','$post[bobot]','$post[bobotpecahan]')";
	if($db->query($q)){
		header('Location: ../kriteria-list.php');
	}
}
function edit_spk($post){
	$db = new Database();
	$q = "UPDATE kriteria SET nama_kriteria='$post[nama]',bobot='$post[bobot]',bobotpecahan='$post[bobotpecahan]' WHERE id = '$post[id]'";
	if($db->query($q)){
		header('Location: ../kriteria-list.php');
	}
}
function delete_spk($id){
	$db = new Database();
	$q = "DELETE FROM kriteria WHERE id='$id'";
	if($db->query($q)){
		header('Location: ../kriteria-list.php');
	}
}
function show_spk($id = null){
	$db = new Database();
	$q = "SELECT * FROM kriteria";
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
			delete_spk( $_GET['id']);
			break;
		default:return;
	}
}

if(isset($_POST['button'])){
	switch ($_POST['button']){
		case 'simpan':
			add_spk($_POST);
			break;
		case 'edit':
			edit_spk( $_POST);
			break;
		default:echo 'No route available';
	}
}