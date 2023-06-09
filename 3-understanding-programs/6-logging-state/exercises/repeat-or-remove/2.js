// #todo

'use strict';

/*
  log the user's input
  log the every character, no matter what they confirmed
*/

let phrase = null;
while (phrase === null) {
  phrase = prompt('enter a phrase');
  console.log(phrase); //log the user's input
}

const keepLetters = confirm(
  '"ok" to remove everything that is not a letter\n' +
    '"cancel" to repeat each character',
);

let newPhrase = '';
if (keepLetters) {
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  for (const character of phrase) {
    if (letters.includes(character.toLowerCase())) {
      newPhrase = newPhrase + character;
      console.log(character); //log the every character
    }
  }
} else {
  for (const character of phrase) {
    newPhrase = newPhrase + character + character;
  }
}

alert(newPhrase);
