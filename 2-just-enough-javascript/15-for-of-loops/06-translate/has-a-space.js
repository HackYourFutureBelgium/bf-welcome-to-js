'use strict';

/*


  Data In: user input

  Data Out: "I love coding" has at least one space

  Test Cases: I love coding - > "I loce coding" has at least one space
              coding -> "love" does not have any spaces

*/

/* ---   ?   --- */

let input = null;

while (input === null) {
  input = prompt(
    'Enter some text. The program will check if it has any spaces',
  );
}

/* ---   ?   --- */

let hasASpace = false;

for (let char of input) {
  if (char === ' ') {
    hasASpace = true;
    break;
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