'use strict';

/* Numbers

TODO: create a few variables(numbers):
- you need to add comments to show where the variable been
declared, initialized, read , reassigned,...
*/

// declared
let sum;

// declared the variable a & initialized to value 20
let a = 20;

// declared & initialized
let b = 30;

// read the variable a,
// read the variable b, initialized
sum = a + b;

// read a, read b, read sum
console.log(`sum: ${a} + ${b}  = ${sum}`);

// read sum, read b, reassigned a
a = sum + b;

// read sum, read b, read a
console.log(`new a : ${sum} + ${b} = ${a}`);
