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

let text = '';

// ask the user for input
while (true) {
  const input = prompt('please enter something : ');

  // cancel
  if (input === null) {
    alert('there is no escape!');
    continue;
  }

  // empty string
  if (input === '') {
    alert('no empty input, try again.');
    continue;
  }

  if (input) {
    text = input;
    break;
  }
}

console.log(text);

const specials = ' !@#$%^&*()_-+=1234567890';

let newtext = '';
let isUpperCase = true;

// loop through text
for (const char of text) {
  // char is not in specials
  if (specials.indexOf(char) === -1) {
    if (isUpperCase) {
      newtext += char.toUpperCase();
    } else {
      newtext += char.toLowerCase();
    }
    isUpperCase = !isUpperCase;
  } else {
    newtext += char;
  }
}

alert(newtext);
