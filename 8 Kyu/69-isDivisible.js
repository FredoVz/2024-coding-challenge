// Fredo Coding Challenge 2023 (Live)
// 69/366
// Title = Is n divisible by x and y?
// By = naaz
// Level 8 Kyu
// Tipe soal = Refactoring
// Source = https://www.codewars.com/kata/5545f109004975ea66000086

// Cara 1 - If & Modulus
function isDivisible1(n, x, y) {
  if (n % x === 0 && n % y === 0) {
    return true;
  }

  return false;
}

// Cara 2 - Langsung return
function isDivisible2(n, x, y) {
  return n % x === 0 && n % y === 0;
}

// Cara 3 - Arrow Function (Modulus)
const isDivisible3 = (n, x, y) => n % x === 0 && n % y === 0;

// Cara 4 - Arrow Function (Bool Modulus)
const isDivisible4 = (n, x, y) => !Boolean((n % x) + (n % y));

const isDivisible = isDivisible4;

console.log(isDivisible(3, 3, 4)); // false
console.log(isDivisible(12, 3, 4)); // true
console.log(isDivisible(8, 3, 4)); // false
console.log(isDivisible(48, 3, 4)); // true
