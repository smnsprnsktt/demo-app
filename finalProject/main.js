"use strict";

let info = [];
let pointsCount = 0;
let totalRounds = 0;
let roundsPlayed = 0;

const flagImage = document.createElement("img");
const optionButton1 = document.createElement("button"); // teisingas atsakymas
const optionButton2 = document.createElement("button");
const optionButton3 = document.createElement("button");
const finishModal = document.createElement("div");
const modalContent = document.createElement("div");

function generateRandomNumbers() {
  const nums = new Set(); // setas nesikartojanciu skaiciu
  while (nums.size !== 3) {
    nums.add(Math.floor(Math.random() * 250));
  }
  return [...nums];
}

function loadNewFlag() {
  if (roundsPlayed + 1 < totalRounds) {
    setTimeout(function () {
      getData();
    }, 1000);
  } else {
    $("#exampleModalCenter").modal({});
    let modalMessage = document.querySelector("#modal-message");

    modalMessage.innerHTML = `${pointsCount} correct out of ${totalRounds}`;
  }
  roundsPlayed = roundsPlayed + 1;
  console.log(roundsPlayed);
}

function startNewGame(numberOfRounds) {
  roundsPlayed = 0;
  pointsCount = 0;
  totalRounds = numberOfRounds;
  let score = document.querySelector("#score");
  score.innerHTML = `${pointsCount} correct out of  ${totalRounds} ${
    pointsCount > 0 ? "😮" : "😅"
  } `;
  getData();
}

function changeButtonState(state) {
  optionButton1.disabled = state;
  optionButton2.disabled = state;
  optionButton3.disabled = state;
}

function getData() {
  let choices = document.querySelector("#choices");
  let score = document.querySelector("#score");
  let roundNum = document.querySelector("#roundNumber");
  document.getElementById("startButton5").style.display = "none";
  document.getElementById("startButton10").style.display = "none";
  document.getElementById("startButton15").style.display = "none";
  document.getElementById("startButton20").style.display = "none";
  document.getElementById("container").style.marginTop = 0;
  document.getElementById("roundsQuestion").style.display = "none";

  fetch("https://restcountries.eu/rest/v2/all")
    .then((response) => response.json())
    .then((data) => {
      info = data;
      const randomNumbers = generateRandomNumbers(); // sugeneruoj random skaicius
      roundNum.innerHTML = `Round ${roundsPlayed + 1}`;
      flagImage.src = data[randomNumbers[0]].flag; // atitinkama flag
      flagImage.style.height = "250px";
      optionButton1.innerHTML = data[randomNumbers[0]].name; // sugeneruojamas teisingas salies name atsakymas
      optionButton2.innerHTML = data[randomNumbers[1]].name; // nauja random salis incorrect
      optionButton3.innerHTML = data[randomNumbers[2]].name; // nauja random salis incorrect

      optionButton1.className = "btn btn-light";
      optionButton2.className = "btn btn-light";
      optionButton3.className = "btn btn-light";

      optionButton1.style.backgroundColor = "#f8f9fa";
      optionButton2.style.backgroundColor = "#f8f9fa";
      optionButton3.style.backgroundColor = "#f8f9fa";
      changeButtonState(false);
      optionButton1.onclick = function () {
        optionButton1.style.backgroundColor = "#20c960";
        pointsCount = pointsCount + 1;
        score.innerHTML = `${pointsCount} correct out of  ${totalRounds} ${
          pointsCount > 0 ? "😮" : "😅"
        } `;
        changeButtonState(true);
        loadNewFlag();
      };
      optionButton2.onclick = function () {
        optionButton2.style.backgroundColor = "#c91414";
        changeButtonState(true);
        loadNewFlag();
      };
      optionButton3.onclick = function () {
        optionButton3.style.backgroundColor = "#c91414";
        changeButtonState(true);
        loadNewFlag();
      };

      flagsContainer.appendChild(flagImage);
      choices.appendChild(optionButton1);
      choices.appendChild(optionButton2);
      choices.appendChild(optionButton3);
      for (let i = choices.children.length; i >= 0; i--) {
        // shufflina buttonus
        choices.appendChild(choices.children[(Math.random() * i) | 0]);
      }
    });
}
