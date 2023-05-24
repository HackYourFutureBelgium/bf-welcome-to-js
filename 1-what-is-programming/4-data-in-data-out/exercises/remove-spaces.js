'use strict';

/* Remove Spaces

  Data In:
   some text

  Data Out:
   text without space

  Test Cases:
   12 12 12 -> before: 12 12 12 after: 121212
   blue sky -> before: blue sky after: bluesky

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
