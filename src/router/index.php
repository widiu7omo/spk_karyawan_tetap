<?php
if (session_status() == PHP_SESSION_NONE) {
	session_start();
}
$session = $_SESSION;
if(isset($session['level'])){
	switch ($session['level']){
		case 'admin':
			echo $session['level']!== 'admin'?'<script>window.location.href = "error.php"</script>':null;
			break;
		default:echo '<script>window.location.href = "free-user.php"</script>';
	}
}
else{
	echo '<script>window.location.href = "free-user.php"</script>';
}