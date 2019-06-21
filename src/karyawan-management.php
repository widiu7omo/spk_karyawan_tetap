<?php include './partials/head.php';
include 'router/index.php';
include 'model/karyawan.php';
if(isset($_GET['id'])){
	$karyawan = show_karyawan($_GET['id']);
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
                                        <form class="col-md-9" action="model/karyawan.php" method="POST">
                                        <div class="col-md-9 mx-auto">
                                            <div class="form-group row showcase_row_area">
                                                <div class="col-md-3 showcase_text_area">
                                                    <label for="inputType1">Nama</label></div>
                                                <div class="col-md-9 showcase_content_area">
                                                    <input type="hidden" name="id" value="<?php echo isset($karyawan[0]->id)?$karyawan[0]->id:null?>">
                                                    <input type="text"
                                                           class="form-control"
                                                           id="inputType1"
                                                           name="nama"
                                                           value="<?php echo isset($karyawan[0]->nama_karyawan)?$karyawan[0]->nama_karyawan:null?>">
                                                </div>
                                            </div>
                                            <div class="form-group row showcase_row_area">
                                                <div class="col-md-3 showcase_text_area">
                                                    <label for="inputType12">Umur</label></div>
                                                <div class="col-md-9 showcase_content_area">
                                                    <input type="number"
                                                           class="form-control"
                                                           name="umur"
                                                           id="inputType2"
                                                           value="<?php echo isset($karyawan[0]->umur)?$karyawan[0]->umur:null?>">
                                                </div>
                                            </div>
                                            <div class="form-group row showcase_row_area">
                                                <div class="col-md-3 showcase_text_area">
                                                    <label for="inputType12">Tanggal Lahir</label></div>
                                                <div class="col-md-9 showcase_content_area">
                                                    <input type="date"
                                                           class="form-control"
                                                           name="ttl"
                                                           id="inputType2"
                                                           value="<?php echo isset($karyawan[0]->umur)?$karyawan[0]->umur:null?>">
                                                </div>
                                            </div>
                                            <button class="btn btn-primary float-right" value="<?php echo $_GET['f']?>" name="button">Simpan</button>
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
<!-- Vendor Js For This Page Ends-->
</body>
</html>