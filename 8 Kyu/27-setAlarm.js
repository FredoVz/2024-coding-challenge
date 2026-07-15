// Fredo Coding Challenge 2024
// 27/366
// Title = L1: Set Alarm
// By = Swolebrain
// Level 8 Kyu
// Tipe soal = Fundamentals & Logic
// Source = https://www.codewars.com/kata/568dcc3c7f12767a62000038

// employed | vacation
// true     | true     => false
// true     | false    => true
// false    | true     => false
// false    | false    => false

// Cara 1 - If Else
function setAlarm1(employed, vacation) {
  if (employed) {
    if (vacation) {
      return false;
    } else {
      return true;
    }
  } else {
    if (vacation) {
      return false;
    } else {
      return false;
    }
  }
}

// Cara 2 - And Not
function setAlarm2(employed, vacation) {
  return employed && !vacation;
}

// Cara 3 - Arrow Function And Not
const setAlarm3 = (employed, vacation) => employed && !vacation;

// Cara 4 - Arrow Function Menggunakan >
const setAlarm4 = (employed, vacation) => employed > vacation; //true = 1, false = 0

const setAlarm = setAlarm4;

console.log(setAlarm(true, true));
