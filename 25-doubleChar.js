// Fredo Coding Challenge 2024
// 25/366
// Title = Double Char
// By = Alpri Else
// Level 8 Kyu
// Tipe soal = Fundamentals & Strings
// Source = https://www.codewars.com/kata/56b1f01c247c01db92000076

// Cara 1 - For Loop
function doubleChar1(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result += str[i];
    result += str[i];
  }
  return result;
}

// Cara 2 - Split, Map, and Join
function doubleChar2(str) {
  return str
    .split("")
    .map((el) => el + el)
    .join("");
}

// Cara 3 - Arrow Function
const doubleChar3 = (str) =>
  str
    .split("")
    .map((el) => el + el)
    .join("");

const doubleChar = doubleChar3;

console.log(doubleChar("Adidas"));
