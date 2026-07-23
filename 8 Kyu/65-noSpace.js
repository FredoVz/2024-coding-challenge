// Fredo Coding Challenge 2023 (Live)
// 65/366
// Title = Remove String Spaces
// By = PG1
// Level 8 Kyu
// Tipe soal = Fundamentals & Strings
// Source = https://www.codewars.com/kata/57eae20f5500ad98e50002c5

// Cara 1 - Split, Join
function noSpace1(x) {
  // Menghilangkan spasi dari sebuah string
  return x.split(" ").join("");
}

// Cara 2 - Arrow Function (Split, Join)
const noSpace2 = (x) => x.split(" ").join("");

const noSpace = noSpace2;

console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B"));
console.log(noSpace("8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd"));
console.log(noSpace("8aaaaa dddd r     "));
