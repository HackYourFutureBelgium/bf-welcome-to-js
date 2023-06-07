'use strict';

/*

  Data In: any text with spaces 

  Data Out: text without spaces

  Test Cases:

*/

/* ---   ?   --- */

// input <- null

// hasSpaces <- false

// WHILE: !hasSpaces
//   input <- prompt('enter something with at least one space, the spaces will be removed')
//   IF: input === null
//     alert('no escape')
//   ELSE: IF: input === ''
//     alert('gotta enter something')
//   ELSE: IF: !input.includes(' ')
//     alert('there must be a space!')
//   ELSE:
//     hasSpaces <- true
//   :END IF
// :END WHILE

/* ---   ?   --- */

// spaceless <- ''

// FOR: character OF input
//   IF: character === ' '
//     CONTINUE
//   :END IF
//   spaceless <- spaceless + character
// :END FOR-OF

/* ---   ?   --- */

// alert(input + ' -> ' + spaceless)

let input = null;
let hasSpaces = false;

while (!hasSpaces) {
  input = prompt(
    'enter something with at least one space, the spaces will be removed',
  );

  if (input === null) {
    alert('no escape');
  } else if (input === '') {
    alert('gotta enter something');
  } else if (!input.includes(' ')) {
    alert('there must be a space!');
  } else {
    hasSpaces = true;
  }
}

let spaceless = '';

for (const char of input) {
  if (char === ' ') {
    continue;
  } else {
    spaceless += char;
  }
}

alert(input + ' -> ' + spaceless);