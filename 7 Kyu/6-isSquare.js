// Fredo Coding Challenge 2023 (Live)
// 6/366
// Title = You're a square!
// By = bkaes
// Level 7 Kyu
// Tipe soal = Fundamentals & Mathematics
// Source = https://www.codewars.com/kata/54c27a33fb7da0db0100040e

// Cara 1 - If Else
var isSquare1 = function (n) {
  if (Math.sqrt(n) % 1 === 0) {
    return true;
  } else {
    return false;
  }
};

// Cara 2 - Arrow Function
const isSquare2 = (n) => Math.sqrt(n) % 1 === 0; // true : false

const isSquare = isSquare2;

// Test Cases
console.log(isSquare(4)); // true
console.log(isSquare(25)); // true
console.log(isSquare(26)); // false
console.log(isSquare(0)); // true
