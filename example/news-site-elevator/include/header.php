<!DOCTYPE html>
<html lang="en">
<head>
    <meta>

    <?php
  //echo "<h1>" .  . "</h1>";
  include "include/config.php";
  if (isset($_GET['route'])) {
    $page = $_GET['route'];
    echo $_GET['route'];
  }else{
    $page = basename($_SERVER['PHP_SELF']);
  }
  $select_meta = "select logo from settings";
  $query = mysqli_query($conn, $select_meta);
  $result_meta = mysqli_fetch_assoc($query);
  $meta_image = "images/".$result_meta['logo'];
  $meta_description = '';
  switch($page){
    case "post.php":

      if(isset($_GET['id'])){
        $post_id = mysqli_real_escape_string($conn, htmlspecialchars(trim($_GET['id'])));
        $sql_title = "SELECT * FROM post WHERE post_id = '$post_id'";
        $result_title = mysqli_query($conn,$sql_title) or die("Title Query Failed");
        $row_title = mysqli_fetch_assoc($result_title);
        $page_title = $row_title['title'];
        $meta_image =  "upload/".$row_title['post_img'];
        $meta_description = substr($row_title['description'], 0, 400);
      }else{
        $page_title = "No Post Found";
      }
      break;
    case "category.php":
      if(isset($_GET['cid'])){
        $cid = mysqli_real_escape_string($conn, htmlspecialchars(trim($_GET['cid']))); 
        $sql_title = "SELECT * FROM category WHERE category_id = '$cid'";
        $result_title = mysqli_query($conn,$sql_title) or die("Tile Query Failed");
        $row_title = mysqli_fetch_assoc($result_title);
        $page_title = $row_title['category_name'] . " News";
      }else{
        $page_title = "No Post Found";
      }
      break;
    case "author.php":
      if(isset($_GET['aid'])){
        $aid = mysqli_real_escape_string($conn, htmlspecialchars(trim($_GET['aid'])));
        $sql_title = "SELECT * FROM user WHERE user_id = '$aid'";
        $result_title = mysqli_query($conn,$sql_title) or die("Title Query Failed");
        $row_title = mysqli_fetch_assoc($result_title);
        $page_title = "News By " .$row_title['first_name'] . " " . $row_title['last_name'];
      }else{
        $page_title = "No Post Found";
      }
      break;
    case "search.php":
      if(isset($_GET['search'])){

        $page_title = mysqli_real_escape_string($conn, htmlspecialchars(trim($_GET['search'])));
      }else{
        $page_title = "No Search Result Found";
      }
      break;
      case "about.php":
          $page_title = "About US";
        break;
        case "privacy.php":
          $page_title = "Privacy Policy";
        break;
        case "contact.php":
          $page_title = "Contact US";
        break;
    default :
      $sql_title = "SELECT websitename FROM settings";
      $result_title = mysqli_query($conn,$sql_title) or die("Title Query Failed");
      $row_title = mysqli_fetch_assoc($result_title);
      $page_title = $row_title['websitename']." - Home";
      break;
  }
  

?>

<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title><?php echo $page_title; ?></title>
    <meta property="og:image" content="<?php echo $meta_image; ?>">
    <meta property="og:description" content="<?php echo $meta_description; ?>">
    </meta>
    <!-- script -->
    <script src="js/jquery-3.3.1.min.js"></script>

    <script src="elevatorjs/src/elevator.js"></script>
    <!-- <script src="js/bootstrap.min.js"></script> -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

    <script src="js/skeltons_content.js"></script>
    <!-- css -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <!-- <link rel="stylesheet" href="css/bootstrap.min.css" /> -->
    <link rel="stylesheet" href="css/font-awesome.css">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>