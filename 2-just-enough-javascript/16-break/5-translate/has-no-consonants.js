// #todo

'use strict';

/*


  Data In:

  Data Out:

  Test Cases:

*/

/* ---   ?   --- */

// letters <- null

// WHILE: letters === null
//   letters <- prompt('enter some letters')
// :END WHILE

/* ---   ?   --- */

// noConsonants <- true

// FOR: letter OF letters
//   lowerCaseLetter <- letter.toLowerCase()
//   IF: 'bcdfghjklmnpqrstvwxyz'.includes(lowerCaseLetter)
//     noConsonants <- false
//     BREAK
//   :END IF
// :END FOR-OF

/* ---   ?   --- */

// message <- ''

// IF: noConsonants
//   message <- '"' + letters + '" has no consonants'
// ELSE:
//   message <- '"' + letters + '" has at least one consonant'
// :END IF

/* ---   ?   --- */

// alert(message)

'use strict';

/*


  Data In: user input

  Data Out: choco --> choco has atleast one constants

  Test Cases:
  - Case 1: choco --> choco has atleast one constants
  - Case 2: aeiou --> aeiou has no constants
*/

/* ---   userinput   --- */

let letters = null;

// WHILE: letters === null
while (letters === null) {
  // letters <- prompt('enter some letters')
  letters = prompt('Enter some letters');
  // :END WHILE
}

/* ---   Check for Consonants   --- */

let noConsonants = true;

// FOR: letter OF letters
for (let letter of letters) {
  /* ---   Convert to Lowercase   --- */

  // lowerCaseLetter <- letter.toLowerCase()
  let lowerCaseLetter = letter.toLowerCase();

  /* ---   Check for Consonants   --- */

  // IF: 'bcdfghjklmnpqrstvwxyz'.includes(lowerCaseLetter)
  if ('bcdfghjklmnpqrstvwxyz'.includes(lowerCaseLetter)) {
    // Input contains at least one consonant
    noConsonants = false;
    // BREAK the loop
    break;
    // :END IF
  }
  // :END FOR-OF
}

/* ---   Generate Result Message   --- */

let message = '';

// IF: noConsonants
if (noConsonants) {
  // Input has no consonants
  message = `"${letters}" has no consonants`;
} else {
  // Input has at least one consonant
  message = `"${letters}" has at least one consonant`;
  // :END IF
}

/* ---   Output Result   --- */

// alert(message)
alert(message);
