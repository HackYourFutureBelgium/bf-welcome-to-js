// #todo

'use strict';

// use `const` for every variable that is never reassigned
// message has to be declare with const

let input = null;
while (input === null) {
  input = prompt('enter some text, all the spaces will be removed');
  console.log(input);
}

let spaceless = '';
for (let character of input) {
  if (character !== ' ') {
    spaceless = spaceless + character;
    console.log(spaceless);
  }
}

const message = 'before: ' + input + '\nafter: ' + spaceless;
console.log(message);

alert(message);
