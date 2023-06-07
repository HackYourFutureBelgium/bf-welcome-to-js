'use strict';

/*


  Data In: user input

  Data Out: "Milenka" has no spaces

  Test Cases: Milenka -> "Milenka" has no spaces
              I love life -> "I love life" has at least one space

*/

/* ---   ?   --- */

let input = null;

while (input === null) {
  input = prompt(
    'Enter some text. The program will check if it has any spaces',
  );
}

/* ---   ?   --- */

let noSpaces = true;

for (let letter of input) {
  if (letter === ' ') {
    noSpaces = false;
    break;
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