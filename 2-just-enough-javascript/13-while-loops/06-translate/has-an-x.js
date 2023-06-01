// #todo

'use strict';

/* Has an "x"


  Data In:

  Data Out:

  Test Cases:

*/

/* ---  ?  --- */

let input = null;
while (input === null) {
  input = prompt('enter something, the program will check if it has an "x"');
}

/* ---  ?  --- */

if (input.includes('x')) {
  message = message + 'has at least one "x"';
} else {
  message = message + 'does not have a single "x"';
}

/* ---  ?  --- */

alert(message);
