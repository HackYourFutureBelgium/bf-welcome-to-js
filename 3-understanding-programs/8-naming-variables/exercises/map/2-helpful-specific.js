'use strict';

/* specific

  _a -> inputText:
    named because it represents the user input text to be processed in the program

  _b -> resultText:
    named because it stores the result after modifying the input text based on vowel case swapping

  _c -> currentChar:
    named because it represents each character in the input text during the iteration

*/

let inputText = null;
while (inputText === null) {
  inputText = prompt('enter some text, can you guess what the program does?');
}

let resultText = '';
for (let currentChar of inputText) {
  if ('aeiou'.includes(currentChar)) {
    resultText = resultText + currentChar.toUpperCase();
  } else if ('AEIOU'.includes(currentChar)) {
    resultText = resultText + currentChar.toLowerCase();
  } else {
    resultText = resultText + currentChar;
  }
}

alert(resultText);