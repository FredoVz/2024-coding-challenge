// Fredo Coding Challenge 2023 (Live)
// 67/366
// Title = Counting sheep...
// By = tfKamran
// Level 8 Kyu
// Tipe soal = Arrays & Fundamentals
// Source = https://www.codewars.com/kata/54edbc7200b811e956000556

// Cara 1 - For Loop
function countSheeps1(sheep) {
  let sum = 0;
  for (i = 0; i < sheep.length; i++) {
    if (sheep[i] === true) {
      sum++;
    }
  }

  return sum;
}

// Cara 2 - Foreach
function countSheeps2(sheep) {
  let sum = 0;
  sheep.forEach((sheep) => {
    if (sheep) sum++;
  });
  return sum;
}

// Cara 3 - Filter, Length
function countSheeps3(sheep) {
  return sheep.filter((sheep) => sheep).length;
}

// Cara 4 - Arrow Function
const countSheeps4 = (sheep) => sheep.filter((sheep) => sheep).length;

const countSheeps = countSheeps4;

console.log(countSheeps([true, true, true, false, true, true, true, true, true, false, true, false, true, false, false, true, true, true, true, true, false, false, true, true]));
