'use strict';
console.log('-- begin --');

/* declare and assign variables as described in the comments

  pay close attention to how each variable is used!
  - is a variable assigned a value when it is declared?
  - is a variable reassigned later in the script?

  your challenge is to decide whether to use let or to use const
  - use let if
    the variable is declared without an assignment
    or the variable is ever reassigned later in the script
  - use const if
    the variable is declared with a value and never reassigned

*/


// declare a variable named x and assign it the value 'a'
const x = 'a';
console.log(x); // Output: a

// declare a variable named y and assign it the value 'b'
const y = 'b';
console.log(y); // Output: b

console.log(x); // Output: a

// declare a variable named z without assigning a value
let z;
console.log(z); // Output: undefined

console.log(y); // Output: b

// assign the value 'c' to the variable z
z = 'c';
console.log(z); // Output: c

// assign the value 'bd' to the variable y
y = 'bd';
console.log(y); // Output: bd

console.log(x); // Output: a

console.log('-- end --');





