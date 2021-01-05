"use strict";

// idName elementas kuriame bus ideti elementai su tagName
function populateCart(idName, tagName, limit) {
  fetch(
    `https://simutis.dev/api/generate-shopping-cart?${
      limit ? `limit=${limit}` : ""
    }`
  )
    .then((response) => response.json())
    .then((data) => {
      const container = document.getElementById(idName);
      const table = document.createElement("table");
      const tableHead = document.createElement("tr");
      table.appendChild(tableHead);
      table.className = "tablestyle";
      const tableHeadContentName = document.createElement("th");
      const tableHeadContentPrice = document.createElement("th");
      const tableHeadContentVegan = document.createElement("th");

      tableHead.appendChild(tableHeadContentName);

      tableHead.appendChild(tableHeadContentPrice);

      tableHead.appendChild(tableHeadContentVegan);

      tableHeadContentName.innerText = "Name";
      tableHeadContentPrice.innerText = "Price";
      tableHeadContentVegan.innerText = "Vegan";

      container.appendChild(table);
      data.forEach((item) => {
        //______________________
        const element = document.createElement("td");
        element.innerText = item.name;
        const elementPrice = document.createElement("td");
        elementPrice.innerText = item.price;
        const elementVegan = document.createElement("td");
        elementVegan.innerText = item.vegan;

        const tableRow = document.createElement("tr");
        table.appendChild(tableRow);

        tableRow.appendChild(element);
        tableRow.appendChild(elementPrice);
        tableRow.appendChild(elementVegan);

        //______________________
      });
    });
}

/**
 * Sukurti lentele  [name price vegan]
 *                  [asdasd, 10.15, taip]
 * Naudojant func populateCart ir joje pakeisti koda tarp komentaru bloku
 */

function onLoad() {
  const container = document.getElementById("container");
  const buttonClear = document.getElementById("button-clear");

  buttonClear.onclick = function () {
    const childrenList = document.getElementsByClassName("list-item");
    for (let i = 0; i < childrenList.length; i += 1) {
      console.log(childrenList[i]);
      childrenList[i].style.backgroundColor = "";
    }
  };
  populateCart("container", "div", 10);
  // for (let i = 0; i < 10; i += 1) {
  //   const listItem = document.createElement('span');
  //   listItem.innerText = 'Alio';
  //   listItem.className = 'list-item';

  //   listItem.onclick = function () {
  //     let prevElm = listItem.previousElementSibling;
  //     let nextElm = listItem.nextElementSibling;

  //     listItem.style.backgroundColor = 'green';

  //     while (prevElm) {
  //       prevElm.style.backgroundColor = 'red';
  //       prevElm = prevElm.previousElementSibling;
  //     }

  //     while (nextElm) {
  //       nextElm.style.backgroundColor = 'blue';
  //       nextElm = nextElm.nextElementSibling;
  //     }
  //   }
  //   container.appendChild(listItem);
  // }
  console.log(container);
}

window.onload = onLoad;
