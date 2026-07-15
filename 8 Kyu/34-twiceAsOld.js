// Fredo Coding Challenge 2024
// 34/366
// Title = Twice as old
// By = petrosernivka
// Level 8 Kyu
// Tipe soal = Fundamentals & Mathematics
// Source = https://www.codewars.com/kata/5b853229cfde412a470000d0

// Cara 1 - Declaration Function
function twiceAsOld1(dadYearsOld, sonYearsOld) {
  // your code here
  return Math.abs(dadYearsOld - sonYearsOld * 2);
}

// Cara 2 - Arrow Function
const twiceAsOld2 = (dadYearsOld, sonYearsOld) =>
  Math.abs(dadYearsOld - sonYearsOld * 2);

const twiceAsOld = twiceAsOld2;

console.log(
  twiceAsOld(55, 30), // 5
);
