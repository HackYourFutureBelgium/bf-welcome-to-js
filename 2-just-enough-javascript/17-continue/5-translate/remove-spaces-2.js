// #todo

'use strict';

/*


  Data In:

  Data Out:

  Test Cases:

*/

/* ---   ?   --- */

// input <- null

// WHILE: true
//   input <- prompt('enter something with at least one space, the spaces will be removed')
//   IF: input === null
//     alert('no escape')
//     CONTINUE
//   :END IF
//   IF: input === ''
//     alert('gotta enter something')
//     CONTINUE
//   :END IF
//   IF: !input.includes(' ')
//     alert('there must be a space!')
//     CONTINUE
//   :END IF
//   BREAK
// :END WHILE

/* ---   ?   --- */

// spaceless <- ''

// FOR: char OF input
//   IF: char !== ' '
//     spaceless <- spaceless + char
//   :END IF
// :END FOR-OF

/* ---   ?   --- */

// alert(input + ' -> ' + spaceless)


'use strict';

/*


  Data In: user input

  Data Out: "Hello World" --> HelloWorld

  Test Cases:
  - Case 1: "Hello World" --> HelloWorld
  - Case 2: "He ll" --> Hell
  */

/* ---   Prompt for Input   --- */

let input = null;

// WHILE: true
while (true) {
  // input <- prompt('enter something with at least one space, the spaces will be removed')
  input = prompt('Enter something with at least one space. The spaces will be removed.');

  /* ---   Handle User Input   --- */

  // IF: input === null
  if (input === null) {
    // User canceled the prompt
    alert('No escape.');
    // CONTINUE
    continue;
    // :END IF
  }

  // IF: input === ''
  if (input === '') {
    // User entered an empty string
    alert('Gotta enter something.');
    // CONTINUE
    continue;
    // :END IF
  }

  // IF: !input.includes(' ')
  if (!input.includes(' ')) {
    // Input does not contain a space
    alert('There must be a space!');
    // CONTINUE
    continue;
    // :END IF
  }

  // BREAK the loop
  break;
  // :END WHILE
}

/* ---   Remove Spaces   --- */

let spaceless = '';

// FOR: char OF input
for (let char of input) {
  /* ---   Check for Space   --- */

  // IF: char !== ' '
  if (char !== ' ') {
    // Append the non-space character to spaceless
    spaceless += char;
    // :END IF
  }
  // :END FOR-OF
}

/* ---   Output Result   --- */

// alert(input + ' -> ' + spaceless)
alert(`Original input: ${input}\nInput without spaces: ${spaceless}`);
