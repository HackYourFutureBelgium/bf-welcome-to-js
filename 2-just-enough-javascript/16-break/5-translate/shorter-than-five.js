// #todo

'use strict';

/*


  Data In:

  Data Out:

  Test Cases:

*/

/* ---   ?   --- */

// input <- ''

// WHILE: true
//   input <- prompt('enter something shorter than 5 characters')
//   IF: input === null
//     alert('there is no escape')
//   ELSE: IF: input.length > 4
//     alert('your input is too long')
//   ELSE:
//     BREAK
//   :END IF
// :END WHILE

/* ---   ?   --- */

// alert(input)
'use strict';

/*


  Data In: user input

  Data Out: cat --> cat

  Test Cases:
  - Case 1:  "cat" --> "cat"
  - Case 2: "elephant" --> input is too long
  - Case 3:  cancels the prompt --> there is no escape
*/

/* ---   Prompt for Short Input   --- */

let input = '';

// WHILE: true
while (true) {
  // input <- prompt('enter something shorter than 5 characters')
  input = prompt('Enter something shorter than 5 characters');

  /* ---   Handle User Input   --- */

  // IF: input === null
  if (input === null) {
    // User canceled the prompt
    alert('There is no escape');
    // CONTINUE
    continue;
    // :END IF
  }

  // IF: input.length > 4
  if (input.length > 4) {
    // User input is too long
    alert('Your input is too long');
    // CONTINUE
    continue;
    // :END IF
  }

  // BREAK the loop
  break;
  // :END WHILE
}

/* ---   Output User Input   --- */

// alert(input)
alert(`User input: ${input}`);
