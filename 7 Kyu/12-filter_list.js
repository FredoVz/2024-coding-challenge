// Fredo Coding Challenge 2023 (Live)
// 12/366
// Title = List Filtering
// By = cmgerber
// Level 7 Kyu
// Tipe soal = Lists, Filtering, Data Structures, and Fundamentals
// Source = https://www.codewars.com/kata/53dbd5315a3c69eed20002dd

// Cara 1 - Filter, IsInteger
function filter_list1(l) {
  return l.filter((n) => Number.isInteger(n));
}

// Cara 2 - Arrow Function (Filter, IsInteger)
const filter_list2 = (l) => l.filter((n) => Number.isInteger(n));

//Cara 3 - Arrow Function (Filter, Typeof)
const filter_list3 = (l) => l.filter((n) => typeof n === "number");

const filter_list = filter_list3;

console.log(filter_list([1, 2, "a", "b"]));
console.log(filter_list([1, "a", "b", 0, 15]));
console.log(filter_list([1, 2, "aasf", "1", "123", 123]));
