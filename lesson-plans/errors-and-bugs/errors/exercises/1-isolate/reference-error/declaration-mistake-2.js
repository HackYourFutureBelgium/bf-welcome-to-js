'use strict';

console.log('--- in execution phase ---');

/*
  environment: chorme

  name:  23
  message : Reference Error

  location: 23

  life cycle:Exceution phase

  the mistake: using isValidUserName  intilizating before declaring username

  the fix(es): declare isValidUserName variable before conditional using it in the if statement.
*/

const userName = 'chiobin';
console.log('userName:', typeof userName, userName);

let isValidUserName;

if (userName.length > 3) {
  isValidUserName = true;  // Reference Error : isValidUserName is not defined
}

if (userName.length <= 3) {
  isValidUserName = false;
}

console.log('isValidUserName:', typeof isValidUserName, isValidUserName);
