// #todo

'use strict';

/*


  Data In:

  Data Out:

  Test Cases:

*/

/* ---   ?   --- */

// input <- null

// WHILE: input === null
//   input <- prompt('enter some text, the program will check if it has any spaces')
// :END WHILE

/* ---   ?   --- */

// hasASpace <- false

// FOR: char OF input
//   IF: char === ' '
//     hasASpace <- true
//   :END IF
// :END FOR-OF

/* ---   ?   --- */

// message <- ''

// IF: hasASpace
//   message <- '"' + input + '" has at least one space'
// ELSE:
//   message <- '"' + input + '" does not have any spaces'
// :END IF

/* ---   ?   --- */

// alert(message)

'use strict';

/*


  Data In: user input

  Data Out: Hello World --> Hello World has atleast one space

  Test Cases:
  - Case 1: "Hello World" -->Hello World has atleast one space
  - Case 2: "water" --> water doesnot have any spaces
*/

/* ---  user Input   --- */

let input = null;

// WHILE: input === null
while (input === null) {
  // input <- prompt('enter some text, the program will check if it has any spaces')
  input = prompt('Enter some text. The program will check if it has any spaces.');
  // :END WHILE
}

/* ---   Check for Spaces   --- */

let hasASpace = false;

// FOR: char OF input
for (let char of input) {
  /* ---   Check for Space   --- */

  // IF: char === ' '
  if (char === ' ') {
    // Input contains at least one space
    hasASpace = true;
    // :END IF
  }
  // :END FOR-OF
}

/* ---   Generate Result Message   --- */

let message = '';

// IF: hasASpace
if (hasASpace) {
  // Input has at least one space
  message = `"${input}" has at least one space`;
} else {
  // Input does not have any spaces
  message = `"${input}" does not have any spaces`;
  // :END IF
}

/* ---   Output Result   --- */

// alert(message)
alert(message);
