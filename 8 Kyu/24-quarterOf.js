// Fredo Coding Challenge 2024
// 24/366
// Title = Quarter of the year
// By = Orses
// Level 8 Kyu
// Tipe soal = Fundamentals & Mathematics
// Source = https://www.codewars.com/kata/5ce9c1000bab0b001134f5af

// Cara 1 - If Else
const quarterOf1 = (month) => {
  if (month <= 3) {
    return 1;
  } else if (month <= 6) {
    return 2;
  } else if (month <= 9) {
    return 3;
  } else {
    return 4;
  }
};

// Cara 2 - Ternary Operator
const quarterOf2 = (month) => {
  return month <= 3 ? 1 : month <= 6 ? 2 : month <= 9 ? 3 : 4;
};

// Cara 3 - Arrow Function Ternary Operator
const quarterOf3 = (month) => (month <= 3 ? 1 : month <= 6 ? 2 : month <= 9 ? 3 : 4);

// Cara 4 - Arrow Function Math Ceil
const quarterOf4 = (month) => Math.ceil(month / 3);

const quarterOf = quarterOf4;

console.log(quarterOf(11));
