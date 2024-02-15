'use strict';

// Declare variable `a`
// Initialize value `*`
let a = '*';
// let a = '<>';
// let a = '|-|';
// let a = '';

// Declare variable `b`
// Initialize value `Empty string`
let b = '';
// Using while loop
// Checked the length of `b`
// if its smaller the `a` length multiply 3 assign value to b = `*`
while (b.length < a.length * 3) {
  b = b + a;
}

// Read the value stored in `b`
console.log(b);
