"use strict";

let info = [];
let pointsCount = 0;
const totalRounds = 15;
let roundsPlayed = 0;

const flagImage = document.createElement("img");

const optionButton1 = document.createElement("button"); // teisingas atsakymas
const optionButton2 = document.createElement("button");
const optionButton3 = document.createElement("button");
const finishModal = document.createElement("div");
const modalContent = document.createElement("div");

// function getRandomNumber() {
//   return Math.floor(Math.random() * 250);
// }

function generateRandomNumbers() {
  const nums = new Set();
  while (nums.size !== 3) {
    nums.add(Math.floor(Math.random() * 250) + 1);
  }
  return [...nums];
}

function loadNewFlag() {
  if (roundsPlayed + 1 < totalRounds) {
    setTimeout(function () {
      getData();
    }, 1000);
  } else {
    let modal = document.querySelector(".modal");
    modal.style.display = "block";
    // finishModal.className = "modal fade show";
    // modalContent.className = "modal-content";
    // modalContent.innerHTML = "div";
    // body.appendChild(finishModal);
    // finishModal.appendChild(modalContent);
  }

  roundsPlayed = roundsPlayed + 1;

  console.log(roundsPlayed);
}

function changeButtonState(state) {
  optionButton1.disabled = state;
  optionButton2.disabled = state;
  optionButton3.disabled = state;
}

function getData() {
  let container = document.querySelector("#container");
  let choices = document.querySelector("#choices");
  let score = document.querySelector("#score");
  let roundNum = document.querySelector("#roundNumber");
  let rounds = document.querySelector("#rounds");
  let startButton = document.getElementById("startButton");
  startButton.style.display = "none";

  fetch("https://restcountries.eu/rest/v2/all")
    .then((response) => response.json())
    .then((data) => {
      info = data;
      const randomNumbers = generateRandomNumbers(); // sugeneruojame random skaicius
      roundNum.innerHTML = roundsPlayed + 1;
      flagImage.src = data[randomNumbers[0]].flag; // atitinkama flag
      flagImage.style.width = "400px";
      optionButton1.innerHTML = data[randomNumbers[0]].name; // sugeneruojamas teisingas salies name atsakymas
      optionButton2.innerHTML = data[randomNumbers[1]].name; // nauja random salis incorrect
      optionButton3.innerHTML = data[randomNumbers[2]].name; // nauja random salis incorrect

      optionButton1.style.backgroundColor = "rgb(125, 240, 205)";
      optionButton2.style.backgroundColor = "rgb(125, 240, 205)";
      optionButton3.style.backgroundColor = "rgb(125, 240, 205)";
      changeButtonState(false);
      optionButton1.onclick = function () {
        optionButton1.style.backgroundColor = "green";
        pointsCount = pointsCount + 1;
        score.innerHTML = `${pointsCount} correct out of `;
        rounds.innerHTML = totalRounds;
        changeButtonState(true);
        loadNewFlag();
      };
      optionButton2.onclick = function () {
        optionButton2.style.backgroundColor = "red";
        changeButtonState(true);
        loadNewFlag();
      };
      optionButton3.onclick = function () {
        optionButton3.style.backgroundColor = "red";
        changeButtonState(true);
        loadNewFlag();
      };

      container.appendChild(flagImage);
      choices.appendChild(optionButton1);
      choices.appendChild(optionButton2);
      choices.appendChild(optionButton3);
      for (let i = choices.children.length; i >= 0; i--) {
        // shufflina buttonus
        choices.appendChild(choices.children[(Math.random() * i) | 0]);
      }
    });
}
