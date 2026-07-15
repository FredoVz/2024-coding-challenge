// Fredo Coding Challenge 2024
// 41/366
// Title = Correct the mistakes of the character recognition software
// By = denesnori
// Level 8 Kyu
// Tipe soal = Fundamentals & Strings
// Source = https://www.codewars.com/kata/577bd026df78c19bca0002c0

// Cara 1 - Split Map Join
function correct1(string) {
  return string
    .split("")
    .map((char) => {
      if (char === "5") return "S";
      if (char === "0") return "O";
      if (char === "1") return "I";
      return char;
    })
    .join("");
}

// Cara 2 - Replace & Regex
function correct2(string) {
  return string.replace(/[015]/g, (c) => {
    return { 0: "O", 1: "I", 5: "S" }[c];
  });
}

// Cara 3 - Arrow Function Replace & Regex
const correct3 = (string) => string.replace(/[015]/g, (c) => ({ 0: "O", 1: "I", 5: "S" })[c]);

const correct = correct3;

console.log(correct("1ND0NE51A"));
