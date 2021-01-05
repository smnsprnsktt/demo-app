"use strict";

function onLoad() {
  const container = document.getElementById("container");
  for (let i = 0; i < 10; i += 1) {
    const listItem = document.createElement("span");
    listItem.innerText = "Alio";

    listItem.onclick = function () {
      let prevElm = listItem.previousElementSibling;
      let nextElm = listItem.nextElementSibling;

      listItem.style.backgroundColor = "green";

      while (prevElm) {
        prevElm.style.backgroundColor = "red";
        prevElm = prevElm.previousElementSibling;
      }

      while (nextElm) {
        nextElm.style.backgroundColor = "blue";
        nextElm = prevElm.nextElementSibling;
      }
    };
    container.appendChild(listItem);
  }
  console.log(container);
}
window.onload = onLoad;
