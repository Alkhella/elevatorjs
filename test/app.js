import {elevator} from '../src/engine.js'


let home_btn = document.getElementById("home");
let about_btn = document.getElementById("about");
let privacy_btn = document.getElementById("privacy");
let back = document.getElementById("back");
let next = document.getElementById("next");

// defining server host
elevator.server_host = 'http://localhost/Elevator/elevator-v2/test/';

elevator.error_404 = '404 error';

// http routes setup
elevator.http_routes([
      {
         method: "GET",
         content_url: "content/home.php",
         component: "#root",
         preloader: 'loading...',
         error_handler: 'error',
         http_url_change: false,
         http_url: "index.html"
      },
      {
         method: "GET",
         content_url: "content/about.php",
         component: "#root",
         preloader: 'loading...',
         error_handler: 'error',
         http_url_change: false,
         http_url: "about.html"
      },
      {
         method: "GET",
         content_url: "content/privacy.php",
         component: "#root",
         preloader: 'loading...',
         error_handler: 'error',
         http_url_change: false,
         http_url: "privacy.html"
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
         http_url: "index.html"
      },
      {
         method: "GET",
         content_url: "content/header2.php",
         component: "#header_load",
         preloader: 'loading...',
         error_handler: 'error',
         http_url_change: false,
         http_url: "about.html"
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
         http_url: "index.html"
      },
      {
         method: "GET",
         content_url: "content/header2.php",
         component: "#footer_load",
         preloader: 'loading...',
         error_handler: 'error',
         http_url_change: false,
         http_url: "about.html"
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
         content_url: "content/home.php",
         component: "#root",
         preloader: 'loading...',
         error_handler: elevator.error_404,
         http_url_change: true,
         http_url: "index.html"
      });
});

about_btn.addEventListener('click', ()=>{
   elevator.route({
         method: "GET",
         content_url: "content/about.php",
         component: "#root",
         preloader: 'loading...',
         error_handler: 'error',
         http_url_change: true,
         http_url: "about.html"
      });
});

privacy_btn.addEventListener('click', ()=>{
   elevator.route({
         method: "GET",
         content_url: "content/privacy.php",
         component: "#root",
         preloader: 'loading...',
         error_handler: 'error',
         http_url_change: true,
         http_url: "privacy.html"
      });
});


// loading header
//   elevator.header_load({
//          content_url: "content/header.php",
//          component: "#header_load",
//          preloader: 'loading...',
//          error_handler: 'error',
//   });

// loading footer
//    elevator.footer_load({
//          content_url: "content/footer.php",
//          component: "#footer_load",
//          preloader: 'loading...',
//          error_handler: 'error',
//   });


// rendering
elevator.__render();


