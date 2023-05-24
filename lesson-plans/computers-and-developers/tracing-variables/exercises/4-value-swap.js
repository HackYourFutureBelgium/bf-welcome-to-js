'use strict';

/* Value Swap

  Can you predict what the [trace] button will log to the console?
    use the [table] button to write down your predictions

  study tips: [variables], [open in] jsTutor, [ask me]

*/
//declaring a variable  let a and intilize to the value 'y'
let a = 'y';

//declaring a variable  let b and intilize to the value 'x'
let b = 'x';

//declaring a variable  let t and intilize to the value ''
let t = '';

//read variables a,b,t which is y,x
console.log(a, b, t);

//read variable a
//assign to variable t value of a which is 'y'
t = a;

//read variable a
//assign to variable a value of a which is 'x'
a = b;

//read variable b
//assign to variable b value of a which is 'y'
b = t;

//read variables a,b, t which is x,y,y
console.log(a, b, t);

// what did you do in this program?
// declaring, intialize and after over write the values

// what are the final values of `a` and `b`?
// a='x' and b='y'

// how are they changed from the initial values?
// they were assign with the other value

// is it possible to swap a and b without using t?
// yes