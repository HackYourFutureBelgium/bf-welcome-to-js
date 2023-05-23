'use strict';

// declare variable a intialize value 'Ewin'
let a = 'Ewin';

// let a = 'Tugba';
// let a = 'Jo';
// let a = 'Olesandra';

//read variable a
//declare variable b and intialize value 'Hello + 'Ewin' +'your name is'
let b = 'Hello ' + a + ', your name is ';

//excutes conditional statements
//read variable a
//check the length of variable a
//check if the length of the value is greater than 4
//read variable b
//assign variable b with the value  'Hello ' + Ewin + ', your name is ' + 'long.'
//check if the length of the value is equal to 4
//read variable b
//assign variable b with the value 'Hello ' + Ewin + ', your name is ' + 'perfect.'
//read variable b
//assign variable b with the value 'Hello ' + Ewin + ', your name is ' + 'short.'
if (a.length > 4) {
  b = b + 'long.';
} else if (a.length === 4) {
  b = b + 'perfect.';
} else {
  b = b + 'short.';
}

//read variable b which value is Hello Ewin, your name is perfect.
console.log(b);
