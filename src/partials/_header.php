<nav class="t-header">
  <div class="t-header-brand-wrapper">
    <a href="index.html">
      <img class="logo" src="http://uxcandy.co/demo/label/preview/assets/images/logo.svg" alt="">
      <img class="logo-mini" src="http://uxcandy.co/demo/label/preview/assets/images/logo_mini.svg" alt="">
    </a>
  </div>
  <div class="t-header-content-wrapper shadow-sm">
    <div class="t-header-content">
      <button class="t-header-toggler t-header-mobile-toggler d-block d-lg-none">
        <i class="mdi mdi-menu"></i>
      </button>
      <form action="#" class="t-header-search-box">
        <div class="input-group">
          <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Search" autocomplete="off">
          <button class="btn btn-primary" type="submit"><i class="mdi mdi-arrow-right-thick"></i></button>
        </div>
      </form>
      <ul class="nav ml-auto">
        <li class="nav-item dropdown">
          <a class="nav-link" href="#" id="appsDropdown" data-toggle="dropdown" aria-expanded="false">
            <i class="mdi mdi-apps mdi-1x"></i>
          </a>
          <div class="dropdown-menu navbar-dropdown dropdown-menu-right" aria-labelledby="appsDropdown">
            <div class="dropdown-header">
              <h6 class="dropdown-title">Selamat Datang <?php echo isset($_SESSION['name'])?$_SESSION['name']:null?></h6>
            </div>
            <div class="dropdown-body border-top pt-0">
<!--              <a class="dropdown-grid">-->
<!--                <i class="grid-icon mdi mdi-jira mdi-2x"></i>-->
<!--                <span class="grid-tittle">Jira</span>-->
<!--              </a>-->
<!--              <a class="dropdown-grid">-->
<!--                <i class="grid-icon mdi mdi-trello mdi-2x"></i>-->
<!--                <span class="grid-tittle">Trello</span>-->
<!--              </a>-->
<!--              <a class="dropdown-grid">-->
<!--                <i class="grid-icon mdi mdi-artstation mdi-2x"></i>-->
<!--                <span class="grid-tittle">Artstation</span>-->
<!--              </a>-->
              <a href="model/user.php?f=logout" class="dropdown-grid">
                <i class="grid-icon mdi mdi-bitbucket mdi-2x"></i>
                <span class="grid-tittle">Logout</span>
              </a>
            </div>
<!--            <div class="dropdown-footer">-->
<!--              <a href="#">View All</a>-->
<!--            </div>-->
          </div>
        </li>
      </ul>
    </div>
  </div>
</nav>