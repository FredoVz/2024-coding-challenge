// Fredo Coding Challenge 2024
// 32/366
// Title = Beginner Series #4 Cockroach
// By = Vortus
// Level 8 Kyu
// Tipe soal = Fundamentals
// Source = https://www.codewars.com/kata/55fab1ffda3e2e44f00000c6

// Cara 1 Math Floor (km ke cm dan jam ke detik)
function cockroachSpeed1(s) {
  return Math.floor((s * 100000) / 3600);
}

// Cara 2 - Arrow Function Math Floor
const cockroachSpeed2 = (s) => Math.floor((s * 100000) / 3600);

const cockroachSpeed = cockroachSpeed2;

console.log(cockroachSpeed(1.08));
