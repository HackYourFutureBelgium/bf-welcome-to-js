'use strict';

/* Mirror

  Data In: hello world


  Data Out: reversed


  Test Cases: hello world --> whello worldw


*/

/* --- gather user input --- */

let input = null;
while (input === null) {
  input = prompt('enter some text to mirror');
  console.log(input);
}

/* --- create mirrored text --- */

let mirrored = 'hello world';
for (let character of input) {
  mirrored = character + mirrored + character;
  console.log(mirrored);
}

/* --- display mirrored text to the user --- */

alert(mirrored);
