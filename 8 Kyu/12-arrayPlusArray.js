// Fredo Coding Challenge 2024
// 12/366
// Title = Array plus array
// By = Dmitry Kudla
// Level 8 Kyu
// Tipe soal = Fundamentals, Arrays, and Debugging
// Source = https://www.codewars.com/kata/5a2be17aee1aaefe2a000151

// Cara 1 - For Loop
function arrayPlusArray1(arr1, arr2) {
  let total = 0;
  for (let i = 0; i < arr1.length; i++) {
    total += arr1[i];
  }

  for (let i = 0; i < arr2.length; i++) {
    total += arr2[i];
  }
  return total;
}

// Cara 2 - For Loop dengan Arguments
function arrayPlusArray2(arr1, arr2) {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    for (let j = 0; j < arguments[i].length; j++) {
      total += arguments[i][j];
    }
  }

  return total;
}

// Cara 3 - Reduce
function arrayPlusArray3(arr1, arr2) {
  return [...arr1, ...arr2].reduce((acc, curr) => acc + curr);
}

// Cara 4 - Arrow Function
const arrayPlusArray4 = (arr1, arr2) =>
  [...arr1, ...arr2].reduce((acc, curr) => acc + curr);

arrayPlusArray = arrayPlusArray4;

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));
