let op = null;
let secondOp = null;
let n1 = null;
let n2 = null;
let equals = null;
let currentInput = "0";

let numbers = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operator");
let equalsBtn = document.querySelector(".equals");
let display = document.querySelector(".input");
// preciso conseguir digitar n1 ate apertar um operador
// e depois digitar n2 ate apertar outro operador
// num antes de op vai pra n1, depois de op vai pra n2

equalsBtn.addEventListener("click", makeOperation);

function setNumbers() {
  numbers.forEach((number) => {
    number.addEventListener("click", () => {
      if (op == null) {
        if (n1 == null) {
          n1 = number.textContent;
        } else {
          n1 += number.textContent;
        }
        display.textContent = n1;
      } else {
        if (n2 == null) {
          n2 = number.textContent;
        } else {
          n2 += number.textContent;
        }
        display.textContent = n2;
      }
    });
  });
  setOp();
}

function resetAll() {
  n1 = null;
  n2 = null;
  op = null;
}

function add(n1, n2) {
  display.textContent = n1 + n2;
}
function subtract(n1, n2) {
  display.textContent = n1 - n2;
}
function multiply(n1, n2) {
  display.textContent = n1 * n2;
}
function divide(n1, n2) {
  display.textContent = n1 / n2;
}

function setOp() {
  operators.forEach((operator) => {
    operator.addEventListener("click", () => {
      op = operator.textContent;
      display.textContent = op;
    });
  });
}

function makeOperation() {
  if (op == "+") {
    add(parseInt(n1), parseInt(n2));
  } else if (op == "-") {
    subtract(parseInt(n1), parseInt(n2));
  } else if (op == "*") {
    multiply(parseInt(n1), parseInt(n2));
  } else if (op == "/") {
    divide(parseInt(n1), parseInt(n2));
  }
  resetAll();
}

if (secondOp != null) {
  console.log("res");
  resetAll();
}

setNumbers();
