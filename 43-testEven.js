// Fredo Coding Challenge 2024
// 43/366
// Title = Is it even?
// By = JoniWeiss
// Level 8 Kyu
// Tipe soal = Fundamentals
// Source = https://www.codewars.com/kata/555a67db74814aa4ee0001b5

// WPU Coding Challenge 2024
// 43/366
// https://www.codewars.com/kata/555a67db74814aa4ee0001b5

// Cara 1 - Declaration Function
function testEven1(n) {
  return n % 2 === 0;
}

// Cara 2 - Arrow Function
const testEven2 = (n) => n % 2 === 0;

const testEven = testEven2;

console.log(testEven2(8));
