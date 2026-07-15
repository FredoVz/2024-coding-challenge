// Fredo Coding Challenge 2024
// 4/366
// Title = Sentence Smash
// By = richardhsu
// Level 8 Kyu
// Tipe soal = Strings, Arrays, & Fundamentals
// Source = https://www.codewars.com/kata/53dc23c68a0c93699800041d

// Cara 1 - Function Declaration
function smash1(words) {
  return words.join(" ");
}

// Cara 2 - Arrow Function
const smash2 = (words) => words.join(" ");

// Cara 3 - For Loop Tanpa join
function smash3(words) {
  let result = "";
  for (let i = 0; i < words.length; i++) {
    result += words[i];
    if (i != words.length - 1) result += " ";
  }

  return result;
}

const smash = smash3;

console.log(smash(["hello", "world", "this", "is", "great"]));
