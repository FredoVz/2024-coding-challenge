// Fredo Coding Challenge 2024
// 11/366
// Title = Rock Paper Scissors!
// By = brunolm
// Level 8 Kyu
// Tipe soal = Fundamentals
// Source = https://www.codewars.com/kata/5672a98bdbdd995fad00000f

// Cara 1 - Else If (And)
const rps1 = (p1, p2) => {
  if (p1 === p2) return "Draw!";
  if (p1 === "rock" && p2 === "scissors") return "Player 1 won!";
  else if (p1 === "scissors" && p2 === "paper") return "Player 1 won!";
  else if (p1 === "paper" && p2 === "rock") return "Player 1 won!";
  else {
    return "Player 2 won!";
  }
};

// Cara 2 - Else If (And & Or)
const rps2 = (p1, p2) => {
  if (p1 === p2) return "Draw!";
  if (
    (p1 === "rock" && p2 === "scissors") ||
    (p1 === "scissors" && p2 === "paper") ||
    (p1 === "paper" && p2 === "rock")
  )
    return "Player 1 won!";
  else {
    return "Player 2 won!";
  }
};

// Cara 3 - If & Ternary Operator
const rps3 = (p1, p2) => {
  if (p1 === p2) return "Draw!";
  return (p1 === "rock" && p2 === "scissors") ||
    (p1 === "scissors" && p2 === "paper") ||
    (p1 === "paper" && p2 === "rock")
    ? "Player 1 won!"
    : "Player 2 won!";
};

// Cara 4 - Full Ternary Operator (Ternary didalam Ternary)
const rps4 = (p1, p2) => {
  return p1 === p2
    ? "Draw"
    : (p1 === "rock" && p2 === "scissors") ||
        (p1 === "scissors" && p2 === "paper") ||
        (p1 === "paper" && p2 === "rock")
      ? "Player 1 won!"
      : "Player 2 won!";
};

//Cara 5 - One Line Ternary Operator (Tanpa return)
const rps5 = (p1, p2) =>
  p1 === p2
    ? "Draw"
    : (p1 === "rock" && p2 === "scissors") ||
        (p1 === "scissors" && p2 === "paper") ||
        (p1 === "paper" && p2 === "rock")
      ? "Player 1 won!"
      : "Player 2 won!";

// Cara 6 - Object key value If Else Ternary Operator
const rps6 = (p1, p2) => {
  const rules = {
    rock: "scissors",
    scissors: "paper",
    paper: "rock",
  };

  if (p1 === p2) return "Draw!";
  else {
    return `Player ${rules[p1] === p2 ? "1" : "2"} won!`;
  }
};

// Cara 7 - Object key value Full Ternary Operator
const rps7 = (p1, p2) => {
  const rules = {
    rock: "scissors",
    scissors: "paper",
    paper: "rock",
  };

  return p1 === p2 ? "Draw!" : `Player ${rules[p1] === p2 ? "1" : "2"} won!`;
};

const rps = rps7;

console.log(rps("paper", "rock"));
