// #todo

'use strict';

/*


  Data In:

  Data Out:

  Test Cases:

*/

/* ---   ?   --- */

let text = null;

while (text === null) {
  text = prompt('enter some text');
}

/* ---   ?   --- */

let hasAVowel = false;

for (letter of text) {
  if ('aeiouAEIOU'.includes(letter)) {
    hasAVowel = true;
    break;
  }
}

/* ---   ?   --- */

let message = '';

if (hasAVowel) {
  message = '"' + text + '" has at least one vowel';
} else {
  message = '"' + text + '" does not have any vowels';
}

/* ---   ?   --- */

alert(message);
