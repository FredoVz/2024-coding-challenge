// Fredo Coding Challenge 2024
// 1/366
// Title = Beginner - Reduce but Grow
// By = PG1
// Level 8 Kyu
// Tipe soal = Fundamentals & Arrays
// Source = https://www.codewars.com/kata/57f780909f7e8e3183000078

//Cara 1 - Function Declaration
function grow1(x) {
  let result = x[0];
  for (let i = 1; i < x.length; i++) {
    result *= x[i];
  }
  return result;
}

//Cara 2 - Function Declaration menggunakan reduce
function grow2(x) {
  const result = x.reduce((acc, curr) => acc * curr);
  return result;
}

//Cara 3 - Function Expression yang menerima arrow function dan menggunakan reduce
const grow3 = (x) => x.reduce((acc, curr) => acc * curr);

const grow = grow3;

console.log(grow([1, 2, 3, 4]));
