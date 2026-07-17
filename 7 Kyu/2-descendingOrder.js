// Fredo Coding Challenge 2023 (Live)
// 2/366
// Title = Descending Order
// By = TastyOs
// Level 7 Kyu
// Tipe soal = Fundamentals
// Source = https://www.codewars.com/kata/5467e4d82edf8bbf40000155

// Cara 1 - toString, Split, Sort, Join
function descendingOrder1(n) {
  const nArr = n.toString().split("");
  // [2,3,1]
  return Number(nArr.sort((a, b) => b - a).join(""));
}

const descendingOrder2 = (n) =>
  Number(
    n
      .toString()
      .split("")
      .sort((a, b) => b - a)
      .join(""),
  );

const descendingOrder = descendingOrder2;

console.log(descendingOrder(0));
console.log(descendingOrder(1), 1);
console.log(descendingOrder(111), 111);
console.log(descendingOrder(15), 51);
console.log(descendingOrder(1021), 2110);
console.log(descendingOrder(123456789), 987654321);
