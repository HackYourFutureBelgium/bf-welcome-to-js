// #todo

'use strict';

/*


  Data In:

  Data Out:

  Test Cases:

*/

/* ---   ?   --- */

// normalPhrase <- null

// WHILE: normalPhrase === null
//   normalPhrase <- prompt('enter something to flipflop')
// :END WHILE

/* ---   ?   --- */

// previous <- ''

// flipFlopped <- ''

// FOR: current OF normalPhrase
//   IF: previous !== ''
//     flipFlopped <- flipFlopped + current + previous
//     previous <- ''
//   ELSE:
//     previous <- current
//   :END IF
// :END FOR-OF

/* ---   ?   --- */

// IF: flipFlopped.length < normalPhrase.length
//   flipFlopped <- flipFlopped + normalPhrase[normalPhrase.length - 1]
// :END IF

/* ---   ?   --- */

// alert(flipFlopped)



'use strict';

/*

  Data In: user input

  Data Out: user output

  Test Cases:
  - Case 1:
    Data In: "Hello World"
    Expected Output: "eHll ooWlrd"

*/

/* --- Prompting the user for input --- */

let normalPhrase = null;

// Prompt the user until a non-null value is provided
while (normalPhrase === null) {
  normalPhrase = prompt('Enter something to flip-flop');
}

/* --- Flip-flop operation --- */

let previous = '';
let flipFlopped = '';

// Iterate over each character in normalPhrase
for (let current of normalPhrase) {
  if (previous !== '') {
    // Append current and previous characters to flipFlopped
    flipFlopped += current + previous;
    previous = '';
  } else {
    previous = current;
  }
}

/* --- Handle last character if necessary --- */

if (flipFlopped.length < normalPhrase.length) {
  // Append the last character of normalPhrase to flipFlopped
  flipFlopped += normalPhrase[normalPhrase.length - 1];
}

/* --- Display the result --- */

alert(flipFlopped);

/* --- Test Cases --- */

// Case 1:
let input1 = "Hello World";
// Expected output: "eHll oWrdlo"
// Explanation: The flip-flop operation swaps adjacent characters, resulting in "eHll oWrdlo"
console.log(flipFlop(input1) === "eHll oWrdlo");
