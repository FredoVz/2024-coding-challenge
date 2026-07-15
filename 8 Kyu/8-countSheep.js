// Fredo Coding Challenge 2024
// 8/366
// Title = If you can't sleep, just count sheep!!
// By = joshra
// Level 8 Kyu
// Tipe soal = Fundamentals & Strings
// Source = https://www.codewars.com/kata/5b077ebdaf15be5c7f000077

// Cara 1 - For Loop
var countSheep1 = function (num) {
  let result = "";
  for (let i = 1; i <= num; i++) {
    result += i + " sheep...";
  }

  return result;
};

// Cara 2 - String Literal
var countSheep2 = function (num) {
  let result = "";
  for (let i = 1; i <= num; i++) {
    result += `${i} sheep...`;
  }

  return result;
};

// Cara 3 - Spread Operator
var countSheep3 = function (num) {
  return [...Array(num)].map((_, i) => `${i + 1} sheep...`).join("");
};

// Cara 4 - Function Expression
const countSheep4 = (num) =>
  [...Array(num)].map((_, i) => `${i + 1} sheep...`).join("");

const countSheep = countSheep4;

console.log(countSheep(3));
