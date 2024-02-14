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

// what did you do in this program?
//assign the value of `a` to `t`, so t becomes 'y'.

// what are the final values of `a` and `b`?
//assign the value of b to a, so a becomes 'x'.

// how are they changed from the initial values
//Finally, assign the value of t (which is now 'y') to b, so b becomes 'y'.

// is it possible to swap a and b without using t?
//No, it is not possible to swap the values of a and b without using a temporary variable.
