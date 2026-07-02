// Fredo Coding Challenge 2024
// 23/366
// Title = Count the Monkeys!
// By = PG1
// Level 8 Kyu
// Tipe soal = Arrays, Fundamentals, Lists , and Algorithms
// Source = https://www.codewars.com/kata/56f69d9f9400f508fb000ba7

// Cara 1 - For Loop
function monkeyCount1(n) {
  const result = [];
  for (let i = 1; i <= n; i++) {
    result.push(i);
  }
  return result;
}

// Cara 2 - Array From
function monkeyCount2(n) {
  return Array.from({ length: n }, (_, i) => i + 1);
}

// Cara 3 - Arrow Function
const monkeyCount3 = (n) => Array.from({ length: n }, (_, i) => i + 1);

const monkeyCount = monkeyCount3;

console.log(monkeyCount(10));
