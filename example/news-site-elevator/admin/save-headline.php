<?php
  include "config.php";

  session_start();
  $title = mysqli_real_escape_string($conn, $_POST['post_title']);
  $description = mysqli_real_escape_string($conn, $_POST['postdesc']);
  $category = mysqli_real_escape_string($conn, $_POST['category']);
  $date = date("d M, Y");
  $author = $_SESSION['user_id'];

  $sql = "INSERT INTO headline(title, content,cat)
          VALUES('{$title}','{$description}','{$category}');";
  $sql .= "UPDATE category SET headline = headline + 1 WHERE category_id = {$category}";

  if(mysqli_multi_query($conn, $sql)){
    header("location: headlines.php");
  }else{
    echo "<div class='alert alert-danger'>Query Failed.</div>";
  }

?>
