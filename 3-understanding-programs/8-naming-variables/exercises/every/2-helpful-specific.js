'use strict';

/* specific

  _a -> userInput:
    named because it holds the string input from the user to be checked

  _b -> vowels:
    named because it stores a string of vowels to compare against the user input

  _c -> isOnlyVowels:
    named because it represents whether the user input contains only vowels or not

  _d -> char:
    named because it represents each character in the user input during the iteration

  _e -> isVowel:
    named because it stores the result of checking if the character is a vowel

*/


let userInput = null;
while (userInput === null) {
  userInput = prompt('enter some text, the program will check if it is only vowels');
}

let vowels = 'aeiou';

let isOnlyVowels = true;
for (let char of userInput) {
  let isVowel = vowels.includes(char.toLowerCase());
  if (!isVowel) {
    isOnlyVowels = false;
    break;
  }
}

alert(isOnlyVowels);