// Fredo Coding Challenge 2024
// 40/366
// Title = Switch it Up!
// By = iamchingel
// Level 8 Kyu
// Tipe soal = Fundamentals
// Source = https://www.codewars.com/kata/5808dcb8f0ed42ae34000031

// Cara 1 - Switch Case
function switchItUp1(number) {
  switch (number) {
    case 0:
      return "Zero";
    case 1:
      return "One";
    case 2:
      return "Two";
    case 3:
      return "Three";
    case 4:
      return "Four";
    case 5:
      return "Five";
    case 6:
      return "Six";
    case 7:
      return "Seven";
    case 8:
      return "Eight";
    case 9:
      return "Nine";
  }
}

// Cara 2 - Arrow Function Object Key Value (Return)
const switchItUp2 = (number) => {
  return {
    0: "Zero",
    1: "One",
    2: "Two",
    3: "Three",
    4: "Four",
    5: "Five",
    6: "Six",
    7: "Seven",
    8: "Eight",
    9: "Nine",
  }[number];
};

// Cara 3 - Arrow Function Object Key Value (Tanpa Return)
const switchItUp3 = (number) => ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"][number];

const switchItUp = switchItUp3;

console.log(switchItUp(3));
