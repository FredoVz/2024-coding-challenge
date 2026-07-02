// Fredo Coding Challenge 2024
// 36/366
// Title = Keep up the hoop
// By = Tam Borine
// Level 8 Kyu
// Tipe soal = Fundamentals
// Source = https://www.codewars.com/kata/55cb632c1a5d7b3ad0000145

// Cara 1 - Declaration Function
function hoopCount1(n) {
  if (n >= 10) {
    return "Great, now move on to tricks";
  } else {
    return "Keep at it until you get it";
  }
}

// Cara 2 - Arrow Function
const hoopCount2 = (n) =>
  n >= 10 ? "Great, now move on to tricks" : "Keep at it until you get it";

const hoopCount = hoopCount2;

console.log(hoopCount(30));
