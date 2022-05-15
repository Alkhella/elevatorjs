
// set server host local
// elevator.server_host = 'http://127.0.0.1/news-site-elevator/';

// set server host live
elevator.server_host = 'https://www.duckcrown.com/';

// set meta content
elevator.meta_content_url = 'include/meta-content.php';


// http routes setup
elevator.http_routes([
    {
        method: "GET",
        meta_loader: true,
        content_url: "components/index-component.php",
        component: "#root",
        preloader: bodySkelton,
        error_handler: '<h2>error 404</h2>',
        http_url_change: false,
        http_url: ""
     },
    {
       method: "GET",
       meta_loader: true,
       content_url: "components/index-component.php",
       component: "#root",
       preloader: bodySkelton,
       error_handler: '<h2>error 404</h2>',
       http_url_change: false,
       http_url: "index.php"
    },
    {
        method: "GET",
        meta_loader: true,
        content_url: "components/about-component.php",
        component: "#root",
        preloader: bodySkelton,
        error_handler: '<h2>error 404</h2>',
        http_url_change: false,
        http_url: "about.php"
     },
     {
        method: "GET",
        meta_loader: true,
        content_url: "components/privacy-component.php",
        component: "#root",
        preloader: bodySkelton,
        error_handler: '<h2>error 404</h2>',
        http_url_change: false,
        http_url: "privacy.php"
     },
     {
        method: "GET",
        meta_loader: true,
        content_url: "components/contact-component.php",
        component: "#root",
        preloader: bodySkelton,
        error_handler: '<h2>error 404</h2>',
        http_url_change: false,
        http_url: "contact.php"
     },
     {
        method: "GET",
        meta_loader: true,
        content_url: "components/category-component.php",
        component: "#root",
        preloader: bodySkelton,
        error_handler: '<h2>error 404</h2>',
        http_url_change: false,
        http_url: "category.php"
     },
     {
        method: "GET",
        meta_loader: true,
        content_url: "components/post-component.php",
        component: "#root",
        preloader: bodySkelton,
        error_handler: '<h2>error 404</h2>',
        http_url_change: false,
        http_url: "post.php"
     },
     {
        method: "GET",
        meta_loader: true,
        content_url: "components/author-component.php",
        component: "#root",
        preloader: bodySkelton,
        error_handler: '<h2>error 404</h2>',
        http_url_change: false,
        http_url: "author.php"
     },
     {
        method: "GET",
        meta_loader: true,
        content_url: "components/search-component.php",
        component: "#root",
        preloader: bodySkelton,
        error_handler: '<h2>error 404</h2>',
        http_url_change: false,
        http_url: "search.php"
     },
]);


// set  pages headers
elevator.page_headers_content([
    {
        method: "GET",
        content_url: "components/header-layout/header-layout.php",
        component: "#header_load",
        preloader: header_skelton,
        error_handler: 'error',
        http_url_change: false,
        http_url: ""
     },
    {
       method: "GET",
       content_url: "components/header-layout/header-layout.php",
       component: "#header_load",
       preloader: header_skelton,
       error_handler: 'error',
       http_url_change: false,
       http_url: "index.php"
    },
    {
        method: "GET",
        content_url: "components/header-layout/header-layout.php",
        component: "#header_load",
        preloader: header_skelton,
        error_handler: 'error',
        http_url_change: false,
        http_url: "about.php"
     },
     {
        method: "GET",
        content_url: "components/header-layout/header-layout.php",
        component: "#header_load",
        preloader: header_skelton,
        error_handler: 'error',
        http_url_change: false,
        http_url: "privacy.php"
     },
     {
        method: "GET",
        content_url: "components/header-layout/header-layout.php",
        component: "#header_load",
        preloader: header_skelton,
        error_handler: 'error',
        http_url_change: false,
        http_url: "contact.php"
     },
     {
        method: "GET",
        content_url: "components/header-layout/header-layout.php",
        component: "#header_load",
        preloader: header_skelton,
        error_handler: 'error',
        http_url_change: false,
        http_url: "category.php"
     },
     {
        method: "GET",
        content_url: "components/header-layout/header-layout.php",
        component: "#header_load",
        preloader: header_skelton,
        error_handler: 'error',
        http_url_change: false,
        http_url: "post.php"
     },
     {
        method: "GET",
        content_url: "components/header-layout/header-layout.php",
        component: "#header_load",
        preloader: header_skelton,
        error_handler: 'error',
        http_url_change: false,
        http_url: "author.php"
     },
     {
        method: "GET",
        content_url: "components/header-layout/header-layout.php",
        component: "#header_load",
        preloader: header_skelton,
        error_handler: 'error',
        http_url_change: false,
        http_url: "search.php"
     },
]);

elevator.page_footers_content([
    {
        method: "GET",
        content_url: "components/footer-layout/footer-layout.php",
        component: "#footer_load",
     //    preloader: 'loading...',
     //    error_handler: 'error',
        http_url_change: false,
        http_url: ""
     },
    {
       method: "GET",
       content_url: "components/footer-layout/footer-layout.php",
       component: "#footer_load",
    //    preloader: 'loading...',
    //    error_handler: 'error',
       http_url_change: false,
       http_url: "index.php"
    },
    {
        method: "GET",
        content_url: "components/footer-layout/footer-layout.php",
        component: "#footer_load",
     //    preloader: 'loading...',
     //    error_handler: 'error',
        http_url_change: false,
        http_url: "about.php"
     },
     {
        method: "GET",
        content_url: "components/footer-layout/footer-layout.php",
        component: "#footer_load",
     //    preloader: 'loading...',
     //    error_handler: 'error',
        http_url_change: false,
        http_url: "privacy.php"
     },
     {
        method: "GET",
        content_url: "components/footer-layout/footer-layout.php",
        component: "#footer_load",
     //    preloader: 'loading...',
     //    error_handler: 'error',
        http_url_change: false,
        http_url: "contact.php"
     },
     {
        method: "GET",
        content_url: "components/footer-layout/footer-layout.php",
        component: "#footer_load",
     //    preloader: 'loading...',
     //    error_handler: 'error',
        http_url_change: false,
        http_url: "category.php"
     },
     {
        method: "GET",
        content_url: "components/footer-layout/footer-layout.php",
        component: "#footer_load",
     //    preloader: 'loading...',
     //    error_handler: 'error',
        http_url_change: false,
        http_url: "post.php"
     },
     {
        method: "GET",
        content_url: "components/footer-layout/footer-layout.php",
        component: "#footer_load",
     //    preloader: 'loading...',
     //    error_handler: 'error',
        http_url_change: false,
        http_url: "author.php"
     },
     {
        method: "GET",
        content_url: "components/footer-layout/footer-layout.php",
        component: "#footer_load",
     //    preloader: 'loading...',
     //    error_handler: 'error',
        http_url_change: false,
        http_url: "search.php"
     },
    
]);

elevator.__render();