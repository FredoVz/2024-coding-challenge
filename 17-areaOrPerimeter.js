// Fredo Coding Challenge 2024
// 17/366
// Title = Area or Perimeter
// By = no one
// Level 8 Kyu
// Tipe soal = Fundamentals, Mathematics, and Geometry
// Source = https://www.codewars.com/kata/5ab6538b379d20ad880000ab

// Cara 1 - If Else
const areaOrPerimeter1 = function (l, w) {
  if (l === w) {
    return l * w;
  } else {
    return 2 * l + 2 * w;
  }
};

// Cara 2 - Ternary Operator
const areaOrPerimeter2 = function (l, w) {
  return l === w ? l * w : 2 * (l + w);
};

// Cara 3 - Arrow Function
const areaOrPerimeter3 = (l, w) => (l === w ? l * w : 2 * (l + w));

const areaOrPerimeter = areaOrPerimeter3;

console.log(areaOrPerimeter(6, 10));
