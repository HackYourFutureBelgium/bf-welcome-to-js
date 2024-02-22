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

let text = "";

while (!text) {
  let input = prompt("Enter some text, it will return's bonus word")
  if (input === "") alert("Enter some text");
  if (input === null) alert("Not allowed");
  text = input;
}

let bonusText = "";

const spacialChat = '0123456789/\\.+*?[]$(){}=!<>|:- '
let upper = true;

for (const char of text) {
  if (!spacialChat.includes(char)) {
    upper ? bonusText += char.toUpperCase() : bonusText += char.toLowerCase();
    upper = !upper
  } else {
    bonusText += char
  }
}

alert(bonusText);