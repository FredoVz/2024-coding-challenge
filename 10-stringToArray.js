// Fredo Coding Challenge 2024
// 10/366
// Title = Convert a string to an array
// By = samjam48
// Level 8 Kyu
// Tipe soal = Arrays, Strings, & Fundamentals
// Source = https://www.codewars.com/kata/57e76bc428d6fbc2d500036d

//Cara 1 - Declaration Function & String Split
function stringToArray1(string) {
  return string.split(" ");
}

//Cara 2 - Arrow Function & String Split
const stringToArray2 = (string) => string.split(" ");

const stringToArray = stringToArray2;

console.log(stringToArray("Robin Singh"));
