'use strict';

/* specific

  _a -> text:
    Represents the user's input text.

  _b -> vowels:
    Contains a string of vowels used for checking.

  _c -> containsVowel:
    Represents a boolean flag indicating if the input text contains any vowel.

  _d -> char:
    Represents the current character being checked from the input text.

*/

let text = null;
while (text === null) {
  text = prompt(
    'enter some text, the program will check if it contains any vowels',
  );
}

let vowels = 'aeiou';

let containsVowel = false;
for (let char of text) {
  let lowercaseChar = char.toLowerCase();
  if (vowels.includes(lowercaseChar)) {
    containsVowel = true;
    break;
  }
}

alert(containsVowel);