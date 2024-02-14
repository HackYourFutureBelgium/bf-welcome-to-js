'use strict';

/* Mirror

  Data In: Input string


  Data Out: Mirrored version of the input text displayed to the user.


  Test Cases:
    Input: 'verygood'
    Output: 'verygood | doogyrev'


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
