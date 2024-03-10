let captchaEle = document.getElementById("captcha");
let captchaInp = document.getElementById("captchaInp");

let refresh = document.getElementById("refresh");
let check = document.getElementById("check");

let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
let captcha;

function generateCaptcha() {
  captcha = "";
  for (let i = 0; i < 7; i++) {
    let index = Math.floor(Math.random() * chars.length);
    captcha += chars[index];
  }
  captchaEle.value = captcha;
}

generateCaptcha();

refresh.onclick = generateCaptcha;

function validateCaptcha() {
  let value = captchaInp.value.trim();
  if (value != captcha) {
    alert("Invalid captcha");
    captchaInp.value = "";
  } else {
    alert("Captcha validated successfully");
    captchaInp.value = "";
  }
}

check.onclick = validateCaptcha;
