// Fredo Coding Challenge 2023 (Live)
// 68/366
// Title = Convert a Number to a String!
// By = AKJ.IO
// Level 8 Kyu
// Tipe soal = Strings & Fundamentals
// Source = https://www.codewars.com/kata/5265326f5fda8eb1160004c8

// Cara 1 - toString() method
function numberToString1(num) {
  return num.toString();
}

// Cara 2 - String() function
function numberToString2(num) {
  return String(num);
}

// Cara 3 - Concatenation with an empty string
function numberToString3(num) {
  return "" + num;
}

// Cara 4 - Arrow function with toString() method
const numberToString4 = (num) => num.toString();

// Cara 5 - Arrow function with String() function
const numberToString5 = (num) => String(num);

// Cara 6 - Arrow function with concatenation
const numberToString6 = (num) => "" + num;

const numberToString = numberToString6;

console.log(numberToString(67));
