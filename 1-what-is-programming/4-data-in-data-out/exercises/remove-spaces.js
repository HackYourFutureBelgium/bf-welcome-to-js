'use strict';

debugger;

/* Remove Spaces

  Data In:
  any text 


  Data Out:
  text without spaces


  Test Cases:
  "today 14/02/24 is a rainy day" -> "today14/02/24isarainyday"


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
