let qr = document.querySelector(".qr");
let qrImage = document.querySelector("img");
let qrInput = document.querySelector("#qrinput");
let genBtn = document.querySelector("button");
let refreshIcon = document.querySelector("i");


genBtn.onclick = GenerateQR;

function GenerateQR(){
    let text = qrInput.value.trim();

    if(!text){
        alert("Input text must be non empty");
        qrInput.value="";

    }else{
        let url =  `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`;
        genBtn.innerHTML= 'Generating... <i class="fa-solid fa-rotate-right rotate"></i>';
        qrImage.setAttribute("src",url);
            qrImage.onload = ()=>{
                genBtn.innerHTML= 'Generate';
                qr.style.display = "block";      
        }   
    }
}