// #todo

'use strict';

/*


  Data In: user input

  Data Out: "HackYourFuture" has at least one consonant

  Test Cases: HackYourFutute -> "HackYourFuture" has at least one consonant
              aou -> "aou" has no consonants

*/

/* ---   ?   --- */

'use strict';

/* --- gather user input --- */

let letters = null;
while (letters === null || letters === '') {
  letters = prompt('Enter some letters:');
}
console.log('input:', letters);

/* --- check for consonants --- */

let noConsonants = true;

for (let letter of letters) {
  let lowerCaseLetter = letter.toLowerCase();
  if ('bcdfghjklmnpqrstvwxyz'.includes(lowerCaseLetter)) {
    noConsonants = false;
    break;
  }
}

/* --- create message --- */

let message = '';

if (noConsonants) {
  message = '"' + letters + '" has no consonants';
} else {
  message = '"' + letters + '" has at least one consonant';
}

/* --- alert the result --- */

console.log('message:', message);
alert(message);