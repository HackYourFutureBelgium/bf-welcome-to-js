'use strict';

/* Remove Spaces

  Data In:
    any text

  Data Out:
    A text without spaces between their words

  Test Cases:
    'Hi, I am Alexander' -> 'Hi,IamAlexander'
    'What time is it?' -> 'WhatTimeIsIt?'
    'The zoo is closed' -> 'The zoo is closed'



*/

/* --- gather user input --- */

let input = null;
while (input === null) {
  input = prompt('enter some text, all the spaces will be removed');
  console.log(input);
}

/* --- create new data with no spaces --- */

let spaceless = '';
for (let character of input) {
  if (character !== ' ') {
    spaceless = spaceless + character;
    console.log(spaceless);
  }
}

/* --- create a final message --- */

let message = 'before: ' + input + '\nafter: ' + spaceless;
console.log(message);

/* --- display message to the user --- */

alert(message);