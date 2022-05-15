<?php include "../include/config.php"; ?>
    <div id="main-content">
        <div class="container">
            <div class="row">
                <div class="col-md-8">
                  <!-- post-container -->
                    <div class="post-container">

                        <div class="post-content single-post">
                            <h3>Contact Us</h3>
                            <hr>
                            <p class="description">
                            <?php
                        
                            if (isset($_POST['submit'])) {
                                $fname = mysqli_real_escape_string($conn, htmlspecialchars(trim($_POST['fullname'])));
                                $email = mysqli_real_escape_string($conn, htmlspecialchars(trim($_POST['email'])));
                                $message = mysqli_real_escape_string($conn, htmlspecialchars(trim($_POST['message'])));

                                if (!empty($fname) && !empty($email) && !empty($message)) {
                                    $insert = "insert into contact_us(fname, email, message) values('$fname','$email','$message')";
                                    $query = mysqli_query($conn, $insert);
                                    if ($query) {
                                        header("location: contact.php");
                                    }else{
                                        echo "<span style='color:red;'>Something went wrong try again !!</span>";
                                    }
                                }else{
                                    echo "<span style='color:red;'>All fields must need to fill !!</span>";
                                }
                            }
                            ?>
                            <form action="" method="post" autocomplete="off">
                                    <div class="form-group">
                                        <input type="text" name="fullname" class="form-control" placeholder="Enter Your Full name...">
                                    </div>
                                    <div class="form-group">
                                        <input type="email" name="email" class="form-control" placeholder="Enter your Email..">
                                    </div>
                                    <div class="form-group">
                                        <textarea name="message" id="" cols="30" rows="5" class="form-control" placeholder="Enter Your messege.."></textarea>
                                    </div>
                                    <div class="form-group">
                                        <button class="btn btn-success" name="submit">Submit</button>
                                    </div>
                                </form>
                            </p>
                        </div>
                    </div>
                    <!-- /post-container -->
                </div>
                <?php include 'sidebar-component.php'; ?>
            </div>
        </div>
    </div>

