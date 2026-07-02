// Fredo Coding Challenge 2024
// 34/366
// Title = Find the first non-consecutive number
// By = thecodeite
// Level 8 Kyu
// Tipe soal = Arrays & Fundamentals
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
