// Fredo Coding Challenge 2024
// 2/366
// Title = Reversed Sequence
// By = jamad
// Level 8 Kyu
// Source = https://www.codewars.com/kata/5a00e05cc374cb34d100000d

//Cara 1 - For Loop
const reverseSeq1 = (n) => {
  const result = [];
  for (let i = n; i >= 1; i--) {
    result.push(i);
  }

  return result;
};

//Cara 2 - Array Fill
const reverseSeq2 = (n) => {
  return Array(n)
    .fill()
    .map((el, i) => i + 1)
    .reverse();
};

//Cara 3 - Array Spread Operator (Pakai reverse)
const reverseSeq3 = (n) => [...Array(n)].map((el, i) => i + 1).reverse();

//Cara 4 - Array Spread Operator (Tanpa reverse)
const reverseSeq4 = (n) => [...Array(n)].map((el, i) => n - i);

reverseSeq = reverseSeq4;

console.log(reverseSeq(5));
