// Fredo Coding Challenge 2024
// 6/366
// Title = DNA to RNA Conversion
// By = torret
// Level 8 Kyu
// Tipe soal = Fundamentals & Strings
// Source = https://www.codewars.com/kata/5556282156230d0e5e000089

// Cara 1 - For Loop If Else
function DNAtoRNA1(dna) {
  let rna = "";
  for (let i = 0; i < dna.length; i++) {
    if (dna[i] === "T") {
      rna += "U";
    } else {
      rna += dna[i];
    }
  }
  return rna;
}

// Cara 2 - For Loop Ternary Operator
function DNAtoRNA2(dna) {
  let rna = "";
  for (let i = 0; i < dna.length; i++) {
    rna += dna[i] === "T" ? "U" : dna[i];
  }
  return rna;
}

// Cara 3 - Split, Map, and Join
function DNAtoRNA3(dna) {
  return dna
    .split("")
    .map((el) => (el === "T" ? "U" : el))
    .join("");
}

// Cara 4 - Arrow Function
const DNAtoRNA4 = (dna) =>
  dna
    .split("")
    .map((el) => (el === "T" ? "U" : el))
    .join("");

// Cara 5 - Replace and Regex
const DNAtoRNA5 = (dna) => dna.replace(/T/g, "U");

// Cara 6 - ReplaceAll
const DNAtoRNA6 = (dna) => dna.replaceAll("T", "U");

// Cara 7 - Split & Join
const DNAtoRNA7 = (dna) => dna.split("T").join("U");

const DNAtoRNA = DNAtoRNA7;

console.log(DNAtoRNA("GCAT"));

// Note : Harus paham regular expression
