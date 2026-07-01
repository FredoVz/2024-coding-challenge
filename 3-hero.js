// Fredo Coding Challenge 2024
// 3/366
// Title = Is he gonna survive?
// By = MMortaga
// Level 8 Kyu
// Tipe soal = Fundamentals
// Source = https://www.codewars.com/kata/59ca8246d751df55cc00014c

// Cara 1 - If Else
function hero1(bullets, dragons) {
  if (bullets / 2 >= dragons) {
    return true;
  } else {
    return false;
  }
}

// Cara 2 - Ternary Operator
function hero2(bullets, dragons) {
  return bullets / 2 >= dragons;
}

// Cara 3 - Function Expression
const hero3 = (bullets, dragons) => bullets / 2 >= dragons;

// Cara 4 - Function Expression
const hero4 = (bullets, dragons) => bullets >= dragons * 2;

const hero = hero4;

console.log(hero(10, 5));
