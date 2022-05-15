
var header_skelton = `<nav class="navbar navbar-expand-lg navbar-dark bg-dark navbar-100">
<div class="collapse navbar-collapse" id="navbarSupportedContent"> 
</div>
</nav>`;


var bodySkelton = `

<div id="main-content">
<div class="container">
    <div class="row">
        <div class="col-md-8">
            <!-- post-container -->
            <div class="post-container">
              
                <div class="post-content">
                    <div class="row">
                        <div class="col-md-4">
                          <span class="post-img"><img src="" alt=""/></span>
                        </div>
                        <div class="col-md-8">
                          <div class="inner-content clearfix">
                              <h3></h3>
                              
                              <p class="description">
                                  
                              </p>
                              
                          </div>
                        </div>
                    </div>
                </div>
            

            </div><!-- /post-container -->
        </div>
        

        <div id="sidebar" class="col-md-4">
            <!-- search box -->
            <div class="search-box-container">
                <h4>Search</h4>
                <form class="search-post" id="search_post" action="search.php" method ="GET">
                    <div class="input-group">
                        <input type="text" name="search" class="form-control" placeholder="Search .....">
                        <span class="input-group-btn">
                            <button type="submit" class="btn btn-danger">Search</button>
                        </span>
                    </div>
                </form>
            </div>
            <!-- /search box -->
            <!-- recent posts box -->
            <div class="recent-post-container">
                <h4>Recent Posts</h4>
               
                <div class="recent-post">
                    <div class="post-img post-url" >
                        <img src="" alt=""/>
</div>
                    <div class="post-content">
                        <h5></h5>
                        
                    </div>
                </div>
            
            </div>
            <!-- /recent posts box -->
        </div>




    </div>
</div>
</div>



`;