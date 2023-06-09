'use strict';

/* generic

  _a -> firstPhrase:
    Represents the user's input for the first secret phrase.

  _b -> secondPhrase:
    Represents the user's input for the second secret phrase.

  _c -> thirdPhrase:
    Represents the user's input for the third secret phrase.

  _d -> randomNumber:
    Stores a randomly generated number between 1 and 3 to determine which secret phrase to remember.

  _e -> selectedPhrase:
    Represents the randomly selected secret phrase for the user to remember.

  _f -> userGuess:
    Stores the user's input for the remembered phrase.

*/

alert(
  'Remembery, the game of remembering.\n\n' +
    'You will be prompted to enter 3 phrases.\n' +
    'Next, you will be prompted to remember one of them.\n\n' +
    'If you enter it exactly, you win!'
);

let firstPhrase = prompt('enter your first secret phrase:');
let secondPhrase = prompt('enter your second secret phrase:');
let thirdPhrase = prompt('enter your third secret phrase:');

alert('all saved! Get ready to remember.');

let randomNumber = Math.round(Math.random() * 2) + 1;

let selectedPhrase = '';
if (randomNumber === 1) {
  selectedPhrase = firstPhrase;
} else if (randomNumber === 2) {
  selectedPhrase = secondPhrase;
} else if (randomNumber === 3) {
  selectedPhrase = thirdPhrase;
}

let userGuess = prompt('enter phrase number ' + randomNumber);

if (userGuess === selectedPhrase) {
  alert('Correct! Phrase ' + randomNumber + ' was "' + selectedPhrase + '".');
} else {
  alert('Nope :(');
}