// Fredo Coding Challenge 2023 (Live)
// 51/366
// Title = Sum Arrays
// By = richardhsu
// Level 8 Kyu
// Tipe soal = Arrays & Fundamentals
// Source = https://www.codewars.com/kata/53dc54212259ed3d4f00071c

// Cara 1 - For Loop If
function sum1(numbers) {
  // newbie mode
  let hasil = 0;
  if (numbers.length === 0) return 0;

  for (let i = 0; i < numbers.length; i++) {
    hasil += numbers[i];
  }

  return hasil;
}

// Cara 2
function sum2(numbers) {
  // newbie mode
  let hasil = 0;
  if (!numbers.length) return 0;

  for (let i = 0; i < numbers.length; i++) {
    hasil += numbers[i];
  }

  return hasil;
}

// Cara 3 - Reduce
function sum3(numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

// Cara 4 eval numbers join & Nullish coalescing
function sum4(numbers) {
  return eval(numbers.join("+")) ?? 0;
}

// Cara 5 - Ternary Operator
function sum5(numbers) {
  return !numbers.length ? 0 : eval(numbers.join("+"));
}

// Cara 6 - Arrow Function
const sum6 = (numbers) => numbers.reduce((acc, curr) => acc + curr, 0);

const sum = sum6;

console.log(sum([1, 2, 3, 4, 5, 6]));
