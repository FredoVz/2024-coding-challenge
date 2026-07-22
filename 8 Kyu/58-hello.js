// Fredo Coding Challenge 2023 (Live)
// 58/366
// Title = Hello, Name or World!
// By = tadan
// Level 8 Kyu
// Tipe soal = Fundamentals
// Source = https://www.codewars.com/kata/57e3f79c9cb119374600046b

// Cara 1
function hello(name) {
  if (!name) {
    return "Hello, World!";
  }
  return (
    `Hello, ` +
    name
      .trim()
      .toLowerCase()
      .replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase())) +
    `!`
  );
}

console.log(hello("wIlFrEdO")); // "Hello, John!"
