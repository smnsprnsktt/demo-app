let masyvas = [0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

for (let i = 0; i < masyvas.length; i++) {
  let item = masyvas[i];
  if (item % 4 == 0 && item % 3 == 0) {
    character = "!";
  } else if (item % 3 == 0) {
    character = "*";
  } else if (item % 4 == 0) {
    character = "@";
  } else {
    character = "";
  }
  console.log(item + character);
}

let stringVar = "abcdefgh";
let endResult = "";
for (let i = 0; i < stringVar.length; i++) {
  endResult = endResult + stringVar[i] + stringVar[i];
}
//console.log(endResult);
