<?php include "header.php"; ?>
<div id="admin-content">
    <div class="container">
        <div class="row">
            <div class="col-md-10">
                <h1 class="admin-heading">All Categories</h1>
            </div>
            <div class="col-md-2">
                <a class="add-new" href="add-category.php">add category</a>
            </div>
            <div class="col-md-12">
              <?php
                include 'config.php';// database configuration
                 /* Calculate Offset Code */
                  $limit = 10;
                  if(isset($_GET["page"])){
                      $page = $_GET["page"];
                  }
                  else{
                      $page = 1;
                  };
                  $offset = ($page-1)* $limit;
              /* select query with offset and limit */
              $sql = "SELECT * FROM  contact_us ORDER BY id DESC Limit $offset,$limit";
              $result = mysqli_query($conn, $sql);
              if (mysqli_num_rows($result) > 0) {
                  $table = '<table class="content-table">';
                  $table .= '<thead>
                                  <th>S.No.</th>
                                  <th>Username</th>
                                  <th>Email</th>
                                  <th>Message</th>
                                  <th>Delete</th>
                              </thead>
                              <tbody>';
                    $serial = $offset + 1;
                  while($row = mysqli_fetch_assoc($result)) {
                    $table .= "<tr>
                            <td class='id'>{$serial}</td>
                            <td>{$row["fname"]}</td>
                            <td>{$row["email"]}</td>
                            <td>{$row["message"]}</td>
                            <td class='delete'><a href='delete-message.php?id={$row['id']}'><i class='fa fa-trash-o'></i></a></td>
                        </tr>";
                        $serial++;
                  }
                  $table .= '</tbody></table>';
                  // show table
                  echo $table;
              } else {
                  echo "<h3>No Results Found.</h3>";
              }
              // select count() query for pagination
              $sql1 = "SELECT COUNT(id) FROM contact_us";
              $result_1 = mysqli_query($conn,$sql1);
              $row_db = mysqli_fetch_row($result_1);
              $total_record = $row_db[0];
              $total_page = ( $total_record / $limit);
              // show pagination
              echo  "<ul class='pagination admin-pagination'>";
                  if($page>1){
                      echo "<li><a href='message.php?page=".($page-1)."'>Prev</a></li>";
                  }
                  if($total_record > $limit){
                      for ($i=1; $i<=$total_page ; $i++) {
                          if($i == $page){
                              $cls ='btn-primary active';
                          }else{
                              $cls ='btn-primary';
                          }
                          echo"<li><a href='message.php?page=".$i."' class='{$cls}'>$i</a></li>";
                      }
                  }

                  if($total_page>$page){
                      echo"<li> <a href='message.php?page=".($page+1)."'>Next</a></li>";
                  }
              echo "</ul>";
              ?>
            </div>
        </div>
    </div>
</div>
<?php include "footer.php"; ?>
