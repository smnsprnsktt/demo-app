"use strict";

function takeChoice() {
  localStorage.setItem("pav", event.target.innerHTML);
  console.log("LABAS");
}

window.addEventListener("load", function () {
  alert(localStorage.getItem("pav"));
});
