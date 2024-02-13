'use strict';
// Define variable 'a' and initialize it to '*'
let a = '*';
// let a = '<>';
// let a = '|-|';
// let a = '';

// Define variable 'b' and initialize it to an empty string
let b = '';

// read the value of a and b
while (b.length < a.length * 3) {
  b = b + a;
}

// Log the value of 'b' to the console
console.log(b);
