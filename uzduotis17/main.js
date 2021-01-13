"use strict";

function onLoad() {
  const melyna = document.getElementById("blue");
  melyna.onclick = function () {
    document.getElementById("content").style.backgroundColor = "blue";
  };
  const raudona = document.getElementById("red");
  raudona.onclick = function () {
    document.getElementById("content").style.backgroundColor = "red";
  };
  const zalia = document.getElementById("green");
  zalia.onclick = function () {
    document.getElementById("content").style.backgroundColor = "green";
  };
  const juoda = document.getElementById("black");
  juoda.onclick = function () {
    document.getElementById("content").style.backgroundColor = "black";
  };
}

window.onload = onLoad;
