// Fredo Coding Challenge 2023 (Live)
// 9/366
// Title = Exes and Ohs
// By = joh_pot
// Level 7 Kyu
// Tipe soal = Fundamentals
// Source = https://www.codewars.com/kata/55908aad6620c066bc00002a

// Cara 1 - For Loop & If
function XO1(str) {
  let jumlahX = 0;
  let jumlahO = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === "x") {
      jumlahX++;
    }
    if (str[i].toLowerCase() === "o") {
      jumlahO++;
    }
  }

  return jumlahX === jumlahO;
}

// Cara 2 - Match, RegExp, Occur
function XO2(str) {
  const occur = (v) => (str.match(new RegExp(v, "gi")) || []).length;

  return occur("x") === occur("o");
}

// Cara 3 - Arrow Function (Split, Filter, toLowerCase)
const XO3 = (str) => {
  const jumlahO = str.split("").filter((h) => h.toLowerCase() === "o").length;
  const jumlahX = str.split("").filter((h) => h.toLowerCase() === "x").length;

  return jumlahO === jumlahX;
};

// Cara 4 = Arrow Function One Liner
const XO4 = (str) =>
  str.split("").filter((h) => h.toLowerCase() === "x").length ===
  str.split("").filter((h) => h.toLowerCase() === "o").length;

const XO = XO4;

console.log(XO("xo"));
console.log(XO("xxOo"));
console.log(XO("xxxm"));
console.log(XO("Oo"));
console.log(XO("ooom"));
