// Fredo Coding Challenge 2023 (Live)
// 70/366
// Title = Square(n) Sum
// By = jhoffner
// Level 8 Kyu
// Tipe soal = Arrays, Lists, and Fundamentals
// Source = https://www.codewars.com/kata/515e271a311df0350d00000f

// Cara 1 - For Loop
function squareSum1(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i] * numbers[i];
  }

  return total;
}

// Cara 2 - For Each
const squareSum2 = (numbers) => {
  let total = 0;
  numbers.forEach((n) => (total += n * n));
  return total;
};

// Cara 3 - Reduce
const squareSum3 = (numbers) => numbers.reduce((acc, n) => acc + n * n, 0);

// Cara 4 - Reduce + Math.pow
const squareSum4 = (numbers) =>
  numbers.reduce((acc, n) => acc + Math.pow(n, 2), 0);

const squareSum = squareSum4;

console.log(squareSum([1, 2]));
console.log(squareSum([0, 3, 4, 5]));
console.log(squareSum([]));
