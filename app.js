const add = function(num1, num2) {
  return num1 + num2;
}

const subtract = function(num1, num2) {
  return num1 - num2;
}

const multiply = function(num1, num2) {
  return num1 * num2;
}

const divide = function(num1, num2) {
  return num1 / num2;
}

let num1;
let operator;
let num2;

const operate = function(operator, num1, num2) {
  return operator(num1, num2);
}

const calcScreen = document.querySelector(".calcScreen");
const numBtns = document.querySelectorAll(".numBtn");
const opBtns = document.querySelectorAll(".opBtn");
const clearAllBtn = document.querySelector(".clearAllBtn");
const clearOneBtn = document.querySelector(".clearOneBtn");


numBtns.forEach((numBtn) => {
  numBtn.addEventListener("click", () => {
    calcScreen.textContent += numBtn.textContent;
  });
});

opBtns.forEach((opBtn) => {
  opBtn.addEventListener("click", () => {
    calcScreen.textContent += opBtn.textContent;
  });
});

clearAllBtn.addEventListener("click", () => {
  calcScreen.textContent = "";
});

clearOneBtn.addEventListener("click", () => {
  calcScreen.textContent = calcScreen.textContent.slice(0, -1);
});
