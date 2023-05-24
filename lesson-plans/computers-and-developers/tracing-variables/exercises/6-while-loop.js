'use strict';


// declare a variable a and intilize it to the value '*'
let a = '*';
// let a = '<>';
// let a = '|-|';
// let a = '';

// declare a variable b and intilize it to the value ''
 
let b = '';
// read variable a which is value '*'
// read variable b which is value ''
// check while the length of variable b which is 0 is less than the length of varible a which is 1 * 3 read variable b which is value '*' +'' equal 1 
// check while the length of variable b which is 1 is less than the length of varible a which is 1 * 3 read variable b which is value '*' +'*' equal 2 
//check while the length of variable b which is 2 is less than the length of varible a which is 1 * 3 read variable b which is value '*' +'**' equal 3

while (b.length < a.length * 3) {
  b = b + a;
}

//read variable b which is value 3
console.log(b);
