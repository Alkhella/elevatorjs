import {__init} from './__init.js'

class Elevator_engine extends  __init{

   constructor(){
      super();
      this.engine = true;
      this.__init_error = [];

      this.server_host;
      this.meta_content_url;
      this.preloader;
      this.error_head = '<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>ERROR</title><link rel="stylesheet" href="src/css/main.css"></link>';

      this.__404_url = '<div class="error_body"><div class="error_card"><div class="error_header"><h1>404 HTTP URL</h1></div><div class="error_desc"><p><p class="red-box">Elevator rendering error !!</p>Did you forget to declare <span class="red-box">http_url</span> on: </p><code class="bg-code"><span class="r">elevator</span><span class="c">.</span><span class="b">route</span><span class="w">({</span><br><br>&nbsp&nbsp <span class="w">http_url:</span> <b class="red-box-l">undefined</b> &nbsp <b class="red"><<-- error !(undefined)</b><br><br><span class="w">});</span></code><p>Set <span class="red-box">http_url</span> to solve this problem</p><hr><p>Developed by: Rezwan Ahmod Sami</p></div></div></div>';
      this.__404_server_host = '<div class="error_body"><div class="error_card"><div class="error_header"><h1>404 SERVER HOST</h1></div><div class="error_desc"><p><p class="red-box">Elevator rendering error !!</p>Did you forget to declare <span class="red-box">server_host</span> on: </p><code class="bg-code"><span class="r">elevator</span><span class="c">.</span><span class="b">server_host</span><span class="w">&nbsp=</span>&nbsp<b class="red-box-l">undefined</b> &nbsp <b class="red"><<-- error!!!</b><br><br></span></code><p>Set <span class="red-box">server_host</span> to solve this problem</p><hr><p>Developed by: Rezwan Ahmod Sami</p></div></div></div>';
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
      let meta_loader = arr.meta_loader;
      let get_route_param = '';

      if (http_url != undefined) {
         get_route_param = http_url.split("?");  
      }else{
         this.__render_DOM_head(this.error_head);
         this.__render_DOM_root(this.__404_url);
      }
               
      if (get_route_param[1] != undefined) {
         data = this.parse_query_string(get_route_param[1]);
         content_url = content_url+'?'+this.__parse_object_to_param(data);
      }
      if (meta_loader == true) {
         this.meta_loader(http_url);
      }

      if (http_url_change != undefined && http_url_change == false) {
         this.__init_elevator(method, content_url, component, preloader,error_handler,data);
      }else if(http_url_change == true){

         if (this.server_host != undefined && this.server_host != '') {
            if (http_url != undefined) {
               
               this.__init_elevator(method, content_url, component, preloader,error_handler,data, http_url_change, this.server_host, http_url);
               
            }else{
               this.__render_DOM_head(this.error_head);
               this.__render_DOM_root(this.__404_url);
            }
         }else{
            this.__render_DOM_head(this.error_head);
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
               console.log(route.meta_loader);
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

   meta_loader(route_url){
      if (this.meta_content_url != undefined && this.meta_content_url != '') {
         let current_http_url = window.location.href;
         let split_url = current_http_url.split('/');
         let last_index = (split_url.length - 1);
         let route_path  = split_url[last_index];
         let get_route_param = route_path.split("?");
         let route = '';
         if (route_url == undefined) {
            route = get_route_param[0];
         }else{
            route = route_url;
         }

         console.log(route);

         let method = 'POST';
         let content_url = this.meta_content_url;
         let component = 'head meta';
         let preloader = '';
         let error_handler = '';
         let data = {route: route};

         this.__init_elevator(method, content_url, component, preloader,error_handler,data);

      }else{
         this.__render_DOM_root("define meta content");
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
         this.meta_loader();
         this.__render_body();
         this.__render_footers();  
    }

}

export let elevator = new Elevator_engine();

