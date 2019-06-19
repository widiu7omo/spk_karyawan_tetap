<?php
if ( session_status() == PHP_SESSION_NONE ) {
	session_start();
}
$session = $_SESSION;
if ( isset( $session['level'] ) ) {
	switch ( $session['level'] ) {
		case 'admin':
			echo '<script>window.location.href = "dashboard.php"</script>';
			break;
		default:
			echo '<script>window.location.href = "free-user.php"</script>';
	}
} else {
	echo '<script>window.location.href = "free-user.php"</script>';
}