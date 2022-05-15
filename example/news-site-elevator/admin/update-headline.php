<?php include "header.php";
if($_SESSION["user_role"] == '0'){
  header("Location: post.php");
}
if(isset($_POST['submit'])){
  include "config.php";
   $id = mysqli_real_escape_string($conn, $_POST['post_id']);
  $title = mysqli_real_escape_string($conn, $_POST['post_title']);
  $description = mysqli_real_escape_string($conn, $_POST['postdesc']);
  $category = mysqli_real_escape_string($conn, $_POST['category']);

  $sql = "UPDATE headline SET title = '{$title}', content = '{$description}', cat = '{$category}' WHERE id = {$id}";

    if(mysqli_query($conn,$sql)){
      header("Location: headlines.php");
    }
}
?>
  <div id="admin-content">
      <div class="container">
          <div class="row">
              <div class="col-md-12">
                  <h1 class="admin-heading">Update Headline</h1>
              </div>
              <div class="col-md-offset-4 col-md-4">
              <?php
   include "config.php";
        $post_id = mysqli_real_escape_string($conn, htmlspecialchars($_GET['id']));
        $sql = "SELECT headline.id, headline.title, headline.content,
        category.category_name, headline.cat FROM headline
        LEFT JOIN category ON headline.cat = category.category_id
        WHERE headline.id = {$post_id}";

        $result = mysqli_query($conn, $sql) or die("Query Failed.");
        if(mysqli_num_rows($result) > 0){
          while($row = mysqli_fetch_assoc($result)) {
      ?>
        <!-- Form for show edit-->
        <form action="" method="POST" enctype="multipart/form-data" autocomplete="off">
            <div class="form-group">
                <input type="hidden" name="post_id"  class="form-control" value="<?php echo $row['id']; ?>" placeholder="">
            </div>
            <div class="form-group">
                <label for="exampleInputTile">Title</label>
                <input type="text" name="post_title"  class="form-control" id="exampleInputUsername" value="<?php echo $row['title']; ?>">
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1"> Description</label>
                <textarea name="postdesc" class="form-control"  required rows="5">
                    <?php echo $row['content']; ?>
                </textarea>
            </div>
            <div class="form-group">
                <label for="exampleInputCategory">Category</label>
                <select class="form-control" name="category">
                  <option disabled> Select Category</option>
                  <?php
                    include "config.php";
                    $sql1 = "SELECT * FROM category";

                    $result1 = mysqli_query($conn, $sql1) or die("Query Failed.");

                    if(mysqli_num_rows($result1) > 0){
                      while($row1 = mysqli_fetch_assoc($result1)){
                        if($row['cat'] == $row1['category_id']){
                          $selected = "selected";
                        }else{
                          $selected = "";
                        }
                        echo "<option {$selected} value='{$row1['category_id']}'>{$row1['category_name']}</option>";
                      }
                    }
                  ?>
                </select>
                <input type="hidden" name="old_category" value="<?php echo $row['cat']; ?>">
            </div>
            <input type="submit" name="submit" class="btn btn-primary" value="Update" />
        </form>
        <!-- Form End -->
        <?php
          }
        }else{
          echo "Result Not Found.";
        }
        ?>
              </div>
          </div>
      </div>
  </div>
<?php include "footer.php"; ?>
