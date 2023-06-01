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

let noSpaces = true;

for (letter of input) {
  if (letter === ' ') {
    noSpaces = false;
  }
}

/* ---   ?   --- */

let message = '';

if (noSpaces) {
  message = '"' + input + '" has no spaces';
} else {
  message = '"' + input + '" has at least one space';
}

/* ---   ?   --- */

alert(message);
