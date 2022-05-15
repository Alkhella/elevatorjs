<?php include "../../include/config.php"; ?>
<!-- HEADER -->
<nav class="navbar navbar-expand-lg navbar-dark bg-dark navbar-100">
  <a class="navbar-brand" href="<?php echo $hostname; ?>">
  <?php
                

                $sql = "SELECT * FROM settings";

                $result = mysqli_query($conn, $sql) or die("Query Failed.");
                if(mysqli_num_rows($result) > 0){
                  while($row = mysqli_fetch_assoc($result)) {
                    if($row['logo'] == ""){
                      echo '<h5>'.$row['websitename'].'</h5>';
                    }else{
                      echo '<img class="logo-img" src="images/'. $row['logo'] .'">';
                    }

                  }
                }
                ?>
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
  <?php
                

                if(isset($_GET['cid'])){
                  $cat_id = $_GET['cid'];
                }

                $sql = "SELECT * FROM category WHERE post > 0";
                $result = mysqli_query($conn, $sql) or die("Query Failed. : Category");
                if(mysqli_num_rows($result) > 0){
                  $active = "";
              ?>
    <ul class="navbar-nav mr-auto">
      <!-- <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li> -->
      
      <li class="nav-item active"><a class="nav-link" href='<?php echo $hostname; ?>'>Home</a></li>
                  <?php while($row = mysqli_fetch_assoc($result)) {
                    if(isset($_GET['cid'])){
                      if($row['category_id'] == $cat_id){
                        $active = "active";
                      }else{
                        $active = "";
                      }
                    }
                    echo "<li class='nav-item'><a class='nav-link {$active}' href='category.php?cid={$row['category_id']}'>{$row['category_name']}</a></li>";
                  } ?>
                  <li class="nav-item"><a class="nav-link" href='<?php echo $hostname."/about.php"; ?>'>About</a></li>
                  <li class="nav-item"><a class="nav-link" href='<?php echo $hostname."/privacy.php"; ?>'>Privacy</a></li>
                  <li class="nav-item"><a class="nav-link" href='<?php echo $hostname."/contact.php"; ?>'>Contact</a></li>
                </ul>
                <?php } ?>
      
    
  </div>
</nav>
<!-- /Menu Bar -->
<section id="headline"></section>
<script src="js/elevator_init/loadheadline.js"></script>
<script src="js/elevator_init/navigation_route.js"></script>