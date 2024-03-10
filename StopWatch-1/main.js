"use strict";
let screen = document.querySelector(".screen");
let startBtn = document.getElementById("start");
let resetBtn = document.getElementById("reset");
let pauseBtn = document.getElementById("pause");

let started = false;
let paused = false;
let reseted = false;

let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;

let interval;

function updateWatch() {
  milliseconds += 10;

  if (milliseconds == 1000) {
    seconds += 1;
    milliseconds = 0;
  }
  if (seconds == 60) {
    minutes += 1;
    seconds = 0;
  }
  if (minutes == 60) {
    hours += 1;
    minutes = 0;
  }

  updateScreen();
}

function updateScreen() {
  let timer = "";

  if (hours < 10) {
    timer += `0${hours} : `;
  } else {
    timer += `${hours} : `;
  }

  if (minutes < 10) {
    timer += `0${minutes} : `;
  } else {
    timer += `${minutes} : `;
  }
  if (seconds < 10) {
    timer += `0${seconds} : `;
  } else {
    timer += `${seconds} : `;
  }
  if (milliseconds < 10) {
    timer += `00${milliseconds}`;
  } else if (milliseconds < 100) {
    timer += `0${milliseconds}`;
  } else {
    timer += `${milliseconds}`;
  }

  screen.innerText = timer;
}

startBtn.onclick = startWatch;

function startWatch() {
  if (!started) {
    interval = setInterval(updateWatch, 10);
    paused = false;
    started = true;
    reseted = false;
  }
}

pauseBtn.onclick = pauseWatch;

function pauseWatch() {
  if (!paused) {
    clearInterval(interval);
    paused = true;
    started = false;
    reseted = false;
  }
}

resetBtn.onclick = resetWatch;

function resetWatch() {
  if (!reseted) {
    reseted = true;
    paused = false;
    started = false;
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    clearInterval(interval);
    screen.innerText = "00 : 00 : 00 : 000";
  }
}
