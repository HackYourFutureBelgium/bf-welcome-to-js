'use strict';

/* Mirror

 This program mirror the input.

  Data In:
    any text

  Data Out:
    reverse the text and mirror the text

  Test Cases:
    'rahwa' ->  'awhar | rahwa'
    'abc' -> 'cba | abc'

    

*/

/* --- gather user input --- */

let input = null;
while (input === null) {
  input = prompt('enter some text to mirror');
  console.log(input);
}

/* --- create mirrored text --- */

let mirrored = ' | ';
for (let character of input) {
  mirrored = character + mirrored + character;
  console.log(mirrored);
}

/* --- display mirrored text to the user --- */

alert(mirrored);
