'use strict';
//The variable a is assigned the value '*'.
//Declare a variable 'a' and assign it the value '*'
let a = '*';
// let a = '<>';
// let a = '|-|';
// let a = '';
//The variable b is assigned the value ''.
//Declare a variable 'b' and assign it the value ''
let b = '';
//Continue the loop as long as the length of 'b' is less than three times the length of 'a'
// Concatenate the value of 'a' to 'b' and assign the result back to 'b'
while (b.length < a.length * 3) {
  b = b + a;
}
// read  the varaiable b which is ***
console.log(b);
