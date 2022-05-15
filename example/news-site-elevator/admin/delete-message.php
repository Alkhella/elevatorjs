<?php
    include 'config.php';
    if($_SESSION["user_role"] == '0'){
      header("Location: post.php");
      die();
    }
    $msg_id = $_GET["id"];

    /*sql to delete a record*/
    $sql = "DELETE FROM contact_us WHERE id ='{$msg_id}'";

    if (mysqli_query($conn, $sql)) {
        header("location: message.php");
    }

    mysqli_close($conn);

?>
