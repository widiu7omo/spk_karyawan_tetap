<?php
if (session_status() == PHP_SESSION_NONE) {
	session_start();
}
require_once 'database.php';
function login($post){
	$db = new Database();
	$q = "SELECT * FROM user WHERE username = '$post[username]' AND password = '$post[password]'";
	if($db->query($q)){
		$res = $db->fetch();
		if(count($res)>0){
			$_SESSION['level'] = $res[0]->level;
			$_SESSION['name'] = $res[0]->nama_user;
			header( 'Location: ../index.php');
		}
	}
}
function logout(){
	session_destroy();
	header( 'Location: ../login.php');
}
if(isset($_GET['f'])) {
	switch ($_GET['f']){
		case 'logout':
			logout();
			break;
	}
}

if(isset($_POST['button'])){
	switch ($_POST['button']){
		case 'login':
			login($_POST);
			break;
		default: echo 'no route available';
	}
}