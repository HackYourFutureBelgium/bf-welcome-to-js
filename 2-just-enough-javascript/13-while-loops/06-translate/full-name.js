'use strict';

/* Full Name


  Data In: user input

  Data Out: 
   - asking first name
   - asking last name
   - display 'first name + last name'

  Test Cases:
   - enter a first name --> rekha
   - enter a last name --> sriraman
   - output --> rekha srirman

*/

/* ---  ?  --- */
let firstName = null;
while (firstName === null) {
  firstName = prompt('enter a first name');
}
let lastName = null;
while (lastName === null) {
  lastName = prompt('enter a last name');
}
let fullName = firstName + ' ' + lastName;
alert(fullName);
