<?php include './partials/head.php';
include 'router/index.php';
include 'model/karyawan.php';
if ( isset( $_GET['status'] ) ) {
	$karys = $_GET['status'] == 'tetap' ? show_karyawan_tetap() : show_karyawan();
} else {
	$karys = show_karyawan_tetap();
}
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
							<?php if ( $_GET['status'] == 'tetap' ): ?>
                                <p class="text-gray">Daftar Karyawan Tetap</p>
							<?php else: ?>
                                <p class="text-gray">Daftar Calon Karyawan Tetap</p>
							<?php endif; ?>
                        </div>
                        <div class="float-right">
							<?php if ( isset( $_GET['status'] ) && $_GET['status'] == 'calon' ): ?>
                                <a class="btn btn-primary btn-sm" href="karyawan-management.php?f=simpan">Tambah</a>
							<?php endif; ?>
                        </div>
                    </div>
                </div>
				<?php if ( isset( $_SESSION['status'] ) ): ?>
                    <div class="alert alert-success"><p><?php echo $_SESSION['status']->message ?></p></div>
					<?php unset( $_SESSION['status'] ) ?>
				<?php endif; ?>
                <div class="row">
                    <div class="col-12 py-5">
                        <table id="list-karyawan" class="data-table table table-striped dataTable no-footer"
                               role="grid"
                               aria-describedby="sample-data-table_info">
                            <thead>
                            <tr role="row">
                                <th style="width: 5%" class="sorting_asc">No</th>
                                <th class="sorting_asc">Name</th>
                                <th class="sorting_asc">Umur</th>
                                <th class="sorting_asc">Tanggal Lahir</th>
                                <th class="sorting_asc">Aksi</th>
                            </tr>
                            </thead>
                            <tbody>
							<?php foreach ( $karys as $no => $kary ): ?>
                                <tr role="row">
                                    <td><?php echo $no + 1 ?></td>
                                    <td class="sorting_1"><?php echo $kary->nama_karyawan ?></td>
                                    <td><?php echo $kary->umur ?></td>
                                    <td><?php echo $kary->ttl ?></td>
                                    <td>
                                        <div class="btn-group">
                                            <a href="karyawan-management.php?f=edit&id=<?php echo $kary->id ?>"
                                               class="btn btn-sm btn-secondary"><i class="mdi mdi-account-edit"></i></a>
                                            <a href="model/karyawan.php?f=delete&id=<?php echo $kary->id ?>"
                                               class="btn btn-sm btn-secondary"><i class="mdi mdi-delete"></i></a>
                                        </div>
                                    </td>
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