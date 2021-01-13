"use strict";

let info = [];

const flagImage = document.createElement("img");

const optionButton1 = document.createElement("button");
const optionButton2 = document.createElement("button");
const optionButton3 = document.createElement("button");

function getRandomNumber() {
  return Math.floor(Math.random() * 250);
}

function getData() {
  let container = document.querySelector("#container");
  let choices = document.querySelector("#choices");
  optionButton1.style.backgroundColor = "rgb(125, 240, 205)";
  fetch("https://restcountries.eu/rest/v2/all")
    .then((response) => response.json())
    .then((data) => {
      info = data;
      const randomNumber = getRandomNumber();

      flagImage.src = data[randomNumber].flag;
      flagImage.style.width = "400px";
      optionButton1.innerHTML = data[randomNumber].name;
      optionButton2.innerHTML = data[getRandomNumber()].name;
      optionButton3.innerHTML = data[getRandomNumber()].name;
      optionButton1.onclick = function () {
        optionButton1.style.backgroundColor = "green";
      };
      container.appendChild(flagImage);
      choices.appendChild(optionButton1);
      choices.appendChild(optionButton2);
      choices.appendChild(optionButton3);
      for (let i = choices.children.length; i >= 0; i--) {
        choices.appendChild(choices.children[(Math.random() * i) | 0]);
      }
    });
}
