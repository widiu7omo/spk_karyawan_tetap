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
<div class="page-body">
    <div class="sidebar"></div>
    <div class="page-content-wrapper">
        <div class="page-content-wrapper-inner">
            <h2 class="mb-5 font-weight-light text-center">Pengumuman Penerimaan Karyawan Tetap</h2>
            <div class="content-viewport">
                <div class="row">
                    <div class="col-md-12 col-lg-12 col-sm-12">
                        <div class="grid shadow-lg">
                            <div class="grid-body">
                                <div class="table-responsive">
                                    <div id="complex-header-table_wrapper"
                                         class="dataTables_wrapper dt-bootstrap4 no-footer ">
                                        <div class="row mb-3">
                                            <div class="col-sm-12 col-md-5">
                                                <button class="btn btn-sm btn-primary"></button>
                                                <span>&nbsp;10 Peringkat besar</span>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-sm-12">
                                                <table
                                                       class="table table-striped table-bordered data-table dataTable no-footer hover row-border"
                                                       role="grid" aria-describedby="complex-header-table_info">
                                                    <thead>
                                                    <tr class="header-grouping-label" role="row">
                                                        <th style="font-size: 150%" rowspan="1" colspan="2">Info
                                                            Karyawan
                                                        </th>
                                                        <th style="font-size: 150%" colspan="1" rowspan="1">Hasil
                                                            Perhitungan Karyawan
                                                        </th>
                                                    </tr>
                                                    <tr role="row">
                                                        <th style="font-size: 150%" width="2%">#</th>
                                                        <th style="font-size: 150%"
                                                            rowspan="1" colspan="1"
                                                        >Nama Karyawan
                                                        </th>
                                                        <th style="font-size: 150%"
                                                            rowspan="1" colspan="1" width="25%">Hasil Perhitungan
                                                        </th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
													<?php foreach ( $hasil_akhirs as $no => $hasil ): ?>
                                                        <tr role="row" class="<?php echo $no>9?null:'bg-primary'?>">
                                                            <td style="font-size: 150%"><?php echo $no + 1 ?></td>
                                                            <td style="font-size: 150%"><?php echo $hasil->nama_karyawan ?></td>
                                                            <td style="font-size: 150%;font-weight: bold"><?php echo $hasil->total ?></td>
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