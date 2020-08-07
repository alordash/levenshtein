const levenshtein = require('./lib/levenshtein');
let distance = levenshtein.distance("polynomial", "exponential");
console.log(distance);
console.log("exiting...");