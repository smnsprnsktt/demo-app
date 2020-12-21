"use strict";

let arrayVar = [true, "Simona", 123];

let objectVar = { name: "Simona", age: 100 };

function funcTest(num) {
  return num + 1;
}

  let arrayOfColors = [
    'red',
    'blue',
    'brown',
    ]

    let index = 0;

    function generateNumber() {
      return Math.random() * 500;
    } 

    function changeColor() {
      let randomIndex = Math.floor(arrayOfColors.length * Math.random()) 
      document.getElementById('container').style.backgroundColor = arrayOfColors[randomIndex];
      document.getElementById('container').style.width = `${generateNumber()}px`;
      document.getElementById('container').style.height = `${generateNumber()}px`;
      index = (index +1) % arrayOfColors.length;
    }

    