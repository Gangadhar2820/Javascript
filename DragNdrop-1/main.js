let box = document.querySelector(".container");

box.onmousedown = handleMouseDown;

function handleMouseDown() {
   box.style.cursor = "move"
  document.body.addEventListener("mousemove",handleMouseMove,true)
  box.onmouseup = handleMouseUp;
}

function handleMouseMove(e) {
  let rectBox = box.getBoundingClientRect();
  box.style.top = `${rectBox.top + e.movementY}px`;
  box.style.left = `${rectBox.left + e.movementX}px`;
}

function handleMouseUp() {
   box.style.cursor = "default"
  document.body.removeEventListener("mousemove", handleMouseMove,true);
  console.dir(document.body)

}
