<?php include './partials/head.php';
include 'router/index.php';
include 'model/karyawan.php';
include 'model/kriteria.php';
include 'model/data-kriteria.php';
$karys     = show_karyawan();
$kriterias = show_kriteria();
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
                            <p class="text-gray">SPK Calon Karyawan Tetap</p>
                        </div>
                        <div class="float-right">
                            <a class="btn btn-success btn-sm mr-2" href="spk-hitungan.php?f=run">Hitung Ranking
                                Karyawan</a>
                            <a class="btn btn-primary btn-sm mr-2" href="spk-management.php?f=simpan">Tambah Data</a>
                            <button type="button" id="btn-modal-delete-all"
                                    class="btn btn-danger btn-sm"
                                    data-toggle="modal"
                                    data-target="#header-filled-error-modal">
                                Hapus Semua Data
                            </button>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12 py-2">
						<?php if ( isset( $_SESSION['status'] ) ): ?>
                            <div class="alert alert-warning"><p><?php echo $_SESSION['status']->message ?></p></div>
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
                                                <th>Aksi</th>
                                                <th class="sorting_asc">No</th>
                                                <th class="sorting_asc">Nama Karyawan</th>
												<?php foreach ( $kriterias as $kriteria ): ?>
                                                    <th class="none"><?php echo $kriteria->nama_kriteria ?></th>
												<?php endforeach; ?>

                                            </tr>
                                            </thead>
                                            <tbody>
											<?php foreach ( $karys as $no => $kary ): ?>
                                                <tr role="row">
												<?php $data_kriterias = show_data_kriteria( $kary->id, 'karyawan_id', [
													[
														'calon_karyawan',
														'data_kriteria.karyawan_id = calon_karyawan.id'
													],
													[ 'kriteria', 'data_kriteria.kriteria_id = kriteria.id' ]
												] ); ?>
												<?php if ( count( $data_kriterias ) > 0 ): ?>
                                                    <td>
                                                        <div class="btn-group">
                                                            <a href="spk-management.php?f=edit&id=<?php echo $kary->id ?>"
                                                               class="btn btn-sm btn-secondary"><i
                                                                        class="mdi mdi-account-edit"></i></a>
                                                            <button type="button" id="btn-modal"
                                                                    class="btn btn-danger btn-sm"
                                                                    data-toggle="modal"
                                                                    data-target="#header-filled-error-modal"
                                                                    data-id="<?php echo $kary->id ?>">
                                                                <i class="mdi mdi-delete"></i>
                                                            </button>
                                                            <!--                                                            <a href="model/data-kriteria.php?f=delete&id=-->
															<?php //echo $kary->id ?><!--"-->
                                                            <!--                                                               class="btn btn-sm btn-secondary"><i class="mdi mdi-delete"></i></a>-->
                                                        </div>
                                                    </td>
                                                    <td class="sorting_1"><?php echo $no + 1 ?></td>
                                                    <td class="sorting_1"><?php echo $kary->nama_karyawan ?></td>

													<?php foreach ( $data_kriterias as $data_kriteria ): ?>
                                                        <td><?php echo $data_kriteria->nilai ?></td>
													<?php endforeach; ?>

                                                    </tr>
												<?php endif ?>
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
		<?php include './partials/_modal.php' ?>
        <!-- partial -->
    </div>
    <!-- page content ends -->
</div>
<!--page body ends -->
<!-- SCRIPT LOADING START FORM HERE /////////////-->
<!-- plugins:js -->
<?php include './partials/_js.php' ?>
<script>
    $(document).on('click', '#btn-modal', function () {
        let id = $(this).data('id');
        $('div.modal-header>h4').text('Peringatan !!!');
        let textDialog = $('.modal-body').children('#textDialog');
        let operationButton = $('.modal-footer').children('#operation');

        if (textDialog.length == 0) {
            $('.modal-body').append('<p id="textDialog" class="h6">Apakah anda yakin untuk menghapus data karyawan?</p>');
            $('.modal-footer').append('<a href="./model/data-kriteria.php?f=delete&id=' + id + '" id="operation" class="btn btn-sm btn-danger">Delete</a>');
        } else {
            textDialog.replaceWith('<p id="textDialog" class="h6">Apakah anda yakin untuk menghapus data karyawan?</p>');
            operationButton.replaceWith('<a href="./model/data-kriteria.php?f=delete&id=' + id + '" id="operation" class="btn btn-sm btn-danger">Delete</a>');
        }

    })
    $(document).on('click','#btn-modal-delete-all',function(){
        $('div.modal-header>h4').text('Peringatan !!!');
        let textDialog = $('.modal-body').children('#textDialog');
        let operationButton = $('.modal-footer').children('#operation');

        if (textDialog.length == 0) {
            $('.modal-body').append('<p id="textDialog" class="h6">Apakah anda yakin untuk semua data karyawan?</p>');
            $('.modal-footer').append('<a href="./model/spk.php?f=truncate" id="operation" class="btn btn-sm btn-danger">Delete</a>');
        } else {
            textDialog.replaceWith('<p id="textDialog" class="h6">Apakah anda yakin untuk menghapus semua data karyawan?</p>');
            operationButton.replaceWith('<a href="./model/spk.php?f=truncate" id="operation" class="btn btn-sm btn-danger">Delete</a>');
        }
    })
    $('#myModal').on('hidden.bs.modal', function () {
        $('#textDialog').remove();
        $('a#operation').remove();
    })
    $("#spk-data-table").DataTable({})
</script>
<!-- Vendor Js For This Page Ends-->
</body>
</html>