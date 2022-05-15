<?php include "../include/config.php"; ?>
    <div id="main-content">
      <div class="container">
        <div class="row">
            <div class="col-md-8">
              <!-- post-container -->
              <div class="post-container">
                <?php
                
                if(isset($_GET['aid'])){
                  $auth_id = mysqli_real_escape_string($conn, htmlspecialchars(trim($_GET['aid'])));
                  if (!is_numeric($auth_id)) {
                    header("location: index.php");
                    die("Not Found");
                }
                  $sql1 = "SELECT * FROM post JOIN user
                          ON post.author = user.user_id
                          WHERE post.author = {$auth_id}";
                  $result1 = mysqli_query($conn, $sql1) or die("Query Failed.");
                  $row1 = mysqli_fetch_assoc($result1);

                ?>
                <h2 class="page-heading">News By <?php echo $row1['username']; ?></h2>
                <?php

                  /* Calculate Offset Code */
                  $limit = 3;
                  if(isset($_GET['page'])){
                    $page = mysqli_real_escape_string($conn, htmlspecialchars(trim($_GET['page'])));
                      if (!is_numeric($page)) {
                        header("location: index.php");
                        die("Not Found");
                      }
                  }else{
                    $page = 1;
                  }
                  $offset = ($page - 1) * $limit;

                  $sql = "SELECT post.post_id, post.title, post.description,post.post_date,post.author,
                  category.category_name,user.username,post.category,post.post_img FROM post
                  LEFT JOIN category ON post.category = category.category_id
                  LEFT JOIN user ON post.author = user.user_id
                  WHERE post.author = {$auth_id}
                  ORDER BY post.post_id DESC LIMIT {$offset},{$limit}";

                  $result = mysqli_query($conn, $sql) or die("Query Failed.");
                  if(mysqli_num_rows($result) > 0){
                    while($row = mysqli_fetch_assoc($result)) {
                ?>
                  <div class="post-content">
                      <div class="row">
                          <div class="col-md-4">
                            <a class="post-img post-url" href="post.php?id=<?php echo $row['post_id']; ?>"><img src="upload/<?php echo $row['post_img']; ?>" alt=""/></a>
                          </div>
                          <div class="col-md-8">
                            <div class="inner-content clearfix">
                                <h3><a class="post-url" href='post.php?id=<?php echo $row['post_id']; ?>'><?php echo $row['title']; ?></a></h3>
                                <div class="post-information">
                                    <span>
                                        <i class="fa fa-tags" aria-hidden="true"></i>
                                        <a class="cat-url" href='category.php?cid=<?php echo $row['category']; ?>'><?php echo $row['category_name']; ?></a>
                                    </span>
                                    <span>
                                        <i class="fa fa-user" aria-hidden="true"></i>
                                        <a class="author-url" href='author.php?aid=<?php echo $row['author']; ?>'><?php echo $row['username']; ?></a>
                                    </span>
                                    <span>
                                        <i class="fa fa-calendar" aria-hidden="true"></i>
                                        <?php echo $row['post_date']; ?>
                                    </span>
                                </div>
                                <p class="description">
                                    <?php echo substr($row['description'],0,130) . "..."; ?>
                                </p>
                                <a class='read-more pull-right post-url' href='post.php?id=<?php echo $row['post_id']; ?>'>read more</a>
                            </div>
                          </div>
                      </div>
                  </div>
                  <?php
                    }
                  }else{
                    echo "<h2>No Record Found.</h2>";
                  }

                  // show pagination
                  if(mysqli_num_rows($result1) > 0){

                    $total_records = mysqli_num_rows($result1);

                    $total_page = ceil($total_records / $limit);

                    echo '<ul class="pagination admin-pagination">';
                    if($page > 1){
                      echo '<li><a class="author-url" href="author.php?aid='.$auth_id .'&page='.($page - 1).'">Prev</a></li>';
                    }
                    for($i = 1; $i <= $total_page; $i++){
                      if($i == $page){
                        $active = "active";
                      }else{
                        $active = "";
                      }
                      echo '<li class="'.$active.'"><a class="author-url" href="author.php?aid='.$auth_id .'&page='.$i.'">'.$i.'</a></li>';
                    }
                    if($total_page > $page){
                      echo '<li><a class="author-url" href="author.php?aid='.$auth_id .'&page='.($page + 1).'">Next</a></li>';
                    }

                    echo '</ul>';
                  }
                }else{
                  echo "<h2>No Record Found.</h2>";
                }
                  ?>
              </div><!-- /post-container -->
            </div>
            <?php include 'sidebar-component.php'; ?>
        </div>
      </div>
    </div>
    <script src="js/elevator_init/post-links-route.js"></script>
