'use strict';

/*

  Data In: any text

  Data Out: text without vowels

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

let letters = null;

while (letters === null) {
  letters = prompt('enter some letters');
}

let noVowels = '';

for (const character of letters) {
  if ('aeiouAEIOU'.includes(character)) {
    continue;
  }
  noVowels += character;
}

alert(letters + ' -> ' + noVowels);