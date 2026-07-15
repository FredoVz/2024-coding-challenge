// Fredo Coding Challenge 2024
// 44/366
// Title = Is it a palindrome?
// By = wichu
// Level 8 Kyu
// Tipe soal = Fundamentals
// Source = https://www.codewars.com/kata/57a1fd2ce298a731b20006a4/

// Cara 1 - Declaration Function
function isPalindrome1(x) {
  return x.toLowerCase() === x.toLowerCase().split("").reverse().join("");
}

// Cara 2 - Arrow Function
const isPalindrome2 = (x) => x.toLowerCase() === x.toLowerCase().split("").reverse().join("");

const isPalindrome = isPalindrome2;

console.log(isPalindrome("kodok"));
