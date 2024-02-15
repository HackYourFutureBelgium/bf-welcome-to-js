'use strict';

/* Value Swap

  Can you predict what the [trace] button will log to the console?
    use the [table] button to write down your predictions

  study tips: [variables], [open in] jsTutor, [ask me]

*/
// declare a variable a and initialize it to the value 'y'
// declare a variable b and initialize it to the value 'x'
// declare a variable t and initialize it to the value ''

let a = 'y';
let b = 'x';
let t = '';

// read the variables a, b, t
console.log(a, b, t);

// assign the variable t to 'y'
// assign the variable a to 'x'
// assign the variable b to 'y'
t = a;
a = b;
b = t;
// alternate way to swap without using third variable t
// [a, b] = [b, a];

// read the variables a, b, t
console.log(a, b, t);

// what did you do in this program?
// assigning of values and swapped

// what are the final values of `a` and `b`?
// value of 'a' is x and 'b' is 'y'

// how are they changed from the initial values
// value of a is stored in other variable t then b's value is assigned to a for swapping
// and after this we reassigned the a's initial value stored in variable t to b.

// is it possible to swap a and b without using t?
// yes
