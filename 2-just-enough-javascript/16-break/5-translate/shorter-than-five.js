// #todo

'use strict';

/*


  Data In: java

  Data Out: java

  Test Cases: java -> java

*/

/* --- gather user input --- */

let input = '';

while (true) {
  input = prompt('Enter something shorter than 5 characters:');
  
  if (input === null) {
    alert('There is no escape!');
  } else if (input.length > 4) {
    alert('Your input is too long!');
  } else {
    break;
  }
}

console.log('input:', input);

/* --- alert the result --- */

alert(input);