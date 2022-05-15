<?php include "header.php"; ?>
  <div id="admin-content">
      <div class="container">
          <div class="row">
              <div class="col-md-10">
                  <h1 class="admin-heading">All Headlines</h1>
              </div>
              <div class="col-md-2">
                  <a class="add-new" href="add-headline.php">add headline</a>
              </div>
              <div class="col-md-12">
                <?php
                  include "config.php"; // database configuration
                  /* Calculate Offset Code */
                  $limit = 10;
                  if(isset($_GET['page'])){
                    $page = $_GET['page'];
                  }else{
                    $page = 1;
                  }
                  $offset = ($page - 1) * $limit;

                    /* select query of post table for admin user */
                    $sql = "SELECT headline.id, headline.content, headline.add_on,
                    category.category_name,headline.cat FROM headline
                    LEFT JOIN category ON headline.cat = category.category_id
                    ORDER BY headline.id DESC LIMIT {$offset},{$limit}";


                  $result = mysqli_query($conn, $sql) or die("Query Failed.");
                  if(mysqli_num_rows($result) > 0){
                ?>
                  <table class="content-table">
                      <thead>
                          <th>S.No.</th>
                          <th>Headline Content</th>
                          <th>Category</th>
                          <th>Date</th>
                          <th>Edit</th>
                          <th>Delete</th>
                      </thead>
                      <tbody>
                        <?php
                        $serial = $offset + 1;
                        while($row = mysqli_fetch_assoc($result)) {?>
                          <tr>
                              <td class='id'><?php echo $serial; ?></td>
                              <td><?php echo $row['content']; ?></td>
                              <td><?php echo $row['category_name']; ?></td>
                              <td><?php echo $row['add_on']; ?></td>
                              <td class='edit'><a href='update-headline.php?id=<?php echo $row['id']; ?>'><i class='fa fa-edit'></i></a></td>
                              <td class='delete'><a href='delete-headline.php?id=<?php echo $row['id']; ?>&catid=<?php echo $row['cat']; ?>'><i class='fa fa-trash-o'></i></a></td>
                          </tr>
                          <?php
                          $serial++;
                        } ?>
                      </tbody>
                  </table>
                  <?php
                }else {
                  echo "<h3>No Results Found.</h3>";
                }
                // show pagination
                  $sql1 = "SELECT * FROM headline";

                $result1 = mysqli_query($conn, $sql1) or die("Query Failed.");

                if(mysqli_num_rows($result1) > 0){

                  $total_records = mysqli_num_rows($result1);

                  $total_page = ceil($total_records / $limit);

                  echo '<ul class="pagination admin-pagination">';
                  if($page > 1){
                    echo '<li><a href="headlines.php?page='.($page - 1).'">Prev</a></li>';
                  }
                  for($i = 1; $i <= $total_page; $i++){
                    if($i == $page){
                      $active = "active";
                    }else{
                      $active = "";
                    }
                    echo '<li class="'.$active.'"><a href="headlines.php?page='.$i.'">'.$i.'</a></li>';
                  }
                  if($total_page > $page){
                    echo '<li><a href="headlines.php?page='.($page + 1).'">Next</a></li>';
                  }

                  echo '</ul>';
                }
                  ?>
              </div>
          </div>
      </div>
  </div>
<?php include "footer.php"; ?>
