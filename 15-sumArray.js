// Fredo Coding Challenge 2024
// 15/366
// Title = Sum without highest and lowest number
// By = user5036852
// Level 8 Kyu
// Tipe soal = Fundamentals
// Source = https://www.codewars.com/kata/576b93db1129fcf2200001e6

// Cara 1 - If Else, Sort, dan For Loop
function sumArray1(array) {
  if (array === null || array.length <= 2) return 0;
  const sorted = array.sort((a, b) => a - b);
  let result = 0;
  for (let i = 1; i < sorted.length - 1; i++) {
    result += sorted[i];
  }
  return result;
}

// Cara 2 - If Else, Sort, Slice, dan Reduce
function sumArray2(array) {
  if (array === null || array.length <= 2) return 0;
  return (sorted = array
    .sort((a, b) => a - b)
    .slice(1, -1)
    .reduce((acc, curr) => acc + curr));
}

// Cara 3 - Ternary Operator, Sort, Slice, dan Reduce
function sumArray3(array) {
  return array === null || array.length <= 2
    ? 0
    : array
        .sort((a, b) => a - b)
        .slice(1, -1)
        .reduce((acc, curr) => acc + curr);
}

// Cara 4 - Arrow Function
const sumArray4 = (array) =>
  //array === null || array.length <= 2
  array == null || array.length <= 2
    ? 0
    : array
        .sort((a, b) => a - b)
        .slice(1, -1)
        .reduce((acc, curr) => acc + curr);

// Cara 5 - Arrow Function Cara lain
const sumArray5 = (array) =>
  array
    ? array
        .sort((a, b) => a - b)
        .slice(1, -1)
        .reduce((acc, curr) => acc + curr, 0)
    : 0;

const sumArray = sumArray5;

console.log(sumArray([0, 1, 6, 10, 10]));
