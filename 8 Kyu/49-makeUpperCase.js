// Fredo Coding Challenge 2023 (Live)
// 49/366
// Title = MakeUpperCase
// By = wichu
// Level 8 Kyu
// Tipe soal = Fundamentals and Strings
// Source = https://www.codewars.com/kata/57a0556c7cb1f31ab3000ad7

// Cara 1 - toUpperCase()
function makeUpperCase1(str) {
  return str.toUpperCase();
}

// Cara 2 -  Split Map Join (If Else)
function makeUpperCase2(str) {
  return str
    .split("")
    .map((huruf) => {
      if (huruf.charCodeAt() >= 65 && huruf.charCodeAt() <= 90) {
        return huruf;
      } else {
        return String.fromCharCode(huruf.charCodeAt() - 32);
      }
    })
    .join("");
}

// Cara 3 - Split Map Join (If Else)
function makeUpperCase3(str) {
  return str
    .split("")
    .map((huruf) => {
      if (huruf.charCodeAt() >= 97 && huruf.charCodeAt() <= 122) {
        return String.fromCharCode(huruf.charCodeAt() - 32);
      }
      return huruf;
    })
    .join("");
}

// Cara 4 - Split Map Join (Ternary Operator)
function makeUpperCase4(str) {
  return str
    .split("")
    .map((huruf) => (huruf.charCodeAt() >= 97 && huruf.charCodeAt() <= 122 ? String.fromCharCode(huruf.charCodeAt() - 32) : huruf))
    .join("");
}

// Cara 5 - Split Map Join (Ternary Operator) - Arrow Function
const makeUpperCase5 = (str) =>
  str
    .split("")
    .map((huruf) => (huruf === huruf.toUpperCase() ? huruf : String.fromCharCode(huruf.charCodeAt() - 32)))
    .join("");

const makeUpperCase = makeUpperCase5;

console.log(makeUpperCase("Hello"));
