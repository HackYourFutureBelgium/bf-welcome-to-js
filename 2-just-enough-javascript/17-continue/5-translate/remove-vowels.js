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

// noVowels <- ''

// FOR: character OF letters
//   IF: 'aeiouAEIOU'.includes(character)
//     CONTINUE
//   :END IF
//   noVowels <- noVowels + character
// :END FOR-OF

/* ---   ?   --- */

// alert(letters + ' -> ' + noVowels)

'use strict';

/*


  Data In: user input

  Data Out: Hello World --> Hll Wrld

  Test Cases:
  - Case 1:  "Hello World" --> Hll Wrld
  - Case 2: "Water" --> Wtr
*/

/* ---   Prompt for Letters   --- */

let letters = null;

// WHILE: letters === null
while (letters === null) {
  // letters <- prompt('enter some letters')
  letters = prompt('Enter some letters');
  // :END WHILE
}

/* ---   Remove Vowels   --- */

let noVowels = '';

// FOR: character OF letters
for (let character of letters) {
  /* ---   Check for Vowels   --- */

  // IF: 'aeiouAEIOU'.includes(character)
  if ('aeiouAEIOU'.includes(character)) {
    // Skip the current iteration if the character is a vowel
    continue;
    // :END IF
  }

  // Append the non-vowel character to noVowels
  noVowels += character;
  // :END FOR-OF
}

/* ---   Output Result   --- */

// alert(letters + ' -> ' + noVowels)
alert(`Original letters: ${letters}\nLetters without vowels: ${noVowels}`);
