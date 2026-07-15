// Fredo Coding Challenge 2023 (Live)
// 1/366
// Title = Stop gninnipS My sdroW!
// By = xDranik
// Level 6 Kyu
// Tipe soal = Strings & Algorithms
// Source = https://www.codewars.com/kata/5264d2b162488dc400000001

// Cara 1 - ForEach, If Else, Push (Split, Reverse, Join)
function spinWords1(string) {
  const temp = string.split(" ");
  const result = [];

  temp.forEach((el) => {
    if (el.length >= 5) {
      result.push(el.split("").reverse().join(""));
    } else {
      result.push(el);
    }
  });

  return result.join(" ");
}

// Cara 2 - (Split, (Map (Split, Reverse, Join)), Join)
function spinWords2(string) {
  return string
    .split(" ")
    .map((kata) =>
      kata.length >= 5 ? kata.split("").reverse().join("") : kata,
    )
    .join(" ");
}

// Cara 3 - Replace, Regex, (Spread Operator/Split, Reverse, Join)
function spinWords3(string) {
  return string.replace(/\w{5,}/g, (kata) => [...kata].reverse().join(""));
  // return string.replace(/\w{5,}/g, (kata) => kata.split("").reverse().join(""));
}

// Cara 4 - Arrow Function, Replace, Regex, (Spread Operator/Split, Reverse, Join)
const spinWords4 = (string) =>
  string.replace(/\w{5,}/g, (kata) => [...kata].reverse().join(""));

const spinWords = spinWords4;

console.log(spinWords("Hey fellow warriors"));
