"use strict";

function takeChoice() {
  localStorage.setItem("pav", event.target.innerHTML);
}
window.addEventListener("load", function () {
  alert(localStorage.getItem("pav"));
});
