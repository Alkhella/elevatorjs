<?php include "header.php";

if($_SESSION["user_role"] == 0){
   header("location: post.php");
  include "config.php";
}
?>
<div id="admin-content">
  <div class="container">
  <div class="row">
    <div class="col-md-12">
        <h1 class="admin-heading">Manage About Page</h1>
    </div>
    <div class="col-md-offset-3 col-md-6">
      <?php
      $id = '';
      $content = '';
        include "config.php";
        $sql = "select * from about";
        $result = mysqli_query($conn, $sql) or die("Query Failed.");
        if(mysqli_num_rows($result) < 1){
           if (isset($_POST['submit'])) {
            $id =  mysqli_real_escape_string($conn, $_POST['post_id']);
            $content =  mysqli_real_escape_string($conn, $_POST['postdesc']);

   

            $insert_content = "insert into about(about) values('$content')";
            $query = mysqli_query($conn, $insert_content);
            if ($query) {
               header("location: manage-about.php");
               die();
            }
        }
           
      }else{
         if (isset($_POST['submit'])) {
            $id =  mysqli_real_escape_string($conn, $_POST['post_id']);
            $content =  mysqli_real_escape_string($conn, $_POST['postdesc']);

            $update_content = "update about set about='$content' where id = '$id'";
         $query = mysqli_query($conn, $update_content);
         if ($query) {
            header("location: manage-about.php");
            die();
         }
        }


          while($row = mysqli_fetch_assoc($result)) {
            $id = $row['id'];
            $content = $row['about'];
         }
       }
      ?>
        <!-- Form for show edit-->
        <form action="#" method="POST" enctype="multipart/form-data" autocomplete="off">
            <div class="form-group">
                <input type="hidden" name="post_id"  class="form-control" value="<?php echo $id; ?>" placeholder="">
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1"> Content</label>
                <textarea name="postdesc" class="form-control"  required rows="5">
                    <?php echo $content; ?>
                </textarea>
            </div>
            <input type="submit" name="submit" class="btn btn-primary" value="Update" />
        </form>
        <!-- Form End -->
      </div>
    </div>
  </div>
</div>
<?php include "footer.php"; ?>
