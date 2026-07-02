// Fredo Coding Challenge 2024
// 30/366
// Title = Will there be enough space?
// By = user2514386
// Level 8 Kyu
// Tipe soal = Fundamentals
// Source = https://www.codewars.com/kata/5875b200d520904a04000003

// Cara 1 - If Else
function enough1(cap, on, wait) {
  if (cap > on + wait) {
    return 0;
  } else {
    return wait - (cap - on);
  }
}

// Cara 2 - Ternary Operator
function enough2(cap, on, wait) {
  return cap > on + wait ? 0 : wait - (cap - on);
}

// Cara 3 - Arrow Function Ternary Operator
const enough3 = (cap, on, wait) => (cap > on + wait ? 0 : wait - (cap - on));

// Cara 4 - Math Max
function enough4(cap, on, wait) {
  return Math.max(wait + on - cap, 0);
}

const enough = enough4;

console.log(enough(75, 70, 46));
