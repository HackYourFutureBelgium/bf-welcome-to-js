// #todo

'use strict';

/*


  Data In: JavaScript

  Data Out: Java Script -> JavaScript

  Test Cases: JavaScript -> Java Script -> JavaScript

*/

/* --- gather user input --- */

let input = null;

while (true) {
  input = prompt('Enter something with at least one space. Spaces will be removed:');
  
  if (input === null) {
    alert('No escape!');
  } else if (input === '') {
    alert('Gotta enter something!');
  } else if (!input.includes(' ')) {
    alert('There must be a space!');
  } else {
    break;
  }
}

console.log('input:', input);

/* --- remove spaces --- */

let spaceless = '';

for (let char of input) {
  if (char !== ' ') {
    spaceless += char;
  }
}

console.log('spaceless:', spaceless);

/* --- alert the result --- */

alert(input + ' -> ' + spaceless);