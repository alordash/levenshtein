const { distanceCalculation, distance, closest } = require("./lib/levenshtein");
console.log(distance("best", "better"));
let value = closest("money", ["none", "some", "much"]);
console.log(value.closest_string);
console.log(value.distance);

let object = new distanceCalculation("best", "better");
console.log(object.getMatrix());
console.log(object.value);
object.strings = ["entity", "identity"];
console.log(object.getMatrix());
console.log(object.value);

console.log("exiting...");