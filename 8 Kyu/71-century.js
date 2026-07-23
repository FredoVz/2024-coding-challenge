// Fredo Coding Challenge 2023 (Live)
// 71/366
// Title = Century From Year
// By = MrZizoScream
// Level 8 Kyu
// Tipe soal = Fundamentals & Mathematics
// Source = https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097

// Cara 1 - Math.ceil
function century1(year) {
  return Math.ceil(year / 100);
}

// Cara 2 - Arrow Function (Math.ceil)
const century2 = (year) => Math.ceil(year / 100);

const century = century2;

console.log(century(1705));
console.log(century(1900));
console.log(century(1601));
console.log(century(2000));
console.log(century(89));
