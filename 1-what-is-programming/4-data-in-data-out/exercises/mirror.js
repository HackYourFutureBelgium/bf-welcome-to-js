'use strict';

/* Mirror

  Data In: 
   some text

  Data Out:
   text + ' | ' + mirrored text 

  Test Cases:
  text -> text | txet
  1234 -> 1234 | 4321

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
