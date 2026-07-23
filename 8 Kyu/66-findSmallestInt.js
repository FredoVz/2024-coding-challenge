// Fredo Coding Challenge 2023 (Live)
// 66/366
// Title = Find the smallest integer in the array
// By = dukeofgarda
// Level 8 Kyu
// Tipe soal = Fundamentals
// Source = https://www.codewars.com/kata/55a2d7ebe362935a210000b2

// Cara 1 - Sort
function findSmallestInt1(arr) {
  // Cari bilangan terkecil dalam sebuah array
  // Diurutkan dulu
  return arr.sort((a, b) => a - b)[0];
}

// Cara 2 - Math.min
function findSmallestInt2(arr) {
  // Cari bilangan terkecil dalam sebuah array
  return Math.min(...arr);
}

// Cara 3 - Arrow Function (Sort)
const findSmallestInt3 = (arr) => arr.sort((a, b) => a - b)[0];

// Cara 4 - Arrow Function (Math.min)
const findSmallestInt4 = (arr) => Math.min(...arr);

const findSmallestInt = findSmallestInt4;

console.log(findSmallestInt([78, 56, 232, 12, 8]));
console.log(findSmallestInt([78, 56, 232, 12, 18]));
console.log(findSmallestInt([78, 56, 232, 412, 228]));
console.log(findSmallestInt([78, 56, 232, 12, 0]));
console.log(findSmallestInt([1, 56, 232, 12, 8]));
