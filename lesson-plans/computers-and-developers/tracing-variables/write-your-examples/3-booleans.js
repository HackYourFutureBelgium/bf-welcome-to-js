'use strict';

/* Booleans

TODO: create a few variables(boolean):
- you need to add comments to show where the variable been
declared, initialized, read , reassigned,...
*/

// declare a variable isOldEnough and initialize it to the value false
const isOldEnough = false;

// declare a variable message and initialize it to the value ''
let message = '';
// read the variable isOldEnough
if (isOldEnough) {
  // assign the variable message
  message = 'You can drive';
} else {
  // assign the variable message
  message = "Sorry, you can't drive yet!";
}

// read the variable message
console.log(message);
