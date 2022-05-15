<?php
  include "config.php";

  $post_id = mysqli_real_escape_string($conn, htmlspecialchars($_GET['id']));
  $cat_id = mysqli_real_escape_string($conn, htmlspecialchars($_GET['catid']));

  $sql = "DELETE FROM headline WHERE id = {$post_id};";
  $sql .= "UPDATE category SET headline= headline - 1 WHERE category_id = {$cat_id}";

  if(mysqli_multi_query($conn, $sql)){
    header("location: headlines.php");
  }else{
    echo "Query Failed";
  }
?>
