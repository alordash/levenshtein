# Levenshtein algorithm

My realization of levenshtein algorithm.

# Usage


```javascript
const { distance, closest } = require('@alordash/levenshtein')

// Print levenshtein distance between "best" and "better"
console.log(distance("best", "better"));
//=> 3

// Select the most similar string to "best" from string array.
let value = closest("best", ["the good", "the bad", "the best"]);

// Print closest string
console.log(value.closest_string);
//=> "the best"

// Print levenshtein distance to closest string
console.log(value.distance);
//=> 4
```

# Features

You can also get calculation matrix using **distanceCalculation** class:  
```javascript
const { distanceCalculation } = require("@alordash/levenshtein");

// Calculate levenshtein distance between "best" and "better"
let matrixTest = new distanceCalculation("best", "better");

// Print calculation matrix
console.log(matrixTest.getMatrix());

//=>
//     |   | b | e | t | t | e | r
//—————+–––+–––+–––+–––+–––+–––+–––
//     | 0 | 1 | 2 | 3 | 4 | 5 | 6
//—————+–––+–––+–––+–––+–––+–––+–––
//   b | 1 | 0 | 1 | 2 | 3 | 4 | 5
//—————+–––+–––+–––+–––+–––+–––+–––
//   e | 2 | 1 | 0 | 1 | 2 | 3 | 4
//—————+–––+–––+–––+–––+–––+–––+–––
//   s | 3 | 2 | 1 | 1 | 2 | 3 | 4
//—————+–––+–––+–––+–––+–––+–––+–––
//   t | 4 | 3 | 2 | 1 | 1 | 2 | 3
//—————+–––+–––+–––+–––+–––+–––+–––
```
