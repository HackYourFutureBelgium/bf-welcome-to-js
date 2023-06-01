// #todo

'use strict';

/* Cat Detector


  Data In:

  Data Out:

  Test Cases:


*/

/* --- ? --- */

let input = null;

while (input === null) {
  input = prompt('please enter "cat"');
}

/* --- ? --- */

let message = '';

if (input !== 'cat') {
  message = '"' + input + '" is not a cat';
} else {
  message = 'thank you for the cat';
}
/* --- ? --- */

alert(message);
