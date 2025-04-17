let op = null;
let n1 = null;
let n2 = null;
let secondOp = null;
let equals = null;
const LIMIT = 25;

let numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equalsBtn = document.querySelector(".equals");
const display = document.querySelector(".input");
const clearBtn = document.querySelector(".clear");
const backBtn = document.querySelector(".back");
// preciso conseguir digitar n1 ate apertar um operador
// e depois digitar n2 ate apertar outro operador
// num antes de op vai pra n1, depois de op vai pra n2

equalsBtn.addEventListener("click", makeOperation);
clearBtn.addEventListener("click", clearInput);
backBtn.addEventListener("click", deleteNumber);

function updateDisplay(element) {
  display.textContent = element;
}

function deleteNumber() {
  if (n2 == null) {
    n1 = n1.slice(0, -1);
    updateDisplay(n1);
  } else {
    n2 = n2.slice(0, -1);
    updateDisplay(n2);
  }
}

function clearInput() {
  updateDisplay(0);

  n1 = null;
  n2 = null;
  op = null;
}

function setNumbers() {
  numbers.forEach((number) => {
    number.addEventListener("click", () => {
      if (op == null) {
        if (n1 == null) {
          n1 = number.textContent;
        } else {
          if (n1.length <= LIMIT) {
            n1 += number.textContent;
          }
        }
        updateDisplay(n1);
      } else {
        if (n2 == null) {
          n2 = number.textContent;
        } else {
          if (n2.length <= LIMIT) {
            n2 += number.textContent;
          }
        }
        updateDisplay(n2);
      }
    });
  });
  setOp();
}

function resetAll(result) {
  if (parseInt(result) == true || parseFloat(result) == true) {
    n1 = result;
  } else {
    n1 = null;
  }
  n2 = null;
  op = null;
}

function add(n1, n2) {
  return n1 + n2;
}
function subtract(n1, n2) {
  return n1 - n2;
}
function multiply(n1, n2) {
  return n1 * n2;
}
function divide(n1, n2) {
  if (n2 == 0) {
    return "Error! Can't divide by 0";
  }
  return n1 / n2;
}

function setOp() {
  operators.forEach((operator) => {
    operator.addEventListener("click", () => {
      op = operator.textContent;
      updateDisplay(op);
    });
  });
}

function makeOperation() {
  let result = 0;
  if (op == "+") {
    result = add(parseInt(n1), parseInt(n2));
  } else if (op == "-") {
    result = subtract(parseInt(n1), parseInt(n2));
  } else if (op == "*") {
    result = multiply(parseInt(n1), parseInt(n2));
  } else if (op == "/") {
    result = divide(parseInt(n1), parseInt(n2));
  }
  updateDisplay(result);
  resetAll(result);
}

if (secondOp != null) {
  console.log("res");
  resetAll();
}

setNumbers();
