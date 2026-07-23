// Fredo Coding Challenge 2023 (Live)
// 61/366
// Title = Reversed Strings
// By = jhoffner
// Level 8 Kyu
// Tipe soal = Strings & Fundamentals
// Source = https://www.codewars.com/kata/5168bb5dfe9a00b126000018

// Cara 1 - Split, Reverse, dan Join
function solution1(str) {
  return str.split("").reverse().join("");
}

// Cara 2 - Arrow Function
const solution2 = (str) => str.split("").reverse().join("");

const solution = solution2;

console.log(solution("world"));
console.log(solution("hello"));
console.log(solution(""));
