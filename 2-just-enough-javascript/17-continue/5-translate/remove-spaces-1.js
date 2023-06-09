// #todo

'use strict';

/*


  Data In:

  Data Out:

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


// Data In: User input via the prompt function.

// Data Out:  Displayed output via the alert function.

// Test Cases:
// 1. "Hello World -> HelloWorld"
//2.  hello-->  there must be atleast one space
// 3. ''--> you must enter something
 

/* ---   gather user input  --- */

// input <- null
let input = null;
// hasSpaces <- false
let hasSpaces = false;

/* ---   enter the loop to check for test cases   --- */


// WHILE: !hasSpaces
while (!hasSpaces) {
  // input <- prompt('enter something with at least one space, the spaces will be removed')
  input = prompt('Enter something with at least one space. Spaces will be removed.');
  
  // IF: input === null
  if (input === null) {
    alert('No escape.');
  }
  // ELSE: IF: input === ''
  else if (input === '') {
    alert('You must enter something.');
  }
  // ELSE: IF: !input.includes(' ')
  else if (!input.includes(' ')) {
    alert('There must be at least one space.');
  }
  // ELSE:
  else {
    hasSpaces = true;
  }
}
/* ---   enter the loop to check for spaceleess test cases   --- */
// spaceless <- ''
let spaceless = '';

// FOR: character OF input
for (let character of input) {
  // IF: character === ' '
  if (character === ' ') {
    continue;
  }
  // spaceless <- spaceless + character
  spaceless += character;
}

// alert user with output
alert(input + ' -> ' + spaceless);
