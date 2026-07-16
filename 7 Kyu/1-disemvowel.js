// Fredo Coding Challenge 2023 (Live)
// 1/366
// Title = Disemvowel Trolls
// By = osuushi
// Level 7 Kyu
// Tipe soal = Strings, Regular Expressions, and Fundamentals
// Source = https://www.codewars.com/kata/52fba66badcd10859f00097e

// Cara 1 - For Loop
function disemvowel1(str) {
  const strArr = str.split("");
  const vowels = ["a", "e", "i", "o", "u"];

  for (let i = 0; i < strArr.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (strArr[i].toLowerCase() === vowels[j]) {
        strArr.splice(i, 1);
        i--;
      }
    }
  }

  return strArr.join("");
}

// Cara 2 - Filter & Includes
function disemvowel2(str) {
  const strArr = str.split("");
  const vowels = ["a", "e", "i", "o", "u"];

  const hasil = strArr.filter((huruf) => {
    return !vowels.includes(huruf.toLowerCase());
  });

  return hasil.join("");
}

// Cara 3 - Arrow Function
const disemvowel3 = (str) =>
  str
    .split("")
    .filter((huruf) => !["a", "e", "i", "o", "u"].includes(huruf.toLowerCase()))
    .join("");

const disemvowel = disemvowel3;

console.log(disemvowel("This website is for losers LOL!"));
