// Fredo Coding Challenge 2023 (Live)
// 62/366
// Title = Remove First and Last Character
// By = Steadyx
// Level 8 Kyu
// Tipe soal = Strings & Fundamentals
// Source = https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0

// Cara 1 - Slice
function removeChar1(str) {
  // Menghilangkan karakter pertama dan terakhir dari sebuah string
  return str.slice(1, -1);
}

// Cara 2 - Substring
function removeChar2(str) {
  return str.substring(1, str.length - 1);
}

// Cara 3 - Arrow Function (Slice)
const removeChar3 = (str) => str.slice(1, -1);

// Cara 4 - Arrow Function (Substring)
const removeChar4 = (str) => str.substring(1, str.length - 1);

// Cara 5 - Split, Shift, dan Pop
function removeChar5(str) {
  // Ubah str jadi array
  const arrStr = str.split("");
  arrStr.shift();
  arrStr.pop();
  // Ubah array jadi string
  return arrStr.join("");
}

const removeChar = removeChar5;

console.log(removeChar("eloquent"));
console.log(removeChar("country"));
console.log(removeChar("person"));
console.log(removeChar("place"));
