// Fredo Coding Challenge 2023 (Live)
// 64/366
// Title = String repeat
// By = wichu
// Level 8 Kyu
// Tipe soal = Fundamentals & Strings
// Source = https://www.codewars.com/kata/57a0e5c372292dd76d000d7e

// Cara 1 - For Loop
function repeatStr1(n, s) {
  // Cetak s sebanyak n kali
  str = "";
  for (i = 0; i < n; i++) {
    str += s;
  }
  return str;
}

// Cara 2 - Repeat
function repeatStr2(n, s) {
  // Cetak s sebanyak n kali
  return s.repeat(n);
}

// Cara 3 - Arrow Function (Repeat)
const repeatStr3 = (n, s) => s.repeat(n);

const repeatStr = repeatStr3;

console.log(repeatStr(3, "*"));
console.log(repeatStr(5, "#"));
console.log(repeatStr(2, "ha "));
