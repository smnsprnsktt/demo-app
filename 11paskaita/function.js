"use strict";

let arrayVar = [true, "Simona", 123];

let objectVar = { name: "Simona", age: 100 };

function funcTest(num) {
  return num + 1;
}

console.log(arrayVar);
console.log(objectVar);
console.log(funcTest(4));

let und;

function test() {
    console.log('test');
    document
      .getElementById('container')
      .style.backgroundColor = 'yellow';
  }

  function test2() {
    console.log('test2');
    document
      .getElementById('container')
      .style.backgroundColor = 'blue';
  }