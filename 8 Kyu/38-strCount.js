// Fredo Coding Challenge 2024
// 38/366
// Title = All Star Code Challenge #18
// By = shaddyjr
// Level 8 Kyu
// Tipe soal = Fundamentals & Strings
// Source = https://www.codewars.com/kata/5865918c6b569962950002a1

// Cara 1 - Declaration Function & For Loop
function strCount1(str, letter) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      count++;
    }
  }
  return count;
}

// Cara 2 - Arrow Function
const strCount2 = (str, letter) => str.split(letter).length - 1;

// Cara 3 - Arrow Function (Final)
const strCount3 = (str, letter) => str.split("").filter((el) => el === letter).length;

const strCount = strCount3;

console.log(strCount("Hello", "l"));
