let file = document.querySelector("input");
let preview = document.querySelector("img");

file.onchange = (e)=>{    
    let src = URL.createObjectURL(e.target.files[0]);
    preview.src = src;
}