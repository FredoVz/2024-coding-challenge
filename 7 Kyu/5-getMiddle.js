// Fredo Coding Challenge 2023 (Live)
// 5/366
// Title = Get the Middle Character
// By = Shivo
// Level 7 Kyu
// Tipe soal = Fundamentals & Strings
// Source = https://www.codewars.com/kata/56747fd5cb988479af000028

// Cara 1 - If Else
function getMiddle1(s) {
  if (s.length % 2 === 1) {
    return s.charAt(s.length / 2);
  } else {
    return s.charAt(s.length / 2 - 1) + s.charAt(s.length / 2);
  }
}

// Cara 2 - Arrow Function Ternary Operator
const getMiddle2 = (s) => (s.length % 2 === 1 ? s.charAt(s.length / 2) : s.charAt(s.length / 2 - 1) + s.charAt(s.length / 2));

// Cara 3 - Split Map Join (Bug Angka Ganjil)
function getMiddle3(s) {
  return s.split("").length % 2 == 0
    ? s
        .split("")
        .map(function (e, i) {
          return i == s.split("").length / 2 ? e : i + 1 == s.split("").length / 2 ? e : "";
        })
        .filter((e) => e !== "")
        .join("")
    : s
        .split("")
        .map(function (e, i) {
          return i == s.split("").length / 2 ? e : "";
        })
        .filter((e) => e !== "")
        .join("");
}

// Cara 4 - Substring, Math Ceil, Ternary Operator
function getMiddle4(s) {
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}

// Cara 5 - Arrow Function Substring, Math Ceil, Ternary Operator
const getMiddle5 = (s) => s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);

const getMiddle = getMiddle5;

console.log(getMiddle("fredo"));
console.log(getMiddle("test"));
console.log(getMiddle("testing"));
console.log(getMiddle("middle"));
console.log(getMiddle("A"));
