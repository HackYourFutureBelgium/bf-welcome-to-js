'use strict';

/* specific

  _a -> firstPhrase:
    Represents the user's input for the first secret phrase.

  _b -> secondPhrase:
    Represents the user's input for the second secret phrase.

  _c -> thirdPhrase:
    Represents the user's input for the third secret phrase.

  _d -> selectedPhraseNumber:
    Stores a randomly generated number between 1 and 3 to determine which secret phrase to remember.

  _e -> phraseToRemember:
    Represents the randomly selected secret phrase for the user to remember.

  _f -> enteredPhrase:
    Stores the user's input for the remembered phrase.

*/

alert(
  'Remembery, the game of remembering.\n\n' +
    'You will be prompted to enter 3 phrases.\n' +
    'next you will be prompted to remember one of them\n\n' +
    'if you enter it exactly, you win!',
);

let firstPhrase = prompt('enter your first secret phrase:');
let secondPhrase = prompt('enter your second secret phrase:');
let thirdPhrase = prompt('enter your third secret phrase:');

alert('all saved! get ready to remember');

let selectedPhraseNumber = Math.round(Math.random() * 2) + 1;

let phraseToRemember = '';
if (selectedPhraseNumber === 1) {
  phraseToRemember = firstPhrase;
} else if (selectedPhraseNumber === 2) {
  phraseToRemember = secondPhrase;
} else if (selectedPhraseNumber === 3) {
  phraseToRemember = thirdPhrase;
}

let enteredPhrase = prompt('enter phrase number ' + selectedPhraseNumber);

if (enteredPhrase === phraseToRemember) {
  alert('correct! phrase ' + selectedPhraseNumber + ' was "' + phraseToRemember + '"');
} else {
  alert('nope :(');
}