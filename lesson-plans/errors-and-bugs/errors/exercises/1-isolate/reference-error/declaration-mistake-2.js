'use strict';

console.log('--- in execution phase ---');

/*
  environment:

  name:
  message:

  location:

  life cycle:

  the mistake:

  the fix(es):
*/

const userName = 'chiobin';
console.log('userName:', typeof userName, userName);

let isValidUserName;

if (userName.length > 3) {
  isValidUserName = true;
}

if (userName.length <= 3) {
  isValidUserName = false;
}

console.log('isValidUserName:', typeof isValidUserName, isValidUserName);
