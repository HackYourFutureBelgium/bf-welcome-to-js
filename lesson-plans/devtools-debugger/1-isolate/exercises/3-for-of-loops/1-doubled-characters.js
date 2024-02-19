'use strict';

debugger;

let text = null;
while (text === null) {
  text = prompt('enter some text, each character will be doubled:');
}

let i = 0;
let doubled = '';
for (let nextChar of text) {
  if (text.length - 1 === i) {
    doubled = doubled + nextChar;
  } else {
    doubled = doubled + nextChar + '-';
  }

  i++;
}

alert(doubled);

/*  ===== Challenges =====
  - Add an hyphen after each character.
  - Add an hyphen only between the characters.
*/
