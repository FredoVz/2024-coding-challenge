// Fredo Coding Challenge 2023 (Live)
// 48/366
// Title = Stop gninnipS My sdroW!
// By = xDranik
// Level 6 Kyu
// Tipe soal = Strings & Algorithms
// Source = https://www.codewars.com/kata/5264d2b162488dc400000001

// Cara 1 - Split, reverse, dan join If Else
function spinWords(string) {
  const temp = string.split(" ");
  const result = [];

  temp.forEach((el) => {
    if (el.length >= 5) {
      result.push(el.split("").reverse().join(""));
    }
    result.push(el);
  });

  return result.join(" ");
}

console.log(spinWords("Hey fellow warriors"));
