import {__init} from './__init.js'

class Elevator_engine extends  __init{

   constructor(){
      super();
      this.engine = true;
      this.__init_error = [];

      this.server_host;
      this.preloader;

      this.__404_url = '<h1>404 http URL Not Set</h1>';
      this.__404_server_host = '<h1>404 Server Host Not Set</h1>';
      this.error_404;
      this.error_400;
      this.error_500;

      this.construct_routes = [];
      this.construct_headers = [];
      this.construct_footers = [];
      
   }



   route(arr){
      let method = arr.method;
      let content_url = arr.content_url;
      let component = arr.component;
      let preloader = arr.preloader;
      let error_handler = arr.error_handler;
      let data = arr.data;
      let http_url_change = arr.http_url_change;
      let http_url = arr.http_url;
      let get_route_param = '';

      if (http_url != undefined) {
         get_route_param = http_url.split("?");  
      }else{
         this.__render_DOM_root(this.__404_url);
      }
               
      if (get_route_param[1] != undefined) {
         data = this.parse_query_string(get_route_param[1]);
         content_url = content_url+'?'+this.__parse_object_to_param(data);
      }

      if (http_url_change != undefined && http_url_change == false) {
         this.__init_elevator(method, content_url, component, preloader,error_handler,data);
      }else if(http_url_change == true){

         if (this.server_host != undefined && this.server_host != '') {
            if (http_url != undefined) {

               this.__init_elevator(method, content_url, component, preloader,error_handler,data, http_url_change, this.server_host, http_url);
            }else{
               this.__render_DOM_root(this.__404_url);
            }
         }else{
            this.__render_DOM_root(this.__404_server_host);
         }
      }else{
         this.__init_elevator(method, content_url, component, preloader,error_handler,data);
      }
      
   }

   http_routes(routes_arr){
      let routes_keys = Object.keys(routes_arr);
      let routes_values = Object.values(routes_arr);

      // let construct_routes = [];

      for (let i = 0; i < routes_keys.length; i++) {
         
         this.construct_routes[routes_keys[i]] = routes_values[i];
         
      }

      window.addEventListener('popstate', (event) => {
         this.__history_routes_handler(true);
      });
      
   }

   __history_routes_handler(status){
      if (status == true) {
         let current_http_url = window.location.href;
         let split_url = current_http_url.split('/');
         let last_index = (split_url.length - 1);
         let route_path  = split_url[last_index];
         let get_route_param = route_path.split("?");
         let data = '';
         if (get_route_param[1] != undefined) {
            data = this.parse_query_string(get_route_param[1]);
         }

         let parse_data = this.__parse_object_to_param(data);
         this.construct_routes.forEach(route => {
            if (route.http_url == get_route_param[0]) {
               if (route.method == 'GET') {
                  let content_path = route.content_url;
                  let route_split = content_path.split('?');
                  route.content_url = `${route_split[0]}?`+parse_data;
               }
               this.route(route);
            }
         });
      }
         
   }

   

   pop_route(){
      history.back()
      window.addEventListener('popstate', (event) => {
         this.__history_routes_handler(true);
      });
   }

   push_route(){
      history.go(1);
      window.addEventListener('popstate', (event) => {
         this.__history_routes_handler(true);
      });
   }

   header_load(arr){
       arr.method = 'POST';
       arr.data = '';
       arr.http_url_change = false;
       arr.http_url = '';

       this.route(arr);
   }

   footer_load(arr){
       arr.method = 'POST';
       arr.data = '';
       arr.http_url_change = false;
       arr.http_url = '';

       this.route(arr);
   }

   page_headers_content(content_arr){
      let routes_keys = Object.keys(content_arr);
      let routes_values = Object.values(content_arr);

      for (let i = 0; i < routes_keys.length; i++) {
         
         this.construct_headers[routes_keys[i]] = routes_values[i];
         
      }
   }

   page_footers_content(content_arr){
      let routes_keys = Object.keys(content_arr);
      let routes_values = Object.values(content_arr);

      for (let i = 0; i < routes_keys.length; i++) {
         
         this.construct_footers[routes_keys[i]] = routes_values[i];
         
      }
   }

   __render_header(){
         let current_http_url = window.location.href;
         let split_url = current_http_url.split('/');
         let last_index = (split_url.length - 1);
         let route_path  = split_url[last_index];
         let get_route_param = route_path.split("?");
         let data = '';
         if (get_route_param[1] != undefined) {
            data = this.parse_query_string(get_route_param[1]);
         }

         let parse_data = this.__parse_object_to_param(data);
         let headers = this.construct_headers;
         

         this.construct_headers.forEach(route => {

            if (route.http_url == get_route_param[0]) {
               if (route.method == 'GET') {
                  let content_path = route.content_url;
                  let route_split = content_path.split('?');
                  route.content_url = `${route_split[0]}?`+parse_data;
               }
               this.route(route);
            }
         });
   }

   __render_body(){
         let current_http_url = window.location.href;
         let split_url = current_http_url.split('/');
         let last_index = (split_url.length - 1);
         let route_path  = split_url[last_index];
         let get_route_param = route_path.split("?");
         let data = '';
         if (get_route_param[1] != undefined) {
            data = this.parse_query_string(get_route_param[1]);
         }

         let parse_data = this.__parse_object_to_param(data);
         this.construct_routes.forEach(route => {
            if (route.http_url == get_route_param[0]) {
               if (route.method == 'GET') {
                  let content_path = route.content_url;
                  let route_split = content_path.split('?');
                  route.content_url = `${route_split[0]}?`+parse_data;
               }
               this.route(route);
            }
         });
   }

   __render_footers(){
         let current_http_url = window.location.href;
         let split_url = current_http_url.split('/');
         let last_index = (split_url.length - 1);
         let route_path  = split_url[last_index];
         let get_route_param = route_path.split("?");
         let data = '';
         if (get_route_param[1] != undefined) {
            data = this.parse_query_string(get_route_param[1]);
         }

         let parse_data = this.__parse_object_to_param(data);
         this.construct_footers.forEach(route => {
            if (route.http_url == get_route_param[0]) {
               if (route.method == 'GET') {
                  let content_path = route.content_url;
                  let route_split = content_path.split('?');
                  route.content_url = `${route_split[0]}?`+parse_data;
               }
               this.route(route);
            }
         });
   }


   __render(){
         this.__render_header();
         this.__render_body();
         this.__render_footers();   
    }

}

export let elevator = new Elevator_engine();

