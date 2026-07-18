// Fredo Coding Challenge 2023 (Live)
// 13/366
// Title = Beginner Series #3 Sum of Numbers
// By = Vortus
// Level 7 Kyu
// Tipe soal = Fundamentals & Algorithms
// Source = https://www.codewars.com/kata/55f2b110f61eb01779000053

// Cara 1 - If For Loop
function getSum1(a, b) {
  const min = a < b ? a : b;
  const max = a > b ? a : b;
  let sum = 0;
  if (a === b) return a;

  for (let i = min; i <= max; i++) {
    sum += i;
  }

  return sum;
}

// Cara 2 - Math Absolute
function getSum2(a, b) {
  return ((Math.abs(a - b) + 1) * (a + b)) / 2;
}

// Cara 3 - Math Min and Math Max
function getSum3(a, b) {
  const min = Math.min(a, b);
  const max = Math.max(a, b);
  return ((max - min + 1) * (min + max)) / 2;
}

// Cara 4 - Recursive (Panggil fungsi didalam fungsi)
function getSum4(a, b, result = Math.min(a, b)) {
  return a === b ? result : getSum4(Math.min(a, b) + 1, Math.max(a, b), result + Math.min(a, b) + 1);
}

const getSum = getSum4;

console.log(getSum(0, -1));
console.log(getSum(0, 1));
console.log(getSum(2, 2));
console.log(getSum(1, 3));
