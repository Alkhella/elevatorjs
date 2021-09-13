load = () =>{
   let xhr = new XMLHttpRequest();
   let doc = document.getElementById("load");
   let progress = document.querySelector(".prograessfill");
   let bar = document.querySelector(".progressbar");
        xhr.open("POST", "test.txt", true);
        xhr.onload = ()=>{
            if(xhr.readyState === XMLHttpRequest.DONE){
                if(xhr.status === 200){
                    
                  doc.innerHTML = xhr.response;
                }else{
                    doc.innerHTML = "data error";
                }
            }
        }
        xhr.addEventListener("progress", (e) =>{
            
            const prog_percent = e.lengthComputable ? (e.loaded / e.total) * 100 : 0;
            progress.style.width = prog_percent.toFixed(2)+'%';
            
            if (prog_percent == 100) {
                bar.style.display = 'none';
            }else{
                bar.style.display = 'block';
            }
            
        });
        xhr.send();
}