// Fredo Coding Challenge 2023 (Live)
// 10/366
// Title = Jaden Casing Strings
// By = jacobb
// Level 7 Kyu
// Tipe soal = Strings & Fundamentals
// Source = https://www.codewars.com/kata/5390bac347d09b7da40006f6

//Cara 1 - Split, Map. toUpperCase, Substring, Join
Object.defineProperty(String.prototype, "toJadenCase", {
  value: function toJadenCase() {
    return this.split(" ")
      .map((kata) => kata[0].toUpperCase() + kata.substring(1))
      .join(" ");
  },
});

const str = "How can mirrors be real if our eyes aren't real";
console.log(str.toJadenCase());
