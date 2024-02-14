'use strict';

/* Remove Spaces

  Data In: Input string


  Data Out: Mirrored version of the input text displayed to the user.


  Test Cases:
    Input: 'How Are You'
    output: before: 'How Are You'
            after: 'HowAreYou'
*/

/* --- gather user input --- */

debugger;

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
