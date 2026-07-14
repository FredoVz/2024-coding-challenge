// Fredo Coding Challenge 2023 (Live)
// 47/366
// Title = Fake Binary
// By = PG1
// Level 8 Kyu
// Tipe soal = Fundamentals, Strings, and Arrays
// Source = https://www.codewars.com/kata/57eae65a4321032ce000002d

// Cara 1 - For Loop
function fakeBin1(x) {
  let result = "";
  // ubah string jadi array
  const xSplit = x.split("");
  // looping dan telusuri setiap elemen nya
  for (let i = 0; i < xSplit.length; i++) {
    // cek masing-masing elemennya
    if (xSplit[i] < 5) {
      // isi result sesuai kondisi
      result += "0";
    } else {
      result += "1";
    }
  }

  // kembalikan menjadi string
  return result;
}

// Cara 2 - For Loop (Tidak perlu array penampung)
function fakeBin2(x) {
  // ubah string jadi array
  const xSplit = x.split("");
  // looping dan telusuri setiap elemen nya
  for (let i = 0; i < xSplit.length; i++) {
    // cek masing-masing elemennya
    if (xSplit[i] < 5) {
      // isi result sesuai kondisi
      xSplit[i] = "0";
    } else {
      xSplit[i] = "1";
    }
  }

  // kembalikan menjadi string
  return xSplit.join("");
}

// Cara 3 - Higher Order Function (If Else)
function fakeBin3(x) {
  return x
    .split("")
    .map((el) => {
      if (el < 5) {
        return "0";
      } else {
        return "1";
      }
    })
    .join("");
}

// Cara 4 - Higher Order Function (Ternary Operator)
function fakeBin4(x) {
  return x
    .split("")
    .map((el) => (el < 5 ? "0" : "1"))
    .join("");
}

// Cara 5 - Arrow Function
const fakeBin5 = (x) =>
  x
    .split("")
    .map((el) => (el < 5 ? "0" : "1"))
    .join("");

// Cara 6 - Arrow Function & Regex
const fakeBin6 = (x) => x.replace(/[0-4]/g, "0").replace(/[5-9]/g, "1");

// Cara 7 - Arrow Function & Regex (1x Replace) & Ternary Operator
const fakeBin7 = (x) => x.replace(/\d/g, (d) => (d < 5 ? "0" : "1"));

const fakeBin = fakeBin7;

console.log(fakeBin("45385593107843568"));
