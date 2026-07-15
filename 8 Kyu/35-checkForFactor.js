// Fredo Coding Challenge 2024
// 35/366
// Title = Grasshopper - Check for factor
// By = danleavitt0
// Level 8 Kyu
// Tipe soal = Mathematics & Fundamentals
// Source = https://www.codewars.com/kata/55cbc3586671f6aa070000fb

// Cara 1 - Declaration Function
function checkForFactor1(base, factor) {
  // return base % factor === 0;
  return !(base % factor);
}

// Cara 2 - Arrow Function
const checkForFactor2 = (base, factor) => !(base % factor);

const checkForFactor = checkForFactor2;

console.log(checkForFactor(24617, 3));
