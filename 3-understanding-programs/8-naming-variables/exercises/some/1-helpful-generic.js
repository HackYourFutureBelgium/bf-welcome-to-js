'use strict';

/* generic

  _a -> userInput:
    Represents the user's input text.

  _b -> vowelList:
    Contains a string of vowels used for checking.

  _c -> hasVowel:
    Represents a boolean flag indicating if the input text contains any vowel.

  _d -> character:
    Represents the current character being checked from the input text.

*/

let userInput = null;
while (userInput === null) {
  userInput = prompt(
    'enter some text, the program will check if it contains any vowels',
  );
}

let vowelList = 'aeiou';

let hasVowel = false;
for (let character of userInput) {
  let lowercaseChar = character.toLowerCase();
  if (vowelList.includes(lowercaseChar)) {
    hasVowel = true;
    break;
  }
}

alert(hasVowel);