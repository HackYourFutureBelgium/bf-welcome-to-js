'use strict';

/* Has an "x"


  Data In: user input

  Data Out: 
   - if the user enter with 'x' the message shows 'has at least one 'x'
   - if the user enter without 'x' the message shows 'does not have a single "x"'

  Test Cases:
  - xerox --> 'has at least one "x"'
  - hello --> 'does not have a single "x"'

*/

/* ---  ?  --- */
let input = null;
let message = '';
while (input === null) {
  input = prompt('enter something, the program will check if it has an "x"');
}
if (input.includes('x')) {
  message = message + 'has at least one "x"';
} else {
  message = message + 'does not have a single "x"';
}
alert(message);