'use strict';
debugger;
// Define variable 'a' and initialize it to 'Ewin'
let a = 'Ewin';
// let a = 'Tugba';
// let a = 'Jo';
// let a = 'Olesandra';

// Define variable 'b' and concatenate 'Hello ' with the value of 'a' and ', your name is '
let b = 'Hello ' + a + ', your name is ';

// Check the length of string 'a' and concatenate an appropriate message to 'b' based on its length
if (a.length > 4) {
  b = b + 'long.'; // If the length of 'a' is greater than 4 characters
} else if (a.length === 4) {
  b = b + 'perfect.'; // If the length of 'a' is exactly 4 characters
} else {
  b = b + 'short.'; // If the length of 'a' is less than 4 characters
}

// Log the final message stored in 'b' to the console
console.log(b);
