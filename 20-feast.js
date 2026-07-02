// Fredo Coding Challenge 2024
// 20/366
// Title = The Feast of Many Beasts
// By = MollyJeanB-pdx
// Level 8 Kyu
// Tipe soal = Strings & Fundamentals
// Source = https://www.codewars.com/kata/5aa736a455f906981800360d

// Cara 1 - Index Array
function feast1(beast, dish) {
  return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1];
}

// Cara 2 - CharAt / at
function feast2(beast, dish) {
  return beast.at(0) === dish.at(0) && beast.at(-1) === dish.at(-1);
}

// Cara 3 - Arrow Function at
const feast3 = (beast, dish) => beast.at(0) === dish.at(0) && beast.at(-1) === dish.at(-1);

// Cara 4 - Arrow Function Slice
const feast4 = (beast, dish) => beast.slice(0, 1) === dish.slice(0, 1) && beast.slice(-1) === dish.slice(-1);

const feast = feast4;

console.log(feast("great blue heron", "garlic naan"));
