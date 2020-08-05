const { levenshtein } = require('./src/levenshtein');
let distance = new levenshtein("polynomial", "exponential");
distance.showMatrix(4);
console.log(distance.value);
console.log("exiting...");