'use strict';

/* Value Swap

  Can you predict what the [trace] button will log to the console?
    use the [table] button to write down your predictions

  study tips: [variables], [open in] jsTutor, [ask me]

*/

let a = 'y';
let b = 'x';
let t = '';

console.log(a, b, t);

t = a;
a = b;
b = t;

console.log(a, b, t);

// 1. What did you do in this program?
// reassign to the new value;

// 2. What are the final values of `a` and `b`?
// a = "x" and b = "y";

// 3. How are they changed from the initial values
// reassign to the new value;

// 4. Is it possible to swap a and b without using t?
// no
