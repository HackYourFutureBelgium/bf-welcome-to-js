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
// the output will be 'y', 'x', ''

// this is the swap
t = a;
a = b;
b = t;

console.log(a, b, t);
// the output will be 'x', 'y', 'y'

// what did you do in this program? swap value of a and b, using the value of t
// what are the final values of `a` and `b`? a=x b=y
// how are they changed from the initial values. just swap the value without using the temporary variable

// is it possible to swap a and b without using t?yes it is.
