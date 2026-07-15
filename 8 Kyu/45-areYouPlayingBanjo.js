// Fredo Coding Challenge 2023 (Live)
// 45/366
// Title = Are You Playing Banjo?
// By = MRodalgaard
// Level 8 Kyu
// Tipe soal = Strings & Fundamentals
// Source = https://www.codewars.com/kata/53af2b8861023f1d88000832

// Cara 1 - Menggunakan if else
function areYouPlayingBanjo1(name) {
  if (name.charAt(0) === "R" || name.charAt(0) === "r") {
    return name + " plays banjo";
  } else {
    return name + " does not play banjo";
  }
}

// Cara 2 - Menggunakan if else & toLowerCase
function areYouPlayingBanjo2(name) {
  if (name.charAt(0).toLowerCase() === "r") {
    return name + " plays banjo";
  } else {
    return name + " does not play banjo";
  }
}

// Cara 3 - Ternary Operator & toLowerCase
function areYouPlayingBanjo3(name) {
  return name.charAt(0).toLowerCase() === "r"
    ? name + " plays banjo"
    : name + " does not play banjo";
}

// Cara 4 - Arrow Function Ternary Operator & toLowerCase
const areYouPlayingBanjo4 = (name) =>
  name.charAt(0).toLowerCase() === "r"
    ? name + " plays banjo"
    : name + " does not play banjo";

// Cara 4 - Arrow Function Ternary Operator & toLowerCase (Array Index)
const areYouPlayingBanjo5 = (name) =>
  name[0].toLowerCase() === "r"
    ? name + " plays banjo"
    : name + " does not play banjo";

const areYouPlayingBanjo = areYouPlayingBanjo5;

console.log(areYouPlayingBanjo("fredo"));
