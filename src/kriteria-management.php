<?php include './partials/head.php';
include 'router/index.php';
include 'model/kriteria.php';
if ( isset( $_GET['id'] ) ) {
	$kriteria = show_kriteria( $_GET['id'] );
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
                            <h4>Kriteria</h4>
                            <p class="text-gray">Input Data Kriteria</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="grid"><p class="grid-header">Input Types</p>
                            <div class="grid-body">
                                <div class="item-wrapper">
                                    <div class="row mb-3">
                                        <form class="col-md-9" action="model/kriteria.php" method="POST">
                                            <div class="col-md-9 mx-auto">
                                                <div class="form-group row showcase_row_area">
                                                    <div class="col-md-3 showcase_text_area">
                                                        <label for="inputType1">Nama Kriteria</label></div>
                                                    <div class="col-md-9 showcase_content_area">
                                                        <input type="hidden" name="id"
                                                               value="<?php echo isset( $kriteria[0]->id ) ? $kriteria[0]->id : null ?>">
                                                        <input type="text"
                                                               class="form-control"
                                                               id="inputType1"
                                                               name="nama"
                                                               value="<?php echo isset( $kriteria[0]->nama_kriteria ) ? $kriteria[0]->nama_kriteria : null ?>">
                                                    </div>
                                                </div>
                                                <div class="form-group row showcase_row_area">
                                                    <div class="col-md-3 showcase_text_area">
                                                        <label for="inputType12">Bobot Kriteria</label></div>
                                                    <div class="col-md-9 showcase_content_area">
                                                        <input type="number"
                                                               required
                                                               maxlength="2"
                                                               max="100"
                                                               class="form-control"
                                                               name="bobot"
                                                               id="inputType2"
                                                               value="<?php echo isset( $kriteria[0]->bobot ) ? $kriteria[0]->bobot : null ?>">
                                                    </div>

                                                </div>
                                                <div class="form-group row showcase_row_area">
                                                    <div class="col-md-3 showcase_text_area">
                                                        <label for="inputType12">Bobot dalam desimal</label>
                                                    </div>
                                                    <div class="col-md-9 showcase_content_area">
                                                        <input type="number"
                                                               readonly
                                                               class="form-control"
                                                               name="bobotpecahan"
                                                               id="inputType2"
                                                               value="<?php echo isset( $kriteria[0]->bobotpecahan ) ? $kriteria[0]->bobotpecahan : 0 ?>">
                                                    </div>
                                                </div>

                                                <button class="btn btn-primary float-right"
                                                        value="<?php echo $_GET['f'] ?>" name="button">Simpan
                                                </button>
                                            </div>
                                        </form>
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
<script>
    $('[name="bobot"]').on('blur', function () {
        let bobotpecahan = $(this).val() / 100;
        $('[name="bobotpecahan"]').val(bobotpecahan);
    })
</script>
<!-- Vendor Js For This Page Ends-->
</body>
</html>