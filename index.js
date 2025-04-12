let numbers = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operator");
function add(n1, n2) {
  console.log(n1 + n2);
}
function subtract(n1, n2) {
  console.log(n1 - n2);
}
function multiply(n1, n2) {
  console.log(n1 * n2);
}
function divide(n1, n2) {
  console.log(n1 / n2);
}
function setNumbers() {
  let num;
  numbers.forEach((number) => {
    number.addEventListener("click", () => {
      console.log(num);
      return (num = number.textContent);
    });
  });
}

function operator() {
  let n1;
  let op;
  let n2;
  if (op == undefined) {
    n1 += setNumbers();
  }
  if (n1 != "") {
    operators.forEach((operator) => {
      operator.addEventListener("click", () => {
        op = operator.textContent;
        console.log(op);
        return;
      });
    });
  }
  if (op != undefined) {
    console.log("xereca");
    n2 = setNumbers();
  }
  if (op == "+") {
    n2 = window.prompt();
    add(parseInt(n1), parseInt(n2));
  } else if (op == "-") {
    n2 = window.prompt();
    subtract(parseInt(n1), parseInt(n2));
  } else if (op == "*") {
    n2 = window.prompt();
    multiply(parseInt(n1), parseInt(n2));
  } else if (op == "/") {
    n2 = window.prompt();
    divide(parseInt(n1), parseInt(n2));
  }
}

operator();
