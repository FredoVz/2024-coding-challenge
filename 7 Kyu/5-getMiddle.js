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
const getMiddle = getMiddle1;

console.log(getMiddle("fredo"));
console.log(getMiddle("test"));
console.log(getMiddle("testing"));
console.log(getMiddle("middle"));
console.log(getMiddle("A"));
