// Fredo Coding Challenge 2023 (Live)
// 54/366
// Title = Convert number to reversed array of digits
// By = emporio
// Level 8 Kyu
// Tipe soal = Arrays & Fundamentals
// Source = https://www.codewars.com/kata/5583090cbe83f4fd8c000051

// Cara 1 - toString + split + reverse + map
function digitize1(n) {
  // angka ke array
  return n
    .toString()
    .split("")
    .reverse()
    .map((a) => Number(a));
}

// Cara 2 - Arrow Function (ParseInt)
const digitize2 = (n) =>
  n
    .toString()
    .split("")
    .reverse()
    .map((a) => Number(a));

// Cara 3 - Arrow Function Spread Operator, Map, Reverse
const digitize3 = (n) => [...String(n)].map(Number).reverse();

const digitize = digitize3;

console.log(digitize(35231), [1, 3, 2, 5, 3]);
console.log(digitize(0), [0]);
