'use strict';

/* Value Swap

  Can you predict what the [trace] button will log to the console?
    use the [table] button to write down your predictions

  study tips: [variables], [open in] jsTutor, [ask me]

*/
// Declare and initialize variables
let a = 'y';
let b = 'x';
let t = '';

// Log initial values of a, b, and t
console.log(a, b, t);

// Swap the values of a and b using a temporary variable t
t = a;
a = b;
b = t;

// Log updated values of a, b, and t after the swap
console.log(a, b, t);

// what did you do in this program?
// Initially, a is 'y' and b is 'x'.

// what are the final values of `a` and `b`?
// After the swap, a becomes 'x' and b becomes 'y'.

// how are they changed from the initial values
// The temporary variable t is used to hold the value of a during the swap operation.

// is it possible to swap a and b without using t?
// Yes, it's possible to swap a and b without using a temporary variable
// but it involves using arithmetic or bitwise operations, which may be less readable and more complex.
