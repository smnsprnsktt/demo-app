const dummyShoppingList = [
  { name: "banana", price: 1 },
  { name: "shrimps", price: 5.5 },
  { name: "avocado", price: 6.4 },
  { name: "tomato", price: 2 },
  { name: "pineapple", price: 3 },
  { name: "salmon", price: 8.1 },
];

const shoppingCart = [];

function renderCart() {
  const cart = document.getElementById("cart");
  cart.innerHTML = "";
  console.log(shoppingCart);
  shoppingCart.forEach(function (cartItem, index) {
    const item = document.createElement("div");
    const name = document.createElement("span");
    const price = document.createElement("span");
    // Prideti prie teksto prekes kaina
    name.innerText = cartItem.name;
    price.innerText = cartItem.price;

    item.appendChild(name);
    item.appendChild(price);
    const buttonRemove = document.createElement("button");
    buttonRemove.innerText = "Remove";
    buttonRemove.onclick = function () {
      removeFromList(index);
    };
    item.appendChild(buttonRemove);
    cart.appendChild(item);
  });
  const total = document.getElementById("total");
  // Suskaiciuoti total cart suma
  // Naudoti for loop
  let totalPrice = 0;
  for (let i = 0; i < shoppingCart.length; i++) {
    totalPrice = totalPrice + shoppingCart[i].price;
  }
  total.innerHTML = totalPrice; // Total kaina krepselio
  // Bonus add vegan price and the rest price
}

function addToList(listItem) {
  // Ikelti i shoppingCart shoppingItem objekta naudojant .push()
  console.log(listItem);
  shoppingCart.push(listItem);
  renderCart();
}

function removeFromList(index) {
  console.log(index);
  shoppingCart.splice(index, 1);
  // Pasalinti naudojant index
  // Skaityti apie splice funkcija cia:
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
  renderCart();
}

window.onload = function () {
  const body = document.getElementById("body");
  dummyShoppingList.forEach(function (listItem) {
    console.log(listItem);
    const div = document.createElement("div");
    div.className = "shopping-item";
    div.innerHTML = `
      <span>${listItem.name}</span>
      <span>${listItem.price}</span>
      `;
    const buttonAdd = document.createElement("button");
    buttonAdd.onclick = function () {
      addToList(listItem);
    };
    buttonAdd.textContent = "Add";
    div.appendChild(buttonAdd);
    body.appendChild(div);
  });
};
