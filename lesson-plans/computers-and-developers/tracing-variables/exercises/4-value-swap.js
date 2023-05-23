'use strict';

/* Value Swap

  Can you predict what the [trace] button will log to the console?
    use the [table] button to write down your predictions

  study tips: [variables], [open in] jsTutor, [ask me]

*/

// DECLARE a variable named `a`
// INITIALIZE the value to "y"
let a = 'y';

// DECLARE a variable named `b`
// INITIALIZE the value to "x"
let b = 'x';

// DECLARE a variable named `t`
// INITIALIZE the value to " '' "
let t = '';

// READ the value stored in `a`, 'b', 't'
console.log(a, b, t);

// The value of a is assigned to t, so t now holds the value 'y'.
t = a;

// The value of b is assigned to a, so a now holds the value 'x'.
a = b;

// The value of t (which is 'y') is assigned to b, so b now holds the value 'y'.
b = t;

// eslint-disable-next-line max-len
// console.log(a, b, t); // The final values of a, b, and t are outputted to the console. In this case, it will display 'x', 'y', and 'y' respectively.
// The variables a and b are changed from their initial values. Initially, a is 'y' and b is 'x'.
// After swapping, a becomes 'x' and b becomes 'y'.

// let a = 'y';
// let b = 'x';

[a, b] = [b, a];

console.log(a, b); // Output: 'x', 'y'

// what did you do in this program?
// what are the final values of `a` and `b`?
// how are they changed from the initial values

// is it possible to swap a and b without using t?
