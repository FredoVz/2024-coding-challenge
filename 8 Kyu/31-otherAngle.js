// Fredo Coding Challenge 2024
// 31/366
// Title = Third Angle of a Triangle
// By = user5651159
// Level 8 Kyu
// Tipe soal = Fundamentals
// Source = https://www.codewars.com/kata/5a023c426975981341000014/javascript

// Cara 1 - Declaration Function
function otherAngle1(a, b) {
  return 180 - (a + b);
}

// Cara 2 - Arrow Function
const otherAngle2 = (a, b) => 180 - (a + b);

const otherAngle = otherAngle2;

console.log(otherAngle(30, 60));
