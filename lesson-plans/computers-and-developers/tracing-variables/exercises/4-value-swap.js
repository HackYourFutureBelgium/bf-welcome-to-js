'use strict';

/* Value Swap

  Can you predict what the [trace] button will log to the console?
    use the [table] button to write down your predictions

  study tips: [variables], [open in] jsTutor, [ask me]

*/

// Declare variable `a`
// initialize value `y`
let a = 'y';

// Declare variable `b`
// initialize value `x`
let b = 'x';

// Declare variable `t`
// initialize value `''`
let t = '';

// Read the value stored into `a, b, t`
console.log(a, b, t);

// Read the value stored into `a`
// Assign value `y` to variable `t`
t = a;
// Read the value stored into `b`
// Assign value `x` to variable `a`
a = b;
// Read the value stored into `t`
// Assign value `y` to variable `b`
b = t;

// Read the value of `a, b, t`
console.log(a, b, t);

// what did you do in this program?
// Swap the value in between
// what are the final values of `a` and `b`?
// a = x and b = y
// how are they changed from the initial values
// Because of reassign value using third variable.

// is it possible to swap a and b without using t?
// Yes, it's possible to change vale without using `t` [a, b] = [b, a]
