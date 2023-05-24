'use strict';

// declare a variable a and initialize it to the value 'Ewin'
let a = 'Ewin';
// let a = 'Tugba';
// let a = 'Jo';
// let a = 'Olesandra';

//read the variable a with value 'Ewin'
// declare a variable b and initialize it to the value 'Hello Ewin, your name is '
let b = 'Hello ' + a + ', your name is ';

//read the variable a with value 'Ewin'
//check the conditions, else if (a.length === 4) is true
//read the variable b with value 'Hello Ewin, your name is '
// assign the variable b to the value 'Hello Ewin, your name is perfect'
if (a.length > 4) {
  b = b + 'long.';
} else if (a.length === 4) {
  b = b + 'perfect.';
} else {
  b = b + 'short.';
}

//read the variable b with value 'Hello Ewin, your name is perfect'
console.log(b);
