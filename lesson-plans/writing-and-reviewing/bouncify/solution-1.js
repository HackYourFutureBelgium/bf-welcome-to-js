'use strict';

/* Bouncify

  A user can enter some text to bouncify it.
    - given a non-empty string
      every other letter is converted to UPPER CASE
      every other letter is converted to lower case
      all other characters are ignored without changing the pattern

  test cases:
    has only letters:
      'a'           -> 'A'
      'Hello'       -> 'HeLlO'
      'HELLO'       -> 'HeLlO'
      'cheese'      -> 'ChEeSe'
    has spaces and letters:
      'good bye'      -> 'GoOd ByE'
      ' row a boat '  -> ' RoW a BoAt '
    has everything:
      '12 Good Byes!'     -> '12 GoOd ByEs!'
      'h1! Hoe gaat het?' -> 'H1! hOe GaAt HeT?'
      '0 . x . 0'         -> '0 . X . 0'

*/

// a variable to store the userInput
let message = '';
while (true) {
  // in case null
  const userInput = prompt('Please enter something : ');
  if (userInput === null) {
    alert('there is no escape!');
    continue;
  }
  // in case empty string
  if (userInput === '') {
    alert('no empty string allowed');
    continue;
  }
  // if userInput
  if (userInput) {
    message = userInput;
    break;
  }
}

// Loop throw message
let newMessage = '';
for (let i = 0; i < message.length; i++) {
  if (i % 2 === 0) {
    newMessage += message[i].toUpperCase();
  } else {
    newMessage += message[i].toLowerCase();
  }
}

alert(newMessage);
