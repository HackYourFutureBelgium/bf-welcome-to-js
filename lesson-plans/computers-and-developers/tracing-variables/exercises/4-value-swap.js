'use strict';

/* Value Swap

  Can you predict what the [trace] button will log to the console?
    use the [table] button to write down your predictions

  study tips: [variables], [open in] jsTutor, [ask me]

*/

let a = 'y'; // declare and initialization let a
let b = 'x'; // declare and initialization let b
let t = ''; // declare and initialization let t

console.log(a, b, t); // read a, b, t ('y', 'x', '')

t = a; //reassign let t
a = b; //reassign let a
b = t; //reassign let b

console.log(a, b, t); // read a, b, t ('b', 't', 'a')

// what did you do in this program?     swapped places a, b
// what are the final values of `a` and `b`?    value a is b, value b is t
// how are they changed from the initial values   value a changed from 'y' to 'x', value a changed from 'x' to 'y'

// is it possible to swap a and b without using t?  yes it's possible, but in this case is not possible
