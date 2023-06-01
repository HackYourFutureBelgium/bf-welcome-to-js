'use strict';

/*
  test cases:
    '' -> ''
    'a' -> 'a!'
    'hello' -> 'h!e!l!l!o!'
    ':)' -> ':!)!'


  experiment 1
    line:
    why:
    trying:

*/

let text = null;
while (!text) {
  text = prompt('enter some text, it will be excited');
}

let excited = '';
for (const character of text) {
  excited = excited + character + '!';
}

alert(excited);
