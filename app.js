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
const decimalBtn = document.querySelector(".decimalBtn");
const opBtns = document.querySelectorAll(".opBtn");
const equalsBtn = document.querySelector(".equalsBtn");
const clearAllBtn = document.querySelector(".clearAllBtn");
const clearOneBtn = document.querySelector(".clearOneBtn");

let currentNum = "";

let resultDisplayed = false;

numBtns.forEach((numBtn) => {
  numBtn.addEventListener("click", () => {
    if (resultDisplayed) {
      calcScreen.textContent = "";
      currentNum = "";
      num1 = undefined;
      operator = null;
      resultDisplayed = false;
    }

    currentNum += numBtn.textContent;
    calcScreen.textContent += numBtn.textContent;
  });
});

const operatorMap = {
  "+": add,
  "-": subtract,
  "*": multiply,
  "/": divide,
};

decimalBtn.addEventListener("click", () => {
  if (!currentNum.includes(".")) {
    if (currentNum === "") {
      currentNum = "0.";
      calcScreen.textContent += ".0";
    } else {
      currentNum += ".";
      calcScreen.textContent += ".";
    }
  }
});

opBtns.forEach((opBtn) => {
  opBtn.addEventListener("click", () => {

    const symbol = opBtn.textContent;

    if (currentNum === "" && num1 !== undefined) {
      calcScreen.textContent = calcScreen.textContent.slice(0, -1) + symbol;
      operator = operatorMap[symbol];
      return;
    }

    if (num1 === undefined) {
      num1 = Number(currentNum);
    } else if (currentNum !== "") {
      num2 = Number(currentNum);
      num1 = operate(operator, num1, num2);
      calcScreen.textContent = num1;
    }

    operator = operatorMap[symbol]; 
    currentNum = "";
    calcScreen.textContent += symbol;
  });
});

equalsBtn.addEventListener("click", () => {
  if (!operator || num1 === undefined || currentNum === "") {
    return;
  }

  num2 = Number(currentNum);

  if (operator && num1 !== undefined && !isNaN(num2)) {
    if (operator === divide && num2 === 0) {
      calcScreen.textContent = "!singularity!";
      num1 = undefined;
      currentNum = "";
      operator = null;
    } else {
      const result = operate(operator, num1, num2);

      calcScreen.textContent = Number.parseFloat(result.toFixed(4)).toString();
    
      num1 = result;
      currentNum = "";
      operator = null;
    }
  }

  resultDisplayed = true;
});

clearAllBtn.addEventListener("click", () => {
  calcScreen.textContent = "";
  currentNum = "";
  num1 = undefined;
  num2 = undefined;
  operator = null;
});

clearOneBtn.addEventListener("click", () => {
  calcScreen.textContent = calcScreen.textContent.slice(0, -1);
  currentNum = currentNum.slice(0, -1);
});
