// Fredo Coding Challenge 2024
// 21/366
// Title = Transportation on vacation
// By = Milford
// Level 8 Kyu
// Tipe soal = Fundamentals
// Source = https://www.codewars.com/kata/568d0dd208ee69389d000016

// Cara 1 - If
function rentalCarCost1(d) {
  let diskon = 0;
  if (d >= 3) {
    diskon = 20;
  }
  if (d >= 7) {
    diskon = 50;
  }
  return d * 40 - diskon;
}

// Cara 2 - If Else
function rentalCarCost2(d) {
  let diskon = 0;
  if (d >= 7) {
    diskon = 50;
  } else if (d >= 3) {
    diskon = 20;
  }
  return d * 40 - diskon;
}

// Cara 3 - Ternary Operator
function rentalCarCost3(d) {
  return d * 40 - (d >= 7 ? 50 : d >= 3 ? 20 : 0);
}

// Cara 4 - Arrow Function
const rentalCarCost4 = (d) => d * 40 - (d >= 7 ? 50 : d >= 3 ? 20 : 0);

const rentalCarCost = rentalCarCost4;

console.log(rentalCarCost(2));
