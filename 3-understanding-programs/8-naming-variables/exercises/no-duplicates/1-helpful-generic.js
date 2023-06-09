'use strict';

/* generic

  _a -> userInput:
    Represents the input string to be entered by the user, with no duplicate characters.

  _b -> uniqueCharacters:
    Stores the unique characters from the input string.

  _c -> currentCharacter:
    Represents the current character during iteration.

  _d -> isDuplicateCharacter:
    Checks if the current character is a duplicate.

*/

let userInput = null;
while (userInput === null) {
  userInput = prompt('enter something with no duplicate characters');
}

let uniqueCharacters = '';
for (let currentCharacter of userInput) {
  let isDuplicateCharacter = uniqueCharacters.includes(currentCharacter);
  if (isDuplicateCharacter) {
    break;
  }
  uniqueCharacters += currentCharacter;
}

if (uniqueCharacters.length === userInput.length) {
  alert('well done!');
} else {
  alert('too bad, try again');
}