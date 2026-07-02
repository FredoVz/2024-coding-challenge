// Fredo Coding Challenge 2024
// 14/366
// Title = Grasshopper - Grade book
// By = danleavitt0
// Level 8 Kyu
// Tipe soal = Fundamentals
// Source = https://www.codewars.com/kata/55cbd4ba903825f7970000f5

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'

// Cara 1 - Normal If Else
function getGrade1(s1, s2, s3) {
  const score = (s1 + s2 + s3) / 3;
  if (score < 60) return "F";
  if (score < 70) return "D";
  if (score < 80) return "C";
  if (score < 90) return "B";
  return "A";
}

//Cara 2 - Reduce
function getGrade2(...s) {
  const score = s.reduce((acc, curr) => acc + curr) / s.length;
  if (score < 60) return "F";
  if (score < 70) return "D";
  if (score < 80) return "C";
  if (score < 90) return "B";
  return "A";
}

const getGrade = getGrade2;

console.log(getGrade(65, 70, 59));
