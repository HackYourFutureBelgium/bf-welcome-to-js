'use strict';

let firstName = prompt('enter your first name:');
let lastName = prompt('enter your last name:');

let greeting = '';
if (firstName === null || firstName === '') {
  greeting = 'you did not enter your first name.';
} 
if (lastName === null|| lastName ==='') {
  greeting = 'you did not enter your last name.';
}

if (firstName && lastName){
  greeting ='hello'+ firstName + ' '+ lastName ;
}


alert(greeting);

/*  ===== Challenges =====
  - Ask the user for their first and last names.
  - Greet them with their full name.
*/
