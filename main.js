let head = document.querySelector(".head");
let up = document.querySelector(".up");
let down = document.querySelector(".down");
let body = document.querySelector(".body");

head.onclick = () => {
  up.classList.toggle("show");
  down.classList.toggle("show");
  if (body.style.display == null || body.style.display == "none") body.style.display = "block";
  else body.style.display = "none"
};
