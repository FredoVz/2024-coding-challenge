// Fredo Coding Challenge 2023 (Live)
// 4/366
// Title = Highest and Lowest
// By = Deantwo
// Level 7 Kyu
// Tipe soal = Fundamentals & Strings
// Source = https://www.codewars.com/kata/554b4ac871d6813a03000035

function highAndLow1(numbers) {
  const numArr = numbers.split(" ");
  let min = parseInt(numArr[0]);
  let max = parseInt(numArr[0]);
  for (let i = 0; i < numArr.length; i++) {
    if (min < parseInt(numArr[i])) {
      min = parseInt(numArr[i]);
    }

    if (max > parseInt(numArr[i])) {
      max = parseInt(numArr[i]);
    }
  }

  return min + " " + max;
}

// Cara 2 - Arrow Function (Split, Map, Sort)
const highAndLow2 = (numbers) =>
  String(
    numbers
      .split(" ")
      .map((e) => parseInt(e))
      .sort((a, b) => b - a)[0] +
      " " +
      numbers
        .split(" ")
        .map((e) => parseInt(e))
        .sort((a, b) => a - b)[0],
  );

const highAndLow = highAndLow2;

console.log(highAndLow("1 2 3 4 5"));
console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"));
