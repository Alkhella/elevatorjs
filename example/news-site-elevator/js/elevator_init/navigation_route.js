
var NavLinks = document.querySelectorAll(".nav-link");

const loadHeadline = () =>{
// loadheadline
    elevator.route({
        method: 'GET', 
        meta_loader: false, 
        content_url: "components/header-layout/headline-component.php?cid=37", 
        component: "#headline", 
        // preloader: 'loading...', // This is preloader, there you can insert your preloader html content.
        // data: {cid: 37}, // There you can pass data as javascript object
        error_handler: '<h2>error<h2>', // There you can put error content in html.
        http_url_change: false, 
        http_url: "" 
    })

}

NavLinks.forEach(element => {
    element.addEventListener("click", (route)=>{
        route.preventDefault();
        route.stopImmediatePropagation(); // for stop immidiate Propagation.
        let href = element.getAttribute("href");
        let split_href = href.split("/");
        let http_url = split_href[split_href.length - 1];

        let split_http_url = http_url.split(".");
        let filename = split_http_url[0];
        if (filename == "") {
            filename = "index";
        }
        if (http_url == "") {
            http_url = elevator.server_host;
        }

        
        // loadHeadline();
        
        let content_url = `components/${filename}-component.php`;
        elevator.route({
            method: "GET",
            meta_loader: true,
            content_url: content_url,
            component: "#root",
            preloader: bodySkelton,
            // error_handler: "error",
            http_url_change: true,
            http_url: http_url
         });
         $("#navbarSupportedContent").removeClass("show");
         $(".navbar-toggler").addClass("collapsed");
    })
});