// Fredo Coding Challenge 2024
// 18/366
// Title = Grasshopper - Personalized Message
// By = danleavitt0
// Level 8 Kyu
// Tipe soal = Fundamentals & Strings
// Source = https://www.codewars.com/kata/5772da22b89313a4d50012f7

// Cara 1 - If
function greet1(name, owner) {
  if (name === owner) return "Hello boss";
  if (name !== owner) return "Hello guest";
}

// Cara 2 - If Else
function greet2(name, owner) {
  if (name === owner) {
    return "Hello boss";
  } else {
    return "Hello guest";
  }
}

// Cara 3 - Ternary Operator
function greet3(name, owner) {
  return name === owner ? "Hello boss" : "Hello guest";
}

// Cara 4 - Arrow Function Ternary Operator
const greet4 = (name, owner) => (name === owner ? "Hello boss" : "Hello guest");

const greet = greet4;

console.log(greet("Daniel", "Daniel"));
