const { distanceCalculation, distance, closest } = require("./lib/levenshtein");
let matrixTest = new distanceCalculation("best", "better");
console.log(matrixTest.getMatrix());
console.log(distance("best", "better"));
let value = closest("best", ["the good", "the bad", "the best"]);
console.log(value.closest_string);
console.log(value.distance);
console.log("exiting...");