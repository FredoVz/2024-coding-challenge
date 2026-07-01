// Fredo Coding Challenge 2024
// 5/366
// Title = Will you make it?
// By = user2514386
// Level 8 Kyu
// Tipe soal = Mathematics & Fundamentals
// Source = https://www.codewars.com/kata/5861d28f124b35723e00005e

//Cara 1 - Function Declaration (Pembagian)
function zeroFuel1(distanceToPump, mpg, fuelLeft) {
  return distanceToPump / mpg <= fuelLeft;
}

//Cara 2 - Function Declaration (Perkalian)
function zeroFuel2(distanceToPump, mpg, fuelLeft) {
  return fuelLeft * mpg >= distanceToPump;
}

//Cara 3 - Arrow Function
const zeroFuel3 = (distanceToPump, mpg, fuelLeft) =>
  fuelLeft * mpg >= distanceToPump;

const zeroFuel = zeroFuel3;

console.log(zeroFuel(50, 25, 2));
