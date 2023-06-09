// #todo

'use strict';

/*
  log the user's input
  log the user's choice (keep or remove)
  log the final output
*/

let phrase = null;
while (phrase === null) {
  phrase = prompt('enter a phrase');
  console.log(phrase); //User input
}

const keepLetters = confirm(
  '"ok" to remove everything that is not a letter\n' +
    '"cancel" to repeat each character',
);

console.log(keepLetters); //User choice (keep or remove):',

let newPhrase = '';
if (keepLetters) {
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  for (const character of phrase) {
    if (letters.includes(character.toLowerCase())) {
      newPhrase = newPhrase + character;
    }
  }
} else {
  for (const character of phrase) {
    newPhrase = newPhrase + character + character;
  }
}
console.log(newPhrase); //Final output
alert(newPhrase);
