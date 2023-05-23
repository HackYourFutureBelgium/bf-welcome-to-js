/* eslint-disable no-undef */

'use strict';

// Variable 'a' declaration and initialization
let a = '*';
// let a = '<>';
// let a = '|-|';
// let a = '';

// Variable 'b' declaration and initialization
let b = '';

// Loop to concatenate 'a' to 'b' until 'b' reaches three times the length of 'a'
while (b.length < a.length * 3) {
  // Reassigning 'b'
  b = b + a;
}

// Printing the value of variable 'b'
console.log(b);
