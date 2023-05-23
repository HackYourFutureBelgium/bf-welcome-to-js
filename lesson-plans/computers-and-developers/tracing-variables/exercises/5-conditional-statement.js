'use strict';

// Variable 'a' declaration and initialization
let a = 'Ewin';
// let a = 'Tugba';
// let a = 'Jo';
// let a = 'Olesandra';

// Variable 'b' declaration and initialization, including reading variable 'a'
let b = 'Hello ' + a + ', your name is ';

// Checking the length of variable 'a' and updating variable 'b' based on the condition
if (a.length > 4) {
  b = b + 'long.'; // Reassigning 'b'
} else if (a.length === 4) {
  b = b + 'perfect.'; // Reassigning 'b'
} else {
  b = b + 'short.'; // Reassigning 'b'
}

// Printing the value of variable 'b'
console.log(b);
