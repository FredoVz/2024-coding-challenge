// Fredo Coding Challenge 2023 (Live)
// 3/366
// Title = Mumbling
// By = g964
// Level 7 Kyu
// Tipe soal = Fundamentals, Strings, and Puzzles
// Source = https://www.codewars.com/kata/5667e8f4e3f572a8f2000039

// Cara 1 - Split, For Loop, toUpperCase, toLowerCase, Push, Join
function accum1(s) {
  //Pecah jadi array
  const strArr = s.split("");
  const resultArr = [];

  // Looping sejumlah array
  for (let i = 0; i < strArr.length; ++i) {
    let temp = "";
    for (let j = 0; j <= i; ++j) {
      // Ubah huruf besar dan kecil
      if (j === 0) {
        temp += strArr[i].toUpperCase();
      } else {
        temp += strArr[i].toLowerCase();
      }
    }
    resultArr.push(temp);
  }

  // Gabungkan dengan tanda '-'
  return resultArr.join("-");
}

// Cara 2 - Arrow Function (toLowerCase, Split, Map (toUpperCase, Repeat), Join)
const accum2 = (s) =>
  s
    .toLowerCase()
    .split("")
    .map((huruf, i) => huruf.toUpperCase() + huruf.repeat(i))
    .join("-");

const accum = accum2;

console.log(accum("abCd"));
console.log(accum("ZpglnRxqenU"));
console.log(accum("NyffsGeyylB"));
