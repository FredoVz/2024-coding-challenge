// Fredo Coding Challenge 2024
// 33/366
// Title = Find the first non-consecutive number
// By = thecodeite
// Level 8 Kyu
// Tipe soal = Arrays & Fundamentals
// Source = https://www.codewars.com/kata/58f8a3a27a5c28d92e000144

// Cara 1 - For Loop
function firstNonConsecutive1(arr) {
  let temp = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== temp + 1) {
      return arr[i];
    }
    temp = arr[i];
  }
  return null;
}

const firstNonConsecutive = firstNonConsecutive1;

console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]));
