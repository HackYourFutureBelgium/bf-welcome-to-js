'use strict';


/* Value Swap

  Can you predict what the [trace] button will log to the console?
    use the [table] button to write down your predictions

  study tips: [variables], [open in] jsTutor, [ask me]

*/

// Declare and initialize the variable 'a' with the value 'y'
let a = 'y';
// Declare and initialize the variable 'b' with the value 'x'
let b = 'x';
// Declare and initialize the variable 't' with the value ''
let t = '';
// Read the value of the variabls a,b and t
console.log(a, b, t);
// Reassign the variable 't' with the value of the variable 'a'
t = a;
// Reassign the variable 'a' with the value of the variable 'b'
a = b;
// Reassign the variable 'b' with the  new value of the variable 't'
b = t;
// Read the value of the variabls a,b and t
console.log(a, b, t);

// what did you do in this program? 
// This program swaps the values of variables 'a' and 'b' using a temporary variable 't'.
// what are the final values of `a` and `b`? a=x,b=y
// how are they changed from the initial values
// Initially, 'a' is assigned the value 'y' and 'b' is assigned the value 'x'. After swapping, 'a' becomes 'x' and 'b' becomes 'y'.
// is it possible to swap a and b without using t?
