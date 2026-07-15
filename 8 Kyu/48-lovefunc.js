// Fredo Coding Challenge 2023 (Live)
// 48/366
// Title = Opposites Attract
// By = jbarget
// Level 8 Kyu
// Tipe soal = Fundamentals
// Source = https://www.codewars.com/kata/555086d53eac039a2a000083

// Cara 1 - If Else
function lovefunc1(flower1, flower2) {
  if (flower1 % 2 === 1 && flower2 % 2 === 0) {
    return true;
  } else if (flower1 % 2 === 0 && flower2 % 2 === 1) {
    return true;
  } else {
    return false;
  }
}

// Cara 2 - Cara singkat
function lovefunc2(flower1, flower2) {
  return flower1 % 2 !== flower2 % 2;
}

// Cara 3 - Cara singkat
function lovefunc3(flower1, flower2) {
  return (flower1 + flower2) % 2 === 1;
}

// Cara 4 - Arrow Function
const lovefunc4 = (flower1, flower2) => (flower1 + flower2) % 2 === 1;

const lovefunc = lovefunc4;

console.log(lovefunc(2, 1));
