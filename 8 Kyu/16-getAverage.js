// Fredo Coding Challenge 2024
// 16/366
// Title = Get the mean of an array
// By = AzariasB
// Level 8 Kyu
// Tipe soal = Arrays & Algorithms
// Source = https://www.codewars.com/kata/563e320cee5dddcf77000158

//Cara 1 - For Loop Math Floor
function getAverage1(marks) {
  let total = 0;
  for (let i = 0; i < marks.length; i++) {
    total += marks[i];
  }
  return Math.floor(total / marks.length);
}

//Cara 2 - Reduce Math Floor
function getAverage2(marks) {
  return Math.floor(marks.reduce((acc, curr) => acc + curr, 0) / marks.length);
}

//Cara 3 - Arrow Function Reduce Math Floor
const getAverage3 = (marks) => Math.floor(marks.reduce((acc, curr) => acc + curr, 0) / marks.length);

const getAverage = getAverage3;

console.log(getAverage([1, 2, 3, 4, 5])); // 3
