<?php include './partials/head.php';
require_once './model/spk.php';
$hasil_akhirs = show_hasil_akhir();

//rankingin
function compare_score( $a, $b ) {
	return strcmp( $b->total, $a->total );
}

usort( $hasil_akhirs, "compare_score" );
?>
<body class="header-fixed sidebar-minimized">
<?php include './partials/_header-free.php' ?>
<!-- partial -->
<div class="page-body"><!-- partial:../../partials/_sidebar.html -->
    <div class="sidebar"></div>
    <div class="page-content-wrapper">
        <div class="page-content-wrapper-inner">
            <div class="viewport-header">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb has-arrow">
                        <li class="breadcrumb-item"><a href="#"><h3>Pengumuman Penerimaan Karyawan Tetap</h3></a></li>
                    </ol>
                </nav>
            </div>
            <div class="content-viewport">
                <div class="row">
                    <div class="col-md-12 col-lg-12 col-sm-12">
                        <div class="card shadow-sm">
                            <div class="card-header bg-info">
                                <h5 class="text-white">Berikut daftar peringkat karyawan</h5>
                                <small class="text-white-50">peringkat lebih tinggi memiliki peluang lebih besar menjadi
                                    karyawan tetap
                                </small>
                            </div>
                            <div class="card-body">
                                <div class="row">
									<?php foreach ( $hasil_akhirs as $no => $hasil ): ?>
                                        <div class="col-md-4 col-sm-12 col-lg-3">
                                            <div class="card shadow-sm mx-auto pb-4 my-2">
                                                <div class="card-header"><h4 class="text-info">Peringkat ke-<?php echo $no + 1 ?></h4>
                                                </div>
                                                <div class="card-body">
                                                    <div class="d-flex flex-column align-content-end">
                                                        <div class="bg-warning float-right" style="position: absolute;right:3px;bottom:3px;border-radius: 50%;height: 60px;width: 60px;">
                                                            <p class="h4 text-white mt-3 ml-2"><?php echo $hasil->total ?></p>
                                                        </div>
                                                        <h5 class="mb-2"><?php echo $hasil->nama_karyawan ?></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
									<?php endforeach; ?>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div><!-- content viewport ends --><!-- partial:../../partials/_footer.html -->
		<?php include './partials/_footer.php' ?>
        <!--page body ends -->
        <!-- SCRIPT LOADING START FORM HERE /////////////-->
        <!-- plugins:js -->
		<?php include './partials/_js.php' ?>
        <!-- Vendor Js For This Page Ends-->
</body>
</html>