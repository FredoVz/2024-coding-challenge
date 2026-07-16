// Fredo Coding Challenge 2023 (Live)
// 53/366
// Title = Keep Hydrated!
// By = paulrichard
// Level 8 Kyu
// Tipe soal = Algorithms, Mathematics, & Fundamentals
// Source = https://www.codewars.com/kata/582cb0224e56e068d800003c

// Cara 1 - Math Floor
function litres1(time) {
  return Math.floor(time / 2);
}

// Cara 2 - Arrow Function (Math Floor)
const litres2 = (time) => Math.floor(time / 2);

// Cara 3 - Arrow Function (ParseInt)
const litres3 = (time) => parseInt(time / 2);

const litres = litres3;

console.log(litres(0), 0, "litres(0) should return 0");
console.log(litres(1), 0, "litres(1) should return 0");
console.log(litres(2), 1, "litres(2) should return 1");
console.log(litres(3), 1, "litres(3) should return 1");
console.log(litres(4), 2, "litres(4) should return 2");
console.log(litres(1.4), 0, "litres(1.4) should return 0");
console.log(litres(12.3), 6, "litres(12.3) should return 6");
console.log(litres(0.82), 0, "litres(0.82) should return 0");
console.log(litres(11.8), 5, "litres(11.8) should return 5");
console.log(litres(1787), 893, "litres(1787) should return 893");
