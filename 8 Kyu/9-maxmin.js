// Fredo Coding Challenge 2024
// 9/366
// Title = Find Maximum and Minimum Values of a List
// By = Goncalerta
// Level 8 Kyu
// Tipe soal = Fundamentals
// Source = https://www.codewars.com/kata/577a98a6ae28071780000989

// Cara 1 - For Loop
var min1 = function (list) {
  let minValue = list[0];
  for (let i = 1; i < list.length; i++) {
    if (minValue > list[i]) {
      minValue = list[i];
    }
  }
  return minValue;
};

var max1 = function (list) {
  let maxValue = list[0];
  for (let i = 1; i < list.length; i++) {
    if (maxValue < list[i]) {
      maxValue = list[i];
    }
  }
  return maxValue;
};

// Cara 2 - Sort
const min2 = (list) => list.sort((a, b) => a - b)[0];
const max2 = (list) => list.sort((a, b) => b - a)[0];

// Cara 3 - Math MinMax
const min3 = (list) => Math.min(...list);
const max3 = (list) => Math.max(...list);

const min = min3;
const max = max3;

console.log(min([42, 54, 65, 87, 0, 1, 11, 111]));
console.log(max([42, 54, 65, 87, 0]));
