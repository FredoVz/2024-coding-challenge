// Fredo Coding Challenge 2023 (Live)
// 57/366
// Title = You Can't Code Under Pressure #1
// By = Kerrick
// Level 8 Kyu
// Tipe soal = Fundamentals
// Source = https://www.codewars.com/kata/53ee5429ba190077850011d4

// Cara 1
function doubleInteger1(i) {
  return i + i;
}

// Cara 2 - Arrow Function
const doubleInteger2 = (i) => i + i;

// Cara 3 - Perkalian
const doubleInteger3 = (i) => i * 2;

const doubleInteger = doubleInteger2;

console.log(doubleInteger(2));
