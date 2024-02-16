/* 'use strict';

let text = null;
while (text === null) {
  text = prompt('enter some text, each character will be doubled:');
}

let doubled = '';
for (let nextChar of text) {
  doubled = doubled + nextChar + nextChar;
}

alert(doubled); */

/*===== Challenges =====
  - Add an hyphen after each character.
  - Add an hyphen only between the characters. 
*/

'use strict';

let userChar = '';
let charToInsert = '-';
let indexToInsertAt = 1;

let newChar =
  userChar.substring(1, indexToInsertAt) +
  charToInsert +
  userChar.substring(indexToInsertAt);

console.log(newChar);
