// Fredo Coding Challenge 2024
// 7/366
// Title = Count by X
// By = shums16
// Level 8 Kyu
// Tipe soal = Arrays & Fundamentals
// Source = https://www.codewars.com/kata/5513795bd3fafb56c200049e

//Cara 1 - For Loop (Cara Manual)
function countBy1(x, n) {
  let z = [];
  for (let i = 1; i <= n; i++) {
    z.push(i * x);
  }
  return z;
}

//Cara 2 - Array Map Spread Operator
function countBy2(x, n) {
  return [...Array(n)].map((_, i) => (i + 1) * x);
}

//Cara 3 - Arrow Function
const countBy3 = (x, n) => [...Array(n)].map((_, i) => (i + 1) * x);

const countBy = countBy3;

console.log(countBy(2, 5));
