<div class="sidebar">
    <div class="user-profile">
        <div class="display-avatar animated-avatar">
            <img class="profile-img img-lg rounded-circle" src="../../assets/images/profile/male/image_1.png"
                 alt="profile image">
        </div>
        <div class="info-wrapper">
            <p class="user-name"><?php echo $_SESSION['name'] ?></p>
<!--            <h6 class="display-income">$3,400,00</h6>-->
        </div>
    </div>
    <ul class="navigation-menu">
        <li class="nav-category-divider">MAIN</li>
        <li>
            <a href="dashboard.php">
                <span class="link-title">Dashboard</span>
                <i class="mdi mdi-gauge link-icon"></i>
            </a>
        </li>
        <li>
            <a href="#sample-pages" data-toggle="collapse" aria-expanded="false">
                <span class="link-title">Master</span>
                <i class="mdi mdi-flask link-icon"></i>
            </a>
            <ul class="collapse navigation-submenu" id="sample-pages">
                <li>
                    <a href="karyawan-list.php" >Karyawan</a>
                </li>
                <li>
                    <a href="kriteria-list.php" >Kriteria</a>
                </li>
            </ul>
        </li>
        <li>
            <a href="#ui-elements" data-toggle="collapse" aria-expanded="false">
                <span class="link-title">SPK</span>
                <i class="mdi mdi-bullseye link-icon"></i>
            </a>
            <ul class="collapse navigation-submenu" id="ui-elements">
                <li>
                    <a href="spk-list.php">Nilai Kriteria Karyawan</a>
                </li>
                <li>
                    <a href="spk-hasil.php">Hasil Kriteria Karyawan</a>
                </li>
            </ul>
        </li>
    </ul>
</div>