// Fredo Coding Challenge 2024
// 19/366
// Title = Sum Mixed Array
// By = PG1
// Level 8 Kyu
// Tipe soal = Fundamentals, Strings, and Arrays
// Source = https://www.codewars.com/kata/57eaeb9578748ff92a000009

// Cara 1 - For Loop
function sumMix1(x) {
  let total = 0;
  for (let i = 0; i < x.length; i++) {
    total += +x[i]; //Bisa pakai parseInt(), Number(), dan +value
  }

  return total;
}

// Cara 2 - Reduce
function sumMix2(x) {
  return x.reduce((acc, curr) => acc + +curr, 0);
}

// Cara 3 - Arrow Function Reduce
const sumMix3 = (x) => x.reduce((acc, curr) => acc + +curr, 0);

const sumMix = sumMix3;

console.log(sumMix([9, 3, "7", "3"]));
