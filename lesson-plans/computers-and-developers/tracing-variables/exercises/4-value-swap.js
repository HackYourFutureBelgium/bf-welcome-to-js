'use strict';

/* Value Swap

  Can you predict what the [trace] button will log to the console?
    use the [table] button to write down your predictions

  study tips: [variables], [open in] jsTutor, [ask me]

*/

// declare a variable a and initialize it to the value 'y'
let a = 'y';

// declare a variable b and initialize it to the value 'x'
let b = 'x';

// declare a variable t and initialize it to the value ''
let t = '';

//read the variable a with value 'y'
//read the variable b with value 'x'
//read the variable t with value ''
console.log(a, b, t);

//read the variable a with value 'y'
// assign the variable t to the value 'y'
t = a;

//read the variable b with value 'x'
// assign the variable a to the value 'x'
a = b;

// read the variable t with the value 'y'
// assign the variable b to the value 'y'
b = t;

//read the variable a with value 'x'
//read the variable b with value 'y'
//read the variable t with value 'y'
console.log(a, b, t);

// what did you do in this program?
// what are the final values of `a` and `b`?
// how are they changed from the initial values

// is it possible to swap a and b without using t?
