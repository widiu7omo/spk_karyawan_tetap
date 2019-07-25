<?php include './partials/head.php';
include 'router/index.php';
include 'model/database.php';
$db = new Database();
$q = "SELECT * FROM log";
$db->query($q);
$logs = $db->fetch();
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
							<h4>Logs</h4>

							<p class="text-gray">Daftar History Aktifitas</p>
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
								<th class="sorting_asc">Aksi</th>
								<th class="sorting_asc">Waktu</th>
							</tr>
							</thead>
							<tbody>
							<?php foreach ( $logs as $no => $log ): ?>
								<tr role="row">
									<td><?php echo $no + 1 ?></td>
									<td><?php echo $log->aksi?></td>
									<td><?php echo $log->date ?></td>
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
            'excel', 'pdf', 'print'
        ]
    })
</script>
<!-- Vendor Js For This Page Ends-->
</body>
</html>