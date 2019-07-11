<?php include './partials/head.php';
include 'router/index.php';
require_once './model/spk.php';
$hasil_akhirs = show_hasil_akhir();

//rankingin
function compare_score( $a, $b ) {
	return strcmp( $b->total, $a->total );
}

usort( $hasil_akhirs, "compare_score" );
?>
<body class="header-fixed">
<?php include './partials/_header.php' ?>
<!-- partial -->
<div class="page-body">
	<?php include './partials/_sidebar.php' ?>
    <!-- partial -->
    <div class="page-content-wrapper">
        <div class="page-content-wrapper-inner">
            <div class="content-viewport">
                <div class="row">
                    <div class="col-12 d-flex justify-content-between py-2">
                        <div>
                            <h4>Pendukung Keputusan</h4>
                            <p class="text-gray">Hasil SPK Calon Karyawan Tetap</p>
                        </div>
                        <div class="float-right">
                            <form action="model/karyawan.php" method="post">
                                <button class="btn btn-sm btn-primary" name="button" value="set">Masukkan sebagai
                                    karyawan tetap dan hapus hasil penghitungan
                                </button>
                            </form>
                            <!--                            <h5 class="pt-4 text-warning">Berikut hasil dari calon karyawan tetap</h5>-->
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12 py-2">
						<?php if ( isset( $_SESSION['status'] ) ): ?>
                            <div class="alert alert-success"><p><?php echo $_SESSION['status']->message ?></p></div>
							<?php unset( $_SESSION['status'] ) ?>
						<?php endif; ?>
                        <div class="grid">
                            <div class="grid-body shadow-sm">
                                <div class="item-wrapper">
                                    <div class="table-responsive">
                                        <table id="spk-data-table"
                                               class="table display row-border"
                                               style="width: 100%;">
                                            <thead>
                                            <tr role="row">
                                                <th class="sorting_asc">#</th>
                                                <th class="sorting_asc">Ranking</th>
                                                <th class="sorting_asc">Nama Karyawan</th>
                                                <th>Skor</th>
                                                <th>Status</th>
                                            </tr>
                                            </thead>
                                            <tbody>
											<?php foreach ( $hasil_akhirs as $no => $hasil_akhir ): ?>
                                                <tr role="row" class="<?php echo $no < 5 ? "bg-primary" : null ?>">
                                                    <td class="sorting_1"><?php echo $no + 1 ?></td>
                                                    <td class="sorting_1">Peringkat ke-<?php echo $no + 1 ?></td>
                                                    <td class="sorting_1"><?php echo $hasil_akhir->nama_karyawan ?></td>
                                                    <td class="sorting_1"><?php echo $hasil_akhir->total ?></td>
                                                    <td><?php echo $no < 5 ? "Terpilih Karyawan Tetap" : "Belum Mencukupi" ?></td>
                                                </tr>
											<?php endforeach; ?>

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
        <!-- content viewport ends -->
		<?php include './partials/_footer.php' ?>
        <!-- partial -->
    </div>
    <!-- page content ends -->
</div>
<!--page body ends -->
<!-- SCRIPT LOADING START FORM HERE /////////////-->
<!-- plugins:js -->
<?php include './partials/_js.php' ?>
<!-- Vendor Js For This Page Ends-->
</body>
</html>