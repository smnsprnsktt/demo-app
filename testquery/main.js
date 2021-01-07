"use strict";

const square = document.createElement("div");

function test() {
  const container = document.getElementById("container");
  for (let i = 0; i < 3; i += 1) {
    const square = document.createElement("div");
    square.className = "square";
    container.appendChild(square);
  }
}

function onLoad() {
  const container = document.getElementById("container");
  test();
  window.addEventListener("click", function (event) {
    event.target.style.backgroundColor = "red";
    console.log(event);
    if (event.target.nextSibling) {
      event.target.nextSibling.style.backgroundColor = "grey";
    }
    if (event.target.previousSibling) {
      event.target.previousSibling.style.backgroundColor = "grey";
    }
  });
  console.log(container);
}

window.onload = onLoad;
