<?php include './partials/head.php';
include 'router/index.php';
include 'model/karyawan.php';
$karys = show_history_karyawan_tetap();
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
                            <h4>Master</h4>

                            <p class="text-gray">Daftar History Perhitungan Karyawan</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 py-5">
                        <table id="list-karyawan" class="table table-striped table-bordered data-table dataTable no-footer hover row-border"
                               role="grid"
                               aria-describedby="sample-data-table_info">
                            <thead>
                            <tr role="row">
                                <th style="width: 5%" class="sorting_asc">No</th>
                                <th style="width: 2%;" class="sorting_asc">Batch Pengambilan</th>
                                <th class="sorting_asc">Waktu Pengambilan</th>
                                <th class="sorting_asc">Name</th>
                                <th class="sorting_asc">Umur</th>
                                <th class="sorting_asc">Status</th>
                            </tr>
                            </thead>
                            <tbody>
							<?php foreach ( $karys as $no => $kary ): ?>
                                <tr role="row" class="<?php echo $kary->status == 1 ?'':null?>">
                                    <td><?php echo $no + 1 ?></td>
                                    <td><?php echo $kary->batch_pengambilan ?></td>
                                    <td><?php echo $kary->waktu_pemilihan ?></td>
                                    <td class="sorting_1"><?php echo $kary->nama_karyawan ?></td>
                                    <td><?php echo $kary->umur ?></td>
                                    <td><?php echo $kary->status == 1 ? 'Terpilih Karyawan Tetap' : 'Belum Mencukupi' ?></td>
                                </tr>
							<?php endforeach; ?>

                            </tbody>
                        </table>
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
<script>
    $('#list-karyawan').dataTable({
        dom: 'Bfrtip',
        buttons: [
            'csv', 'excel', 'pdf', 'print'
        ]
    })
</script>
<!-- Vendor Js For This Page Ends-->
</body>
</html>