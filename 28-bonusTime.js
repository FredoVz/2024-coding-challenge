// Fredo Coding Challenge 2024
// 28/366
// Title = Do I get a bonus?
// By = PG1
// Level 8 Kyu
// Tipe soal = Strings & Logic
// Source = https://www.codewars.com/kata/56f6ad906b88de513f000d96

// Cara 1 - Ternary Operator & String Literal
function bonusTime1(salary, bonus) {
  return `£${bonus ? salary * 10 : salary}`;
}

// Cara 2 - Arrow Function, Ternary Operator, and String Literal
const bonusTime2 = (salary, bonus) => `£${bonus ? salary * 10 : salary}`;

const bonusTime = bonusTime2;

console.log(bonusTime(10000, false));
