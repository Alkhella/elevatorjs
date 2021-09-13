
export class __init{
    constructor(){
        this.error = [];
    }

    __render_DOM_root(content){
        document.querySelector("body").innerHTML = content;
    }

    __render_DOM(component, content){
        component.innerHTML = content;
    }


    __parse_object_to_param(parsed_qs){
         let data = '';
         if (parsed_qs != null) {
            let parsed_keys = Object.keys(parsed_qs);
            let parsed_values = Object.values(parsed_qs);

            for (let i = 0; i < parsed_keys.length; i++) {
               data += parsed_keys[i]+'='+parsed_values[i];

               if ((parsed_keys.length - 1) != i) {
                  data += '&';
               }
            }
         }
         return data;
    }


    __parse_object_to_param(parsed_qs){
         let data = '';
         if (parsed_qs != null) {
            let parsed_keys = Object.keys(parsed_qs);
            let parsed_values = Object.values(parsed_qs);

            for (let i = 0; i < parsed_keys.length; i++) {
               data += parsed_keys[i]+'='+parsed_values[i];

               if ((parsed_keys.length - 1) != i) {
                  data += '&';
               }
            }
         }
         return data;
    }

    parse_query_string(query){
            let vars = query.split("&");
            let query_string = {};
            for (let i = 0; i < vars.length; i++) {
               let pair = vars[i].split("=");
               let key = decodeURIComponent(pair[0]);
               let value = decodeURIComponent(pair[1]);
               // If first entry with this name
               if (typeof query_string[key] === "undefined") {
                  query_string[key] = decodeURIComponent(value);
                  // If second entry with this name
               } else if (typeof query_string[key] === "string") {
                  let arr = [query_string[key], decodeURIComponent(value)];
                  query_string[key] = arr;
                  // If third or later entry with this name
               } else {
                  query_string[key].push(decodeURIComponent(value));
               }
            }
            return query_string;
      }

    __init_elevator(method, content_url, component, preloader = '', error_handler = '', data = '',http_url_change = false, server_host = '', http_url = ''){
        let xhr = new XMLHttpRequest();
        let component_div = document.querySelector(component);
        xhr.open(method, content_url, true);
        xhr.addEventListener("progress", (e) =>{
            const prog_percent = e.lengthComputable ? (e.loaded / e.total) * 100 : 0;
            if (prog_percent != 100) {
                this.__render_DOM(component_div, preloader);
            }

            if (http_url_change != false) {
                if (http_url != '') {
                    window.history.pushState(server_host, '', http_url);
                }
            }

        });

        xhr.onload = ()=>{
            if(xhr.readyState === XMLHttpRequest.DONE){
                if(xhr.status === 200){
                    this.__render_DOM(component_div, xhr.response);

                }else{
                    this.__render_DOM(component_div, error_handler);
                }
            }
        }

        if (data != undefined && data != '') {
            
            
            let key = Object.keys(data);
            let value = Object.values(data);
            let data_post  =  '';
            for (let i = 0; i < key.length; i++) {
                data_post += key[i]+'='+value[i]; 
                if ((key.length-1) != i) {
                    data_post += '&';
                }
            }
            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            if (method == 'POST') {
                xhr.send(data_post);
            }else{
                xhr.send();
            }
            
        }else{
            xhr.send();
        }
        
    }


      
    

    __render(root){
        document.getElementById(root);
    }
}
