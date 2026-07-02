// Fredo Coding Challenge 2024
// 26/366
// Title = Thinkful - Logic Drills: Traffic light
// By = Grae-Drake
// Level 8 Kyu
// Tipe soal = Fundamentals
// Source = https://www.codewars.com/kata/58649884a1659ed6cb000072

// Cara 1 - If Else
function updateLight1(current) {
  if (current === "green") {
    return "yellow";
  } else if (current === "yellow") {
    return "red";
  } else {
    return "green";
  }
}

// Cara 2 - Switch Case
function updateLight2(current) {
  switch (current) {
    case "green":
      return "yellow";
    case "yellow":
      return "red";
    case "red":
      return "green";
  }
}

// Cara 3 - Ternary Operator
function updateLight3(current) {
  return current === "green" ? "yellow" : current === "yellow" ? "red" : "green";
}

// Cara 4 - Object Key Value
const rules = {
  green: "yellow",
  yellow: "red",
  red: "green",
};
function updateLight4(current) {
  return rules[current];
}

// Cara 5 - Arrow Function Ternary Operator
const updateLight5 = (current) => (current === "green" ? "yellow" : current === "yellow" ? "red" : "green");

// Cara 6 - Arrow Function Object Key Value
const updateLight6 = (current) =>
  ({
    green: "yellow",
    yellow: "red",
    red: "green",
  })[current];

const updateLight = updateLight6;

console.log(updateLight("green"));
