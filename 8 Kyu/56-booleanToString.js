// Fredo Coding Challenge 2023 (Live)
// 56/366
// Title = Convert a Boolean to a String
// By = btaitelb
// Level 8 Kyu
// Tipe soal = Strings & Fundamentals
// Source = https://www.codewars.com/kata/551b4501ac0447318f0009cd

// Cara 1
function booleanToString1(b) {
  return b ? "true" : "false";
}

// Cara 2 - Arrow Function
const booleanToString2 = (b) => (b ? "true" : "false");

// Cara 3 - toString
const booleanToString3 = (b) => b.toString();

// Cara 4 - Template Literal
const booleanToString4 = (b) => `${b}`;

const booleanToString = booleanToString4;

console.log(booleanToString(true));
console.log(booleanToString(false));
