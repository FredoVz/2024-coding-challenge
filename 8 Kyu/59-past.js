// Fredo Coding Challenge 2023 (Live)
// 59/366
// Title = Beginner Series #2 Clock
// By = Vortus
// Level 8 Kyu
// Tipe soal = Fundamentals
// Source = https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a

// Cara 1 - Function
function past1(h, m, s) {
  return (3600 * h + 60 * m + s) * 1000;
}

// Cara 2 - Arrow Function
const past2 = (h, m, s) => (3600 * h + 60 * m + s) * 1000;

const past = past2;

console.log(past(0, 1, 1)); // 61000
console.log(past(1, 1, 1)); // 3661000
console.log(past(0, 0, 0)); // 0
console.log(past(1, 0, 1)); // 3601000
console.log(past(1, 0, 0)); // 3600000
