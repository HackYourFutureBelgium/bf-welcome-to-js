'use strict';

// Assigned value to the variable a
let a = 'Ewin';
// let a = 'Tugba';
// let a = 'Jo';
// let a = 'Olesandra';

// Assigned value to the variable b and concatenate it with the another variable a
let b = 'Hello ' + a + ', your name is ';

// Check if the variable "a" has a value length greater or equal to 4
if (a.length > 4) {
  b = b + 'long.';
} else if (a.length === 4) {
  b = b + 'perfect.';
} else {
  b = b + 'short.';
}

console.log(b);
