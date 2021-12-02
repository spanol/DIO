let order = [];
let clickedorder = [];
let score = 0;

const blue = document.querySelector(".blue");
const red = document.querySelector(".red");
const yellow = document.querySelector(".yellow");
const green = document.querySelector(".green");

//Arrowfunciton that shuffle colors
let randomorder = () => {
  let gameorder = Math.floor(Math.random() * 4);
  order[order.length] = gameorder;
  clickedorder = [];

  for (let i in order) {
    let gameColor = createColor(order[i]);
    LightColor(gameColor, Number(i) + 1);
  }
};

//Arrow function that creates our time
let LightColor = (element, time) => {
  time = time * 500;
  setTimeout(() => {
    element.classList.add("selected");
  }, time - 250);
  setTimeout(() => {
    element.classList.remove("selected");
  });
};

//Arrowfunction that check the order
let checkOrder = () => {
  for (let i in clickedorder) {
    if (clickedorder[i] != order[i]) {
      caseLose();
      break;
    }
  }
  if (clickedorder.length == order.length) {
    alert(`Score: ${score}`);
    caseWin();
  }
};

//Arrowfunction that makes the user can click the colors
let click = (color) => {
  clickedorder[clickedorder.length] = color;
  createColor(color).classList.add("selected");

  setTimeout(() => {
    createColor(color).classList.remove("selected");
    checkOrder();
  },250);
};

//Arrowfunction that creates  the colors
let createColor = (color) => {
  if (color == 0) {
    return green;
  } else if (color == 1) {
    return red;
  } else if (color == 2) {
    return yellow;
  } else if (color == 3) {
    return green;
  }
};

//Arrowfunction that adds points to the score/shuffle colors
let caseWin = () => {
  score++;
  randomorder();
};

//Arrowfunction that ends/resets the game
let caseLose = () => {
  alert(`Score: ${score}! Press ok to restar the game!`);
  order = [];
  clickedorder = [];

  startGame();
};

//Arrowfunction that starts the game
let startGame = () => {
  alert("Welcome to genesis!");
  score = 0;

  caseWin();
};

//Get the clicks as events
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

//Starts the game
startGame();
