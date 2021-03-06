
let home_btn = document.getElementById("home");
let about_btn = document.getElementById("about");
let privacy_btn = document.getElementById("privacy");
let back = document.getElementById("back");
let next = document.getElementById("next");

// defining server host
elevator.server_host = 'http://localhost/Elevator/elevator-v2/test/';

// define error pages
// elevator.error_404 = '404 error';


// define meta contents
elevator.meta_content_url = 'inc/meta-content.php';

// http routes setup
elevator.http_routes([
      {
         method: "GET",
         meta_loader: true,
         content_url: "content/home.php",
         component: "#root",
         preloader: 'loading...',
         error_handler: 'error',
         http_url_change: false,
         http_url: "index.php"
      },
      {
         method: "GET",
         meta_loader: true,
         content_url: "content/about.php",
         component: "#root",
         preloader: 'loading...',
         error_handler: 'error',
         http_url_change: false,
         http_url: "about.php"
      },
      {
         method: "GET",
         meta_loader: true,
         content_url: "content/privacy.php",
         component: "#root",
         preloader: 'loading...',
         error_handler: 'error',
         http_url_change: false,
         http_url: "privacy.php"
      }
]);

// set  pages headers
elevator.page_headers_content([
      {
         method: "GET",
         content_url: "content/header.php",
         component: "#header_load",
         preloader: 'loading...',
         error_handler: 'error',
         http_url_change: false,
         http_url: "index.php"
      },
      {
         method: "GET",
         content_url: "content/header.php",
         component: "#header_load",
         preloader: 'loading...',
         error_handler: 'error',
         http_url_change: false,
         http_url: "about.php"
      },
      {
         method: "GET",
         content_url: "content/header2.php",
         component: "#header_load",
         preloader: 'loading...',
         error_handler: 'error',
         http_url_change: false,
         http_url: "privacy.php"
      }
]);

// set footers
elevator.page_footers_content([
      {
         method: "GET",
         content_url: "content/footer.php",
         component: "#footer_load",
         preloader: 'loading...',
         error_handler: 'error',
         http_url_change: false,
         http_url: "index.php"
      },
      {
         method: "GET",
         content_url: "content/footer.php",
         component: "#footer_load",
         preloader: 'loading...',
         error_handler: 'error',
         http_url_change: false,
         http_url: "about.php"
      },
      {
         method: "GET",
         content_url: "content/footer.php",
         component: "#footer_load",
         preloader: 'loading...',
         error_handler: 'error',
         http_url_change: false,
         http_url: "privacy.php"
      }
]);

back.addEventListener('click', ()=>{
   elevator.pop_route();
});

next.addEventListener('click', ()=>{
   elevator.push_route();
});


home_btn.addEventListener('click', ()=>{
   elevator.route({
         method: "GET",
         meta_loader: true,
         content_url: "content/home.php",
         component: "#root",
         preloader: 'loading...',
         error_handler: elevator.error_404,
         http_url_change: true,
         http_url: "index.php"
      });
});

about_btn.addEventListener('click', ()=>{
   elevator.route({
         method: "GET",
         meta_loader: true,
         content_url: "content/about.php",
         component: "#root",
         preloader: 'loading...',
         data: {id: 2456},
         error_handler: 'error',
         http_url_change: true,
         http_url: "about.php"
      });
});

privacy_btn.addEventListener('click', ()=>{
   elevator.route({
         method: "GET",
         meta_loader: true,
         content_url: "content/privacy.php",
         component: "#root",
         preloader: 'loading...',
         error_handler: 'error',
         http_url_change: true,
         http_url: "privacy.php"
      });
});


// rendering
elevator.__render();


