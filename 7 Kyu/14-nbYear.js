// Fredo Coding Challenge 2023 (Live)
// 14/366
// Title = Growth of a Population
// By = g964
// Level 7 Kyu
// Tipe soal = Fundamentals
// Source = https://www.codewars.com/kata/563b662a59afc2b5120000c6

// Cara 1 - While, Math Floor
function nbYear1(p0, percent, aug, p) {
  let tahun = 0;
  let jumlahPenduduk = p0;
  while (jumlahPenduduk <= p) {
    jumlahPenduduk = Math.floor(
      jumlahPenduduk + (jumlahPenduduk * (percent / 100) + aug),
    );
    tahun++;
  }

  return tahun;
}

// Cara 2 = While, Math Floor
function nbYear2(p0, percent, aug, p) {
  let tahun = 0;
  while (p0 < p) {
    p0 = Math.floor(p0 + (p0 * percent) / 100 + aug);
    tahun += 1;
  }
  return tahun;
}

// Cara 3 - Arrow Function - Recursive, Math Floor
const nbYear3 = (p0, percent, aug, p, res = 0) =>
  p0 >= p
    ? res
    : nbYear3(
        Math.floor(p0 + (p0 * percent) / 100 + aug),
        percent,
        aug,
        p,
        res + 1,
      );

// Cara 4 - For Loop, Math Floor
function nbYear4(p0, percent, aug, p) {
  for (var i = 0; p0 < p; i++) {
    p0 = Math.floor(p0 * (1 + percent / 100) + aug);
  }

  return i;
}

const nbYear = nbYear4;

console.log(nbYear(1500, 5, 100, 5000));
console.log(nbYear(1500000, 2.5, 10000, 2000000));
console.log(nbYear(1500000, 0.25, 1000, 2000000));
