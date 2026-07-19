// Fredo Coding Challenge 2023 (Live)
// 15/366
// Title = Credit Card Mask
// By = samranjbari
// Level 7 Kyu
// Tipe soal = Strings & Algorithms
// Source = https://www.codewars.com/kata/5412509bd436bd33920011bc

// Cara 1
function maskify1(cc) {
  const ccArr = cc.split("");
  for (let i = 0; i < ccArr.length - 4; i++) {
    ccArr[i] = "#";
  }
  return ccArr.join("");
}

// Cara 2 - Repeat, Substring, Math Max
function maskify2(cc) {
  return (
    "#".repeat(Math.max(0, cc.length - 4)) +
    cc.substring(Math.max(0, cc.length - 4), cc.length)
  );
}

// Cara 3 - Replace and Regex
function maskify3(cc) {
  return cc.replace(/[0-9]/g, (chr, idx, arr) =>
    idx < arr.length - 4 ? "#" : chr,
  );
}

// Cara 4 - Arrow Function, Split, Reverse, Map, Reverse, Join
const maskify4 = (cc) =>
  cc
    .split("")
    .reverse()
    .map((v, i, s) => (i > 3 ? "#" : v))
    .reverse()
    .join("");

// Cara 5 - Regex and Replace
function maskify5(cc) {
  return cc.replace(/\w/gi, (m, i) => (cc.length - i > 4 ? "#" : m));
}

const maskify = maskify5;

console.log(maskify("4556364607935616"));
console.log(maskify("1"));
console.log(maskify("11111"));
