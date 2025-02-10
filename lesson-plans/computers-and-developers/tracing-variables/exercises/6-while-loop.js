'use strict';

let a = '*'; // declare and initialization let a = '*'
// let a = '<>';  // declare and initialization let a = '<>'
// let a = '|-|';  // declare and initialization let a = '|-|'
// let a = '';  // declare and initialization let a = ''

let b = ''; // declare and initialization let b = ''
while (b.length < a.length * 3) {
  // read value a and b
  b = b + a; // reassign variable b
}

console.log(b); // read variable b
