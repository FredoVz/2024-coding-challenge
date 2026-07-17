// Fredo Coding Challenge 2023 (Live)
// 7/366
// Title = Shortest Word
// By = PG1
// Level 7 Kyu
// Tipe soal = Fundamentals
// Source = https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9

// Cara 1 - Split Sort
function findShort1(s) {
  const sArr = s.split(" ");
  return sArr.sort((a, b) => a.length - b.length)[0].length;
}

// Cara 2 - Arrow Function (Split Sort)
const findShort2 = (s) => s.split(" ").sort((a, b) => a.length - b.length)[0].length;

// Cara 3 - Arrow Function (Split Reduce)
const findShort3 = (s) => s.split(" ").reduce((a, b) => (a.length <= b.length ? a : b)).length;

const findShort = findShort3;

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
console.log(findShort("turns out random test cases are easier than writing out basic ones"));
