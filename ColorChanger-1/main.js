"use strict"

let colorPicker = document.getElementById("color");

colorPicker.addEventListener('input',(e)=>{
    document.body.style.background = e.target.value;
})

