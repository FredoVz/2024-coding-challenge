// Fredo Coding Challenge 2023 (Live)
// 11/366
// Title = Complementary DNA
// By = JustyFY
// Level 7 Kyu
// Tipe soal = Strings & Fundamentals
// Source = https://www.codewars.com/kata/554e4a2f232cdd87d9000038

// Cara 1 - For Loop If
function dnaStrand1(dna) {
  let dnaBaru = "";
  for (let i = 0; i < dna.length; i++) {
    if (dna[i] === "A") {
      dnaBaru += "T";
    } else if (dna[i] === "T") {
      dnaBaru += "A";
    } else if (dna[i] === "G") {
      dnaBaru += "C";
    } else if (dna[i] === "C") {
      dnaBaru += "G";
    }
  }
  return dnaBaru;
}

// Cara 2- For Loop (Switch Case)
function dnaStrand2(dna) {
  let dnaBaru = "";
  for (let i = 0; i < dna.length; i++) {
    switch (dna[i]) {
      case "A":
        dnaBaru += "T";
        break;
      case "T":
        dnaBaru += "A";
        break;
      case "G":
        dnaBaru += "C";
        break;
      case "C":
        dnaBaru += "G";
        break;
      default:
        break;
    }
  }
  return dnaBaru;
}

// Cara 3 - For Loop (Ternary Operator)
function dnaStrand3(dna) {
  let dnaBaru = "";
  for (let i = 0; i < dna.length; i++) {
    dnaBaru += dna[i] === "A" ? "T" : dna[i] === "T" ? "A" : dna[i] === "G" ? "C" : "G";
  }
  return dnaBaru;
}

const dnaStrand = dnaStrand3;

console.log(dnaStrand("AAAA"), "TTTT");
console.log(dnaStrand("ATTGC"), "TAACG");
console.log(dnaStrand("GTAT"), "CATA");
