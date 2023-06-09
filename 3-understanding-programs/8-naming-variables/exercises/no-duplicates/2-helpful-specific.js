'use strict';

/* specific

  _a -> enteredText:
    Represents the text entered by the user, ensuring there are no duplicate characters.

  _b -> uniqueText:
    Stores the unique characters from the entered text.

  _c -> currentChar:
    Represents the current character during iteration.

  _d -> hasDuplicates:
    Checks if the current character is a duplicate.

*/

let enteredText = null;
while (enteredText === null) {
  enteredText = prompt('enter something with no duplicate characters');
}

let uniqueText = '';
for (let currentChar of enteredText) {
  let hasDuplicates = uniqueText.includes(currentChar);
  if (hasDuplicates) {
    break;
  }
  uniqueText += currentChar;
}

if (uniqueText.length === enteredText.length) {
  alert('well done!');
} else {
  alert('too bad, try again');
}