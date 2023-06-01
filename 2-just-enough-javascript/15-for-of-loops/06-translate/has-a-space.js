// #todo

'use strict';

/*


  Data In:

  Data Out:

  Test Cases:

*/

/* ---   ?   --- */

let input = null;

while (input === null) {
  input = prompt(
    'enter some text, the program will check if it has any spaces',
  );
}

/* ---   ?   --- */

let hasASpace = false;

for (let char of input) {
  if (char === ' ') {
    hasASpace = true;
  }
}

/* ---   ?   --- */

let message = '';

if (hasASpace) {
  message = '"' + input + '" has at least one space';
} else {
  message = '"' + input + '" does not have any spaces';
}

/* ---   ?   --- */

alert(message);
