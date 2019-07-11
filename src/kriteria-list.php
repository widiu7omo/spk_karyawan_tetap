<?php include './partials/head.php';
include 'router/index.php';
include 'model/kriteria.php';
$krits = show_kriteria();
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
							<p class="text-gray">Daftar Kriteria Calon Pegawai Tetap</p>
						</div>
						<div class="float-right">
							<a class="btn btn-primary btn-sm" href="kriteria-management.php?f=simpan">Tambah</a>
						</div>
					</div>
				</div>
				<?php if ( isset( $_SESSION['status'] ) ): ?>
                    <div class="alert alert-<?php echo $_SESSION['status']->status?>"><p><?php echo $_SESSION['status']->message ?></p></div>
					<?php unset( $_SESSION['status'] ) ?>
				<?php endif; ?>
				<div class="row">
					<div class="col-12 py-5">
						<table id="sample-data-table" class="data-table table table-striped dataTable no-footer"
						       role="grid"
						       aria-describedby="sample-data-table_info">
							<thead>
							<tr role="row">
								<th style="width: 5%" class="sorting_asc">No</th>
								<th class="sorting_asc">Name Kriteria</th>
								<th class="sorting_asc">Bobot</th>
								<th class="sorting_asc">Aksi</th>
							</tr>
							</thead>
							<tbody>
							<?php foreach ( $krits as $no=> $krit ):?>
								<tr role="row">
									<td><?php echo $no+1?></td>
									<td class="sorting_1"><?php echo $krit->nama_kriteria?></td>
									<td><?php echo $krit->bobot?></td>
									<td><div class="btn-group">
											<a href="kriteria-management.php?f=edit&id=<?php echo $krit->id?>" class="btn btn-sm btn-secondary"><i class="mdi mdi-account-edit"></i></a>
											<a href="model/kriteria.php?f=delete&id=<?php echo $krit->id?>" class="btn btn-sm btn-secondary"><i class="mdi mdi-delete"></i></a>
										</div></td>
								</tr>
							<?php endforeach;?>

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
<!-- Vendor Js For This Page Ends-->
</body>
</html>