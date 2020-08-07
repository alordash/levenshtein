# @alordash/levenshtein

```
$ npm i @alordash/levenshtein
```  

# Levenshtein algorithm

My realization of [Levenshtein distance](https://en.wikipedia.org/wiki/Levenshtein_distance) algorithm.

# Usage


```javascript
const { distance, closest } = require('@alordash/levenshtein')

// Print Levenshtein distance between "best" and "better"
console.log(distance("best", "better"));
//=> 3

// Select the most similar string to "money" from string list.
let value = closest("money", ["none", "some", "much"]);

// Print closest string
console.log(value.closest_string);
//=> "none"

// Print Levenshtein distance to closest string
console.log(value.distance);
//=> 2
```

# Features

You can also create calculation object using **distanceCalculation** class:  
```javascript
const { distanceCalculation } = require("@alordash/levenshtein");

// Calculate Levenshtein distance between "entity" and "identity"
let object = new distanceCalculation("entity", "identity");

// Print Levenshtein distance between "entity" and "identity"
console.log(object.value);
//=> 2

// Change strings in object to "best" and "better" and calculate Levenshtein distance between them
object.strings = ["best", "better"];

// Print distance between "best" and "better"
console.log(object.value);
//=> 3

// Print calculation matrix
console.log(object.getMatrix());
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
