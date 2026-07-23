// Fredo Coding Challenge 2023 (Live)
// 60/366
// Title = Grasshopper - Summation
// By = danleavitt0
// Level 8 Kyu
// Tipe soal = Fundamentals & Mathematics
// Source = https://www.codewars.com/kata/55d24f55d7dd296eb9000030

// Cara 1 - For Loop
var summation1 = function (num) {
  // Jumlahkan seluruh angka dari 1 sampai num
  let total = 0;
  for (i = 1; i <= num; i++) {
    total = total + i;
  }
  return total;
};

// Cara 2 - For Loop (total += i)
var summation2 = function (num) {
  // Jumlahkan seluruh angka dari 1 sampai num
  let total = 0;
  for (i = 1; i <= num; i++) {
    total += i;
  }
  return total;
};

// Cara 3 - Return
var summation3 = function (num) {
  // Jumlahkan seluruh angka dari 1 sampai num
  // KuKaBaTaKu (Kurung Kali Bagi Tambah Kurang)
  return (num * (num + 1)) / 2;
};

//Cara 3 - Arrow Function
const summation4 = (num) => (num * (num + 1)) / 2;

const summation = summation4;

console.log(summation(2));
console.log(summation(8));
