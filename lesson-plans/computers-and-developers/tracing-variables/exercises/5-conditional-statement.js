'use strict';

// Declare variable `a`
// Initialize vale `Ewin`
let a = 'Ewin';
// let a = 'Tugba';
// let a = 'Jo';
//let a = 'Olesandra';

// Read the value `a`
// Concatenate value `Hello Ewin your name is`
let b = 'Hello ' + a + ', your name is ';

// Condition statement
// Read the character lenght of `a`
// Write a if statement No longer length of `a`
// Read a statement vale `Hello --- your name is long`
// else if `Hello --- your name is Perfect`
// else `Hello --- your name is short`
if (a.length > 4) {
  b = b + 'long.';
} else if (a.length === 4) {
  b = b + 'perfect.';
} else {
  b = b + 'short.';
}

// Read the value stored in `b`
console.log(b);
