// Fredo Coding Challenge 2023 (Live)
// 55/366
// Title = Abbreviate a Two Word Name
// By = samjam48
// Level 8 Kyu
// Tipe soal = Strings & Fundamentals
// Source = https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3

// Cara 1 - Split Map Join
function abbrevName1(name) {
  const nameArr = name
    .split(" ")
    .map((n) => n[0].toUpperCase())
    .join(".");
  return nameArr;
}

// Cara 2 - CharAt
function abbrevName2(name) {
  const nameArr = name
    .split(" ")
    .map((n) => n.charAt(0).toUpperCase())
    .join(".");
  return nameArr;
}

// Cara 3 - Arrow Function
const abbrevName3 = (name) =>
  name
    .split(" ")
    .map((n) => n[0].toUpperCase())
    .join(".");

const abbrevName = abbrevName3;

console.log(abbrevName("Sam Harris"), "S.H");
console.log(abbrevName("Patrick Feenan"), "P.F");
console.log(abbrevName("Evan Cole"), "E.C");
console.log(abbrevName("P Favuzzi"), "P.F");
console.log(abbrevName("David Mendieta"), "D.M");
