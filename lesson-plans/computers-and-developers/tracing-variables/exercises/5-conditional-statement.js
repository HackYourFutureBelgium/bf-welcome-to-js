'use strict';
// declare a variable a and intilize it to the value 'Ewin'
let a = 'Ewin';
// let a = 'Tugba';
// let a = 'Jo';
// let a = 'Olesandra';

// read variable a which is value 'Ewin'
//declare a variable b and intilize it to the value 'Hello ' + 'Ewin' + ', your name is 
let b = 'Hello ' + a + ', your name is ';

//read variable b
//check if the value of length a is greater than 4 read varaiable b which is value 'Hello ' + 'Ewin'+ ', your name is 'long.'
//check else if the value of length a equal 4 read variable b which is value  'Hello ' + 'Ewin'+ ', your name is 'perfect.'
//check else if the value of length a less than 4 read variable b which is Hello ' + 'Ewin'+ ', your name is 'short.'
if (a.length > 4) {
  b = b + 'long.';
} else if (a.length === 4) {
  b = b + 'perfect.';
} else {
  b = b + 'short.';
}

//read the variable b which is value  'Hello ' + 'Ewin'+ ', your name is 'perfect.'
console.log(b);
