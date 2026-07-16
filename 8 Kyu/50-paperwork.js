// Fredo Coding Challenge 2023 (Live)
// 50/366
// Title = Beginner Series #1 School Paperwork
// By = Vortus
// Level 8 Kyu
// Tipe soal = Fundamentals
// Source = https://www.codewars.com/kata/55f9b48403f6b87a7c0000bd

// Cara 1 - Ternary Operator
function paperwork1(n, m) {
  return n < 0 || m < 0 ? 0 : n * m;
}

// Cara 2 - Math.max
function paperwork2(n, m) {
  return Math.max(0, n) * Math.max(0, m);
}

// Cara 3 - Arrow Function
const paperwork3 = (n, m) => Math.max(0, n) * Math.max(0, m);

const paperwork = paperwork3;

console.log(paperwork(5, 5));
