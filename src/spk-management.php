<?php include './partials/head.php';
include 'router/index.php';
include 'model/data-kriteria.php';
include 'model/getdata.php';
include 'model/karyawan.php';
include 'model/kriteria.php';
if ( isset( $_GET['id'] ) ) {
	$data_kriterias = show_data_kriteria( $_GET['id'] ,'karyawan_id');
	$karyawan = show_karyawan($data_kriterias[0]->karyawan_id);
}
$kriterias = show_kriteria();
$karyawans = get_data("SELECT calon_karyawan.id,nama_karyawan FROM calon_karyawan LEFT OUTER JOIN data_kriteria ON calon_karyawan.id = data_kriteria.karyawan_id WHERE data_kriteria.karyawan_id IS NULL ORDER BY nama_karyawan");
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
                            <h4>Calon Karyawan</h4>
                            <p class="text-gray">Input Data Calon Karyawan</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="grid"><p class="grid-header">Input Types</p>
                            <div class="grid-body">
                                <div class="item-wrapper">
                                    <div class="row mb-3">
                                        <form class="col-md-9" action="model/data-kriteria.php" method="POST">
                                            <div class="col-md-9 mx-auto">
                                                <div class="row showcase_row_area">
                                                    <div class="col-md-3 showcase_text_area pt-3">
                                                        <label>Pilih Karyawan</label>
                                                    </div>
                                                    <div class="col-md-9 showcase_content_area">
                                                        <select class="custom-select" id="pilih-karyawan" name="karyawan_id">
	                                                        <?php if(!isset($_GET['id'])):?>
                                                            <option selected="selected">Pilih Karyawan</option>
	                                                        <?php endif;?>
	                                                        <?php if(isset($_GET['id'])):?>
                                                                <option selected="selected" value="<?php echo $data_kriterias[0]->karyawan_id?>"><?php echo $karyawan[0]->nama_karyawan?></option>
	                                                        <?php endif;?>
		                                                    <?php foreach ($karyawans as $karyawan): ?>
                                                                <option value="<?php echo $karyawan->id ?>"><?php echo $karyawan->nama_karyawan ?></option>
	                                                        <?php endforeach;?>
                                                        </select>
                                                    </div>
                                                </div>
												<?php foreach ( $kriterias as $key=> $kriteria ): ?>
                                                    <div class="form-group row showcase_row_area">
                                                        <div class="col-md-3 showcase_text_area">
                                                            <label for="inputType1 text-left">Nilai <?php echo $kriteria->nama_kriteria ?></label>
                                                        </div>
                                                        <div class="col-md-9 showcase_content_area">
                                                            <input type="hidden" name="kriteria_id[]"
                                                                   value="<?php echo isset( $data_kriterias[$key]->kriteria_id )&&$data_kriterias[$key]->kriteria_id == $kriteria->id ? $data_kriterias[$key]->kriteria_id : $kriteria->id ?>">

                                                            <input type="number"
                                                                   min="0"
                                                                   max="10"
                                                                   maxlength="2"
                                                                   required
                                                                   class="form-control"
                                                                   id="inputType1"
                                                                   name="nilai[]"
                                                                   value="<?php echo isset( $data_kriterias[$key]->nilai)&&$data_kriterias[$key]->kriteria_id == $kriteria->id ? $data_kriterias[$key]->nilai : null ?>">
                                                        </div>
                                                    </div>
												<?php endforeach; ?>
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
<script src="../assets/vendors/select2/select2.min.js"></script>
<script>
    $(document).ready(function() {
        $('#pilih-karyawan').select2();
    });
</script>
<!-- Vendor Js For This Page Ends-->
</body>
</html>