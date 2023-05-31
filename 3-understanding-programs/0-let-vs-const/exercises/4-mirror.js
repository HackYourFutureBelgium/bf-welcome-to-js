// #todo

'use strict';

// use `const` for every variable that is never reassigned
// all the variables are reasssigned no need to add const.

let input = null;
while (input === null) {
  input = prompt('enter some text to mirror');
  console.log(input);
}

let mirrored = ' | ';
for (let character of input) {
  mirrored = character + mirrored + character;
  console.log(mirrored);
}

alert(mirrored);
