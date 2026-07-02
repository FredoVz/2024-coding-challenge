// Fredo Coding Challenge 2024
// 22/366
// Title = Remove exclamation marks
// By = wichu
// Level 8 Kyu
// Tipe soal = Fundamentals & Strings
// Source = https://www.codewars.com/kata/57a0885cbb9944e24c00008e

// Cara 1 - For Loop
function removeExclamationMarks1(s) {
  let result = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== "!") {
      result += s[i];
    }
  }
  return result;
}

// Cara 2 - Split Join
function removeExclamationMarks2(s) {
  return s.split("!").join("");
}

// Cara 3 - Arrow Function
const removeExclamationMarks3 = (s) => s.split("!").join("");

const removeExclamationMarks = removeExclamationMarks3;

console.log(removeExclamationMarks("Hello World!"));
