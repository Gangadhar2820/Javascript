

setInterval(()=>{
    let letters = "0123456789abcdef";
    let color = "#"
    for(let i=0;i<6;i++){
        let index = Math.floor(Math.random()*16);
        color+=letters[index]
    }
   document.body.style.background = color;
},1500)