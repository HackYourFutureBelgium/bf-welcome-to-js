'use strict';

/* generic

  _a -> input:
    named because it represents the user input to be processed in the program

  _b -> result:
    named because it stores the result after removing all vowels from the input

  _c -> char:
    named because it represents each character in the input during the iteration

  _d -> isVowel:
    named because it stores the result of checking if the character is a vowel


*/

let input = null;
while (input === null) {
  input = prompt('enter some text, the program will remove all vowels');
}

let result = '';
for (let char of input) {
  let isVowel = 'aeiou'.includes(char.toLowerCase());
  if (!isVowel) {
    result = result + char;
  }
}

alert(result);