<?php include './partials/head.php';
include './model/getdata.php';
$calons                = get_data( "SELECT * FROM history_pemilihan_karyawan ORDER BY status desc LIMIT 5" );
$jumlah_belum          = get_data( "SELECT COUNT(*) as calon FROM calon_karyawan" );
$jumlah_karyawan_tetap = get_data( "SELECT COUNT(*) as tetap FROM karyawan_tetap" );
?>
<body class="header-fixed">
<!-- partial:partials/_header.html -->
<?php include './partials/_header.php' ?>
<!-- partial -->
<div class="page-body">
    <!-- partial:partials/_sidebar.html -->
	<?php include './partials/_sidebar.php' ?>
    <!-- partial -->
    <div class="page-content-wrapper">
        <div class="page-content-wrapper-inner">
            <div class="content-viewport">
                <div class="row">
                    <div class="col-12 py-5">
                        <h4>Dashboard</h4>
                        <p class="text-gray">Selamat Datang, <?php echo $_SESSION['name'] ?> </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 equel-grid">
                        <div class="grid shadow-sm">
                            <div class="grid-body">
                                <div class="ct-chart"></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 equel-grid">
                        <div class="grid shadow-sm">
                            <div class="grid-body py-3">
                                <p class="card-title ml-n1">Peringkat 5 Besar Karyawan yang akan diangkat menjadi
                                    karyawan tetap</p>
                            </div>
                            <div class="table-responsive">
                                <table class="table table-hover table-sm">
                                    <thead>
                                    <tr class="solid-header">
                                        <th class="pl-5">Nama</th>
                                        <th>Peringkat</th>
                                    </tr>
                                    </thead>
                                    <tbody>
									<?php foreach ( $calons as $n => $calon ): ?>
                                        <tr>
                                            <td class="pl-5">
                                                <small class="text-black font-weight-medium d-block"><?php echo $calon->nama_karyawan ?></small>
                                                <span class="text-gray">
                              <span class="status-indicator rounded-indicator small bg-primary"></span>Terpilih Karyawan Tetap</span>
                                            </td>
                                            <td>
<!--                                                <small>--><?php //echo $calon->total ?><!--</small>-->
                                            </td>
                                            <td> Ke-<?php echo $n + 1 ?> </td>
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
        <!-- content viewport ends -->
        <!-- partial:partials/_footer.html -->
        <footer class="footer">
            <div class="row">
                <div class="col-sm-6 text-center text-sm-right order-sm-1">
                    <ul class="text-gray">
                        <li><a href="#">Terms of use</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
                <div class="col-sm-6 text-center text-sm-left mt-3 mt-sm-0">
                    <small class="text-muted d-block">Copyright © 2019 <a href="http://www.uxcandy.co" target="_blank">UXCANDY</a>.
                        All rights reserved
                    </small>
                    <small class="text-gray mt-2">Handcrafted With <i class="mdi mdi-heart text-danger"></i></small>
                </div>
            </div>
        </footer>
        <!-- partial -->
    </div>
    <!-- page content ends -->
</div>
<!--page body ends -->
<!-- SCRIPT LOADING START FORM HERE /////////////-->
<!-- plugins:js -->
<script src="../assets/vendors/js/core.js"></script>
<!-- endinject -->
<!-- Vendor Js For This Page Ends-->
<script src="../assets/vendors/js/vendor.addons.js"></script>
<script src="../assets/js/script.js"></script>
<script>
	<?php
	$karyawan = array();
	$karyawan[] = $jumlah_karyawan_tetap[0]->tetap;
	$karyawan[] = $jumlah_belum[0]->calon;
	?>
    new Chartist.Bar('.ct-chart', {
        labels: ['Karyawan Tetap', 'Karyawan Kontrak'],
        series: [
			<?php echo json_encode( $karyawan ) ?>
        ]
    }, {
        stackBars: true,
        axisY: {
            labelInterpolationFnc: function (value) {
                return (value) + '%';
            }
        }
    }).on('draw', function (data) {
        if (data.type === 'bar') {
            data.element.attr({
                style: 'stroke-width: 30px'
            });
        }
    });
</script>
<!-- Vendor Js For This Page Ends-->
</body>
</html>