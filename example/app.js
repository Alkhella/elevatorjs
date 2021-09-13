import {elevator} from '../src/engine.js'


let btn = document.getElementById("btn");

btn.addEventListener('click', ()=>{
   elevator.route({
         method: "GET",
         content_url: "test.txt",
         component: "#load",
         preloader: 'loading..',
         error_handler: 'error',
         data: {data: "200", name: "sami", type: "local"},
         http_url_change: false,
         server_host: 'http://localhost/Elevator/elevator-v2/',
         http_url: "test.txt"
      });
})
