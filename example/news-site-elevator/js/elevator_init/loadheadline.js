
// loadheadline
elevator.route({
    method: 'GET', 
    meta_loader: true, 
    content_url: "components/header-layout/headline-component.php", 
    component: "#headline", 
    // preloader: 'loading...', // This is preloader, there you can insert your preloader html content.
    // data: {id: 2456}, // There you can pass data as javascript object
    error_handler: '<h2>error<h2>', // There you can put error content in html.
    http_url_change: false, 
    http_url: "" 
})
