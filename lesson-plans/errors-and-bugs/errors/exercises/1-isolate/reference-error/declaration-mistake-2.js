'use strict';

console.log('--- in execution phase ---');

/*
  environment: chrome

  name: ReferenceError
  message: ReferenceError: Cannot access 'isValidUserName' before initialization

  location: 24

  life cycle:

  the mistake: missed the declaration for isValidUserName 

  the fix(es): let isValidUserName = true;
*/

const userName = 'chiobin';
console.log('userName:', typeof userName, userName);

if (userName.length > 3) {
  let isValidUserName = true;
}

let isValidUserName;

if (userName.length <= 3) {
  isValidUserName = false;
}

console.log('isValidUserName:', typeof isValidUserName, isValidUserName);
