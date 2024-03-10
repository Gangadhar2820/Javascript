let taskinput = document.getElementById("taskInput");
let add = document.getElementById("add");
let tasklist = document.querySelector(".tasklist");

add.onclick = addTask;

function addTask() {
  let taskinfo = taskinput.value.trim();

  if (taskinfo.length == 0) alert("Please enter task info");
  else {
    let taskElement = document.createElement("div");
    taskElement.innerHTML = `<p>${taskinfo}</p><button id="del"><span class="material-symbols-outlined">
    delete
    </span></button>`;
    taskElement.classList.add("task");

    tasklist.appendChild(taskElement);
    taskinput.value = "";
  }

  let delBtns = document.querySelectorAll("#del");

  for (let btn of delBtns) {
    btn.onclick = ()=>{
        btn.parentNode.remove();
    }
  }
}
