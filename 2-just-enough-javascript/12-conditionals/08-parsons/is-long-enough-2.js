'use strict';

/* parsons-collapse: hint
  1. gather input
  2. alert a reaction
    a. they did not cancel
      1. incorrect
      2. correct
    b. they canceled
*/

let input = prompt('something longer than 4 characters:');

if (input !== null) {
  if (input.length <= 4) {
    alert('too short!');
  } else {
    alert('perfect');
  }
} else {
  alert(':(');
}

// -------------------

/*let input = prompt('something longer than 4 characters:'); // distractor
} else { //distractor
if (input.length <= 4) { // distractor*/
