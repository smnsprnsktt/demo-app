"use strict";

const square = document.createElement("div");

function test() {
  const container = document.getElementById("container");
  for (let i = 0; i < 3; i += 1) {
    const square = document.createElement("div");
    square.className = "square";
    square.id = "square";
    container.appendChild(square);
  }
}

function onLoad() {
  test();
  window.addEventListener("click", function (event) {
    if (event.target.id === "square") {
      event.target.style.backgroundColor = "red";
    }
    console.log(event.target.id);
    if (event.target.nextSibling) {
      event.target.nextSibling.style.backgroundColor = "grey";
    }
    if (event.target.previousSibling) {
      event.target.previousSibling.style.backgroundColor = "grey";
    }
  });
}

window.onload = onLoad;
