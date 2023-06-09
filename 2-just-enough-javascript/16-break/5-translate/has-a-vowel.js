


'use strict';

/*


  Data In: user input

  Data Out: "hack your future" has at least one vowel

  Test Cases: hack your future -> "hack your future" has at least one vowel
              mnprs -> "mnprs" does not have any vowels

*/





/* --- gather user input --- */

let text = null;
while (text === null || text === '') {
  text = prompt('Enter some text:');
}
console.log('input:', text);

/* --- check for vowels --- */

let hasAVowel = false;

for (let letter of text) {
  if ('aeiouAEIOU'.includes(letter)) {
    hasAVowel = true;
    break;
  }
}

/* --- create message --- */

let message = '';

if (hasAVowel) {
  message = '"' + text + '" has at least one vowel';
} else {
  message = '"' + text + '" does not have any vowels';
}

/* --- alert the result --- */

console.log('message:', message);
alert(message);