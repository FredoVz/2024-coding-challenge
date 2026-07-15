// Fredo Coding Challenge 2024
// 37/366
// Title = Get Planet Name By ID
// By = jhoffner
// Level 8 Kyu
// Tipe soal = Debugging
// Source = https://www.codewars.com/kata/515e188a311df01cba000003

// Cara 1 - Switch Case (Soal)
function getPlanetName1(id) {
  var name;
  switch (id) {
    case 1:
      return "Mercury";

    case 2:
      return "Venus";

    case 3:
      return "Earth";

    case 4:
      return "Mars";

    case 5:
      return "Jupiter";

    case 6:
      return "Saturn";

    case 7:
      return "Uranus";

    default:
      return "Neptune";
  }

  return name;
}

// Cara 2 - Switch Case
function getPlanetName2(id) {
  switch (id) {
    case 1:
      return "Mercury";
    case 2:
      return "Venus";
    case 3:
      return "Earth";
    case 4:
      return "Mars";
    case 5:
      return "Jupiter";
    case 6:
      return "Saturn";
    case 7:
      return "Uranus";
    default:
      return "Neptune";
  }
}

// Cara 3 - Arrow Function Object Key Value
const getPlanetName3 = (id) => {
  return {
    1: "Mercury",
    2: "Venus",
    3: "Earth",
    4: "Mars",
    5: "Jupiter",
    6: "Saturn",
    7: "Uranus",
    8: "Neptune",
  }[id];
};

const getPlanetName = getPlanetName3;

console.log(getPlanetName(2));
