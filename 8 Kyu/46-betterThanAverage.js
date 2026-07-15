// Fredo Coding Challenge 2023 (Live)
// 46/366
// Title = How good are you really?
// By = Jotha
// Level 8 Kyu
// Tipe soal = Fundamentals
// Source = https://www.codewars.com/kata/5601409514fc93442500010b

// Cara 1 - For Loop
function betterThanAverage1(classPoints, yourPoints) {
  // hitung rata-rata
  let total = 0;
  for (let i = 0; i < classPoints.length; i++) {
    total += classPoints[i];
  }

  // bandingkan dengan nilai kita
  // return yourPoints > total / classPoints.length;
  return classPoints.length * yourPoints > total;
}

// Cara 2 - For Each
function betterThanAverage2(classPoints, yourPoints) {
  // hitung rata-rata
  let total = 0;
  classPoints.forEach((el) => (total += el));

  // bandingkan dengan nilai kita
  return yourPoints > total / classPoints.length;
}

// Cara 3 - Reduce
function betterThanAverage3(classPoints, yourPoints) {
  return (
    yourPoints >
    classPoints.reduce((acc, curr) => acc + curr, 0) / classPoints.length
  );
}

// Cara 4 - Arrow Function
const betterThanAverage4 = (classPoints, yourPoints) =>
  yourPoints >
  classPoints.reduce((acc, curr) => acc + curr, 0) / classPoints.length;

const betterThanAverage = betterThanAverage4;

console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75));
