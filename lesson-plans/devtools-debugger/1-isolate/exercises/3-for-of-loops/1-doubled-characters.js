'use strict';

// let text = null;
// while (text === null) {
//   text = prompt('enter some text, each character will be doubled:');
// }

// let doubled = '';
// for (let nextChar of text) {
//   doubled = doubled + nextChar + nextChar;
// }

// alert(doubled);

/*  ===== Challenges =====
  - Add an hyphen after each character.
  - Add an hyphen only between the characters.
*/

// Solution 1

let text = 'Add an hyphen after each character';
let textWithHyphen = '';

for (let nextChar of text) {
  textWithHyphen = textWithHyphen + nextChar + '-';
}

console.log(textWithHyphen);

// Solution 2

let text1 = 'Add an hyphen only between the characters';
let words = text1.split(' '); /* Transform text to the array */
let textWithHyphen1 = '';

for (let word of words) /* Loop each word in the array */ {
  for (
    let i = 0;
    i < word.length - 1;
    i++
  ) /* Remove the last symbol after each word */ {
    textWithHyphen1 = textWithHyphen1 + word[i] + '-';
  }
  textWithHyphen1 += word[word.length - 1] + ' ';
}
console.log(textWithHyphen1);
