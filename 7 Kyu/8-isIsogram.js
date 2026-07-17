// Fredo Coding Challenge 2023 (Live)
// 8/366
// Title = Isograms
// By = chunjef
// Level 7 Kyu
// Tipe soal = Strings & Fundamentals
// Source = https://www.codewars.com/kata/54ba84be607a92aa900000f1

// Cara 1 - For Loop If toLowerCase
function isIsogram1(str) {
  for (let i = 0; i < str.length; ++i) {
    for (let j = 0; j < str.length; ++j) {
      if (str[i].toLowerCase() === str[j].toLowerCase() && i !== j) {
        return false;
      }
    }
  }
  return true;
}

// Cara 2 - Set toLowerCase
function isIsogram2(str) {
  return new Set(str.toLowerCase()).size === str.length;
}

// Cara 3 - Arrow Function Set toUpperCase
const isIsogram3 = (str) => new Set(str.toUpperCase()).size === str.length;

// Cara 4 - Arrow Function Regex
const isIsogram4 = (str) => !str.match(/(.).*\1/i);

// Cara 5 - Arrow Function For Loop RegExp Spread Operator
const isIsogram5 = (str) => {
  for (let i = 0; i < str.length; ++i) if ([...str].filter((v) => new RegExp(str[i], "i").test(v)).length > 1) return false;

  return true;
};

const isIsogram = isIsogram5;

console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("isogram"));
console.log(isIsogram("aba"));
console.log(isIsogram("moOse"));
console.log(isIsogram("isIsogram"));
console.log(isIsogram(""));
