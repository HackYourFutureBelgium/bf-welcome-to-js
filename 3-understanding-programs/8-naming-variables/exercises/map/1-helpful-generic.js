'use strict';

/* generic

  _a -> inputText:
    Named because it represents the user input text to be processed in the program.

  _b -> outputText:
    Named because it stores the final modified text based on vowel case swapping.

  _c -> nextChar:
    Named because it represents each character in the input text during the iteration.

*/


let inputText = null;
while (inputText === null) {
  inputText = prompt('enter some text, can you guess what the program does?');
}

let outputText = '';
for (let nextChar of inputText) {
  if ('aeiou'.includes(nextChar)) {
    outputText = outputText + nextChar.toUpperCase();
  } else if ('AEIOU'.includes(nextChar)) {
    outputText = outputText + nextChar.toLowerCase();
  } else {
    outputText = outputText + nextChar;
  }
}

alert(outputText);