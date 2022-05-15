<?php include "../../include/config.php"; ?>
<!-- Headline-->
<div class="headline">
  <div class="title">
    <p>Headline: </p>
  </div>
  <div class="headline-content">

    <marquee>

    <p>
    <?php
$page = basename($_SERVER['PHP_SELF']);
switch($page){
  case "category.php":
    if(isset($_GET['cid'])){
      $id = mysqli_real_escape_string($conn, htmlspecialchars(trim($_GET['cid'])));
      $sql_title = "SELECT * FROM category WHERE category_id = '$id'";
      $select_headline = "select * from headline where  cat='$id'";
      $query = mysqli_query($conn, $select_headline);
      while ($fetch_headline = mysqli_fetch_assoc($query)) {
      echo $fetch_headline['content'].'. ';
      }
    }else{
      $select_headline = "select * from headline";
      $query = mysqli_query($conn, $select_headline);
    while ($fetch_headline = mysqli_fetch_assoc($query)) {
    echo $fetch_headline['title'].': '.$fetch_headline['content'].'. ';
    } 
    }
    break;
    default :
    $select_headline = "select * from headline";
    $query = mysqli_query($conn, $select_headline);
    while ($fetch_headline = mysqli_fetch_assoc($query)) {
    echo $fetch_headline['title'].': '.$fetch_headline['content'].'. ';
    } 
      break;
  }
  ?>
    </p>
    </marquee>

  </div>
</div>
