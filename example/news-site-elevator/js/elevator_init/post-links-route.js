var PostLinks = document.querySelectorAll(".post-url");

var AuthorLinks = document.querySelectorAll(".author-url");

var CatsLinks = document.querySelectorAll(".cat-url");

var IndexLinks = document.querySelectorAll(".index-pages");

var SearchLinks = document.querySelectorAll(".search-pages");

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

    PostLinks.forEach(element => {
        element.addEventListener("click", (route)=>{
            route.preventDefault();
            route.stopImmediatePropagation(); // for stop immidiate Propagation.
            let href = element.getAttribute("href");
            let split_href = href.split("/");
            let http_url = split_href[split_href.length - 1];
    
            if (http_url != "") {
                let split_http_url = http_url.split(".");
                let filename = split_http_url[0];
                if (filename == "post") {
                    loadHeadline();
            
                    let content_url = `components/post-component.php`;
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
                }
            }
        })
    });


    AuthorLinks.forEach(element => {
        element.addEventListener("click", (route)=>{
            route.preventDefault();
            route.stopImmediatePropagation(); // for stop immidiate Propagation.
            let href = element.getAttribute("href");
            let split_href = href.split("/");
            let http_url = split_href[split_href.length - 1];
    
            if (http_url != "") {
                let split_http_url = http_url.split(".");
                let filename = split_http_url[0];
                if (filename == "author") {
                    loadHeadline();
            
                    let content_url = `components/author-component.php`;
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
                }
            }
        })
    });

    CatsLinks.forEach(element => {
        element.addEventListener("click", (route)=>{
            route.preventDefault();
            route.stopImmediatePropagation(); // for stop immidiate Propagation.
            let href = element.getAttribute("href");
            let split_href = href.split("/");
            let http_url = split_href[split_href.length - 1];
    
            if (http_url != "") {
                let split_http_url = http_url.split(".");
                let filename = split_http_url[0];
                if (filename == "category") {
                    loadHeadline();
            
                    let content_url = `components/category-component.php`;
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
                }
            }
        })
    });

    IndexLinks.forEach(element => {
        element.addEventListener("click", (route)=>{
            route.preventDefault();
            route.stopImmediatePropagation(); // for stop immidiate Propagation.
            let href = element.getAttribute("href");
            let split_href = href.split("/");
            let http_url = split_href[split_href.length - 1];
    
            if (http_url != "") {
                let split_http_url = http_url.split(".");
                let filename = split_http_url[0];
                if (filename == "index" || filename == "") {
                    loadHeadline();
            
                    let content_url = `components/index-component.php`;
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
                }
            }
        })
    });

    SearchLinks.forEach(element => {
        element.addEventListener("click", (route)=>{
            route.preventDefault();
            route.stopImmediatePropagation(); // for stop immidiate Propagation.
            let href = element.getAttribute("href");
            let split_href = href.split("/");
            let http_url = split_href[split_href.length - 1];
    
            if (http_url != "") {
                let split_http_url = http_url.split(".");
                let filename = split_http_url[0];
                if (filename == "search") {
                    loadHeadline();
            
                    let content_url = `components/search-component.php`;
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
                }
            }
        })
    });


    var SearchForm = document.getElementById("search_post");

    if (SearchForm != null) {
        SearchForm.addEventListener("submit", (route)=>{
            route.preventDefault();
            route.stopImmediatePropagation(); // for stop immidiate Propagation.
            let searchValue = SearchForm.elements['search'].value;
            
            if (searchValue != "") {
                let href = SearchForm.getAttribute("action");
                let split_href = href.split("/");
                let http_url = split_href[split_href.length - 1];
                
                if (http_url != "") {
                    http_url = http_url+"?search="+searchValue;
                    
                    let split_http_url = http_url.split(".");
                    let filename = split_http_url[0];
                    if (filename == "search") {
                        loadHeadline();
                
                        let content_url = `components/search-component.php`;
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
                    }
                }
            }
        })
    }