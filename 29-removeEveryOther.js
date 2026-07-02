// Fredo Coding Challenge 2024
// 29/366
// Title = Removing Elements
// By = MorgzC41
// Level 8 Kyu
// Tipe soal = Lists, Arrays, and Fundamentals
// Source = https://www.codewars.com/kata/5769b3802ae6f8e4890009d2

// Cara 1 - For Loop
function removeEveryOther1(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i += 2) {
    newArr.push(arr[i]);
  }
  return newArr;
}

// Cara 2 - Higher Order Function
function removeEveryOther2(arr) {
  return arr.filter((_, i) => i % 2 === 0);
}

// Cara 3 - One Liner Arrow Function
const removeEveryOther3 = (arr) => arr.filter((_, i) => i % 2 === 0);

removeEveryOther = removeEveryOther3;

console.log(removeEveryOther(["Hello", "Goodbye", "Hello Again"]));
