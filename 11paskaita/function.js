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

    function generateNumber(multiplier) {
      return Math.random() * multiplier;
    } 

    function toggleBox() {
      let containerElement = document.getElementById('container');

      if (containerElement.style.height === '0px') {
        containerElement.style.height = '50px';
        document.getElementById('box').innerHTML = "Collapse!";
      } else {
        containerElement.style.height = '0px';
        document.getElementById('box').innerHTML = "Expand!";
      }
    }
    
    function changeColor() {
      let containerElement = document.getElementById('container');

      let randomIndex = Math.floor(arrayOfColors.length * Math.random()) % arrayOfColors.length; 
      containerElement.style.backgroundColor = arrayOfColors[randomIndex];
      containerElement.style.width = `${generateNumber(100)}px`;
      containerElement.style.height = `${generateNumber(100)}px`;
    }

    