// Fredo Coding Challenge 2023 (Live)
// 63/366
// Title = Return Negative
// By = Deantwo
// Level 8 Kyu
// Tipe soal = Fundamentals
// Source = https://www.codewars.com/kata/55685cd7ad70877c23000102

// Cara 1 - If Else
function makeNegative1(num) {
  if (num > 0) {
    return -num;
  } else {
    return num;
  }
}

// Cara 2 - Ternary Operator
function makeNegative2(num) {
  return num > 0 ? -num : num;
}

// Cara 3 - Arrow Function (Ternary Operator)
const makeNegative3 = (num) => (num > 0 ? -num : num);

// Cara 4 - Math Abs
function makeNegative4(num) {
  return -Math.abs(num);
}

// Cara 5 - Arrow Function (Math Abs)
const makeNegative5 = (num) => -Math.abs(num);

const makeNegative = makeNegative5;

console.log(makeNegative(1));
console.log(makeNegative(-5));
console.log(makeNegative(0));
console.log(makeNegative(0.12));
console.log(makeNegative(-42));
