'use strict';

/*
  test cases:
    '' -> '|'
    'a' -> 'a|a'
    'hello' -> 'olleh|hello'
    ':)' -> '):|:)'


  experiment 1
    line:
    why:
    trying:

*/

let text = null;
while (text === null) {
  text = prompt('enter some text, it will be mirrored');
}
let mirrored = ' | ';
for (let character of text) {
  mirrored = character + mirrored + character;
}
alert(mirrored);
