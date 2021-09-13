import {elevator} from '../src/engine.js'


let home_btn = document.getElementById("home");
let about_btn = document.getElementById("about");
let privacy_btn = document.getElementById("privacy");

// defining server host
elevator.server_host = 'http://localhost/Elevator/elevator-v2/test/';

home_btn.addEventListener('click', ()=>{
   elevator.route({
         method: "GET",
         content_url: "content/home.php",
         component: "#root",
         preloader: 'loading...',
         error_handler: 'error',
         http_url_change: true,
         http_url: "index"
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
         http_url: "about"
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
         http_url: "privacy"
      });
});


// loading header
  elevator.header_load({
         content_url: "content/header.php",
         component: "#header_load",
         preloader: 'loading...',
         error_handler: 'error',
  });

// loading footer
   elevator.footer_load({
         content_url: "content/footer.php",
         component: "#footer_load",
         preloader: 'loading...',
         error_handler: 'error',
  });


// http routes setup
elevator.http_routes([
      {
         method: "POST",
         content_url: "content/home.php",
         component: "#root",
         preloader: 'loading...',
         error_handler: 'error',
         http_url_change: false,
         http_url: "index"
      },
      {
         method: "POST",
         content_url: "content/about.php",
         component: "#root",
         preloader: 'loading...',
         error_handler: 'error',
         http_url_change: false,
         http_url: "about"
      },
      {
         method: "POST",
         content_url: "content/privacy.php",
         component: "#root",
         preloader: 'loading...',
         error_handler: 'error',
         http_url_change: false,
         http_url: "privacy"
      }
]);