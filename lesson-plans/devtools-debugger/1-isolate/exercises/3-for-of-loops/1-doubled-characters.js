'use strict';

let text = null;
while (text === null) {
  text = prompt('enter some text, each character will be doubled:');
}

let doubled = '';

for (let nextChar of text) {
  doubled = doubled + nextChar + '-';
}
for (let i = 0; i < text.length; i++) {
  doubled = doubled + text[i];
  if (i !== text.length - 1) {
    doubled = doubled + '-';
  }
}

alert(doubled);

/*  ===== Challenges =====
  - Add an hyphen after each character.
  - Add an hyphen only between the characters.
*/
