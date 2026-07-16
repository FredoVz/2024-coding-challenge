// Fredo Coding Challenge 2023 (Live)
// 52/366
// Title = Basic Mathematical Operations
// By = Quickz
// Level 8 Kyu
// Tipe soal = Mathematics & Fundamentals
// Source = https://www.codewars.com/kata/57356c55867b9b7a60000bd7

// Cara 1 - If Else
function basicOp1(operation, value1, value2) {
  if (operation === "+") {
    return value1 + value2;
  } else if (operation === "-") {
    return value1 - value2;
  } else if (operation === "*") {
    return value1 * value2;
  } else {
    return value1 / value2;
  }
}

// Cara 2 - Switch Case
function basicOp2(operation, value1, value2) {
  switch (operation) {
    case "+":
      return value1 + value2;
    case "-":
      return value1 - value2;
    case "*":
      return value1 * value2;
    case "/":
      return value1 / value2;
    default:
      return 0;
  }
}

// Cara 3 - Object
function basicOp3(operation, value1, value2) {
  arr = {
    "+": value1 + value2,
    "-": value1 - value2,
    "*": value1 * value2,
    "/": value1 / value2,
  };

  return arr[operation];
}

// Cara 4 - Eval
function basicOp4(operation, value1, value2) {
  return eval(value1 + operation + value2);
}

// Cara 5 - Arrow Function
const basicOp5 = (operation, value1, value2) => eval(value1 + operation + value2);

const basicOp = basicOp5;

console.log(basicOp("+", 4, 7), 11);
console.log(basicOp("-", 15, 18), -3);
console.log(basicOp("*", 5, 5), 25);
console.log(basicOp("/", 49, 7), 7);
