"use strict";

const square = document.createElement("div");

const list = [];

function test() {
  const container = document.getElementById("container");
  for (let i = 0; i < 3; i += 1) {
    const square = document.createElement("div");
    square.className = "square";
    square.id = "square";
    list.push(square);
    container.appendChild(square);
  }
}

function onLoad() {
  test();
  window.addEventListener("click", function (event) {
    for (let i = 0; i < list.length; i += 1) {
      list[i].style.backgroundColor = "grey";
    }
    event.target.style.backgroundColor = "red";
  });
}

window.onload = onLoad;
