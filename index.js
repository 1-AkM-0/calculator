let op = null;
let n1 = null;
let n2 = null;
let isDecimal = false;
let isResultDecimal = false;

let equals = null;
const validInputs = "0123456789";
const validOp = "+-/*";
const LIMIT = 25;

let numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equalsBtn = document.querySelector(".equals");
const display = document.querySelector(".input");
const clearBtn = document.querySelector(".clear");
const backBtn = document.querySelector(".back");
const decimalBtn = document.querySelector(".dot");

equalsBtn.addEventListener("click", makeOperation);
clearBtn.addEventListener("click", clearInput);
backBtn.addEventListener("click", deleteNumber);
decimalBtn.addEventListener("click", setDecimal);
document.querySelectorAll("button").forEach((btn) => {
  btn.addEventListener("mouseup", () => {
    btn.blur();
  });
});

function typeNumbers() {
  window.addEventListener("keydown", (e) => {
    console.log("tecla pressionada: " + e.key);
    if (validInputs.includes(e.key)) {
      if (op == null) {
        if (n1 == null) {
          n1 = e.key;
        } else {
          if (n1.toString().length <= LIMIT) {
            n1 += e.key;
          }
        }
        updateDisplay(n1);
      } else {
        if (n2 == null) {
          n2 = e.key;
        } else {
          if (n2.length <= LIMIT) {
            n2 += e.key;
          }
        }
        updateDisplay(n2);
      }
    } else if (validOp.includes(e.key)) {
      setOp(e.key);
    } else if (e.key == "Enter") {
      makeOperation();
    } else if (e.key == ".") {
      setDecimal();
    } else if (e.key === "Backspace") {
      e.preventDefault();
      deleteNumber();
    }
  });
}
typeNumbers();
function setDecimal() {
  if (n2 == null && isDecimal == false && isResultDecimal == false) {
    n1 += ".";
    isDecimal = true;
    isResultDecimal = true;
  } else if (n2 != null && isDecimal == false) {
    n2 += ".";
    isDecimal = true;
    isResultDecimal = true;
  }
}

function updateDisplay(element) {
  display.textContent = element;
}

function deleteNumber() {
  if (n1 != null && op == null && n1.toString() > 0) {
    n1 = n1.toString().slice(0, -1);
    updateDisplay(n1 || 0);
  } else if (n2 != null && n2.length > 0) {
    n2 = n2.slice(0, -1);
    updateDisplay(n2 || 0);
  } else if (op != null && n2 == null) {
    op = null;
    updateDisplay(n1 || 0);
  }
}

function clearInput() {
  updateDisplay(0);

  isDecimal = false;
  isResultDecimal = false;
  n1 = null;
  n2 = null;
  op = null;
}

function clickNumbers() {
  numbers.forEach((number) => {
    number.addEventListener("click", () => {
      if (op == null) {
        if (n1 == null) {
          n1 = number.textContent;
        } else {
          if (n1.toString().length <= LIMIT) {
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
  if (parseInt(result) != NaN || parseFloat(result) != NaN) {
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

function setOp(key) {
  operators.forEach((operator) => {
    operator.addEventListener("click", () => {
      if (n1 != null) {
        op = operator.textContent;
        isDecimal = false;
        updateDisplay(op);
      }
    });
  });
  if (n1 != null) {
    op = key;
    isDecimal = false;
    updateDisplay(op);
  }
}

function makeOperation() {
  let result = 0;
  if (n1 != null && n2 != null) {
    if (op == "+") {
      result = add(parseFloat(n1), parseFloat(n2));
    } else if (op == "-") {
      result = subtract(parseFloat(n1), parseFloat(n2));
    } else if (op == "*") {
      result = multiply(parseFloat(n1), parseFloat(n2));
    } else if (op == "/") {
      result = divide(parseFloat(n1), parseFloat(n2));
    }
    updateDisplay(result);
    resetAll(result);
  }
}

clickNumbers();
