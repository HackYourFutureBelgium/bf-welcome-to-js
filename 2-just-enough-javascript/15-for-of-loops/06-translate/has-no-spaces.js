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

// noSpaces <- true

// FOR: letter OF input
//   IF: letter === ' '
//     noSpaces <- false
//   :END IF
// :END FOR-OF

/* ---   ?   --- */

// message <- ''

// IF: noSpaces
//   message <- '"' + input + '" has no spaces'
// ELSE:
//   message <- '"' + input + '" has at least one space'
// :END IF

/* ---   ?   --- */

// alert(message)



'use strict';

/*

  Data In: user input

  Data Out: user output

  Test Cases:
   - Test Case 1:
        Input: "Hello, world!"
        Expected Output: "'Hello, world!' has at least one space"

    - Test Case 2:
        Input: "chocolate"
        Expected Output: "'chocolate' has no spaces"

    - Test Case 3:
        Input: ""
        Expected Output: "'' has no spaces"


   
*/

/* ---   Prompt for Input   --- */

let input = null;

// WHILE: input is null, keep prompting the user for input
while (input === null) {
  input = prompt('Enter some text. The program will check if it has any spaces.');
}

/* ---   Check for Spaces   --- */

let noSpaces = true;

// FOR: each letter in the input string
for (const letter of input) {
  // IF: the letter is a space
  if (letter === ' ') {
    noSpaces = false;
    break; // Exit the loop since a space is found
  }
}

/* ---   Create Message   --- */

let message = '';

// IF: no spaces found in the input
if (noSpaces) {
  message = '"' + input + '" has no spaces';
} else {
  message = '"' + input + '" has at least one space';
}

/* ---   Display Result   --- */

alert(message);
