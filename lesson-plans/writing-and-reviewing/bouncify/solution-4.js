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

function bouncify(text) {
  let result = '';
  let upper = false;
  const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

  for (let i = 0; i < text.length; i++) {
    const char = text[i];

    if (letters.indexOf(char) !== -1) {
      if (upper) {
        result += char.toUpperCase();
      } else {
        result += char.toLowerCase();
      }
      upper = !upper;
    } else {
      result += char;
    }
  }
  return result;
}

// Test cases
console.log(bouncify('a')); // Output: 'A'
console.log(bouncify('Hello')); // Output: 'HeLlO'
console.log(bouncify('HELLO')); // Output: 'HeLlO'
console.log(bouncify('cheese')); // Output: 'ChEeSe'
console.log(bouncify('good bye')); // Output: 'GoOd ByE'
console.log(bouncify(' row a boat ')); // Output: ' RoW A BoAt '
console.log(bouncify('12 Good Byes!')); // Output: '12 GoOd ByEs!'
console.log(bouncify('h1! Hoe gaat het?')); // Output: 'H1! hOe GaAt HeT?'
console.log(bouncify('0 . x . 0')); // Output: '0 . X . 0'
