'use strict';

/* specific

  _a -> inputText:
    named because it represents the user input text to be processed in the program

  _b -> resultText:
    named because it stores the result after removing all vowels from the input text

  _c -> currentChar:
    named because it represents each character in the input text during the iteration

  _d -> isVowel:
    named because it stores the result of checking if the current character is a vowel

*/

let inputText = null;
while (inputText === null) {
  inputText = prompt('enter some text, the program will remove all vowels');
}

let resultText = '';
for (let currentChar of inputText) {
  let isVowel = 'aeiou'.includes(currentChar.toLowerCase());
  if (!isVowel) {
    resultText = resultText + currentChar;
  }
}

alert(resultText);
