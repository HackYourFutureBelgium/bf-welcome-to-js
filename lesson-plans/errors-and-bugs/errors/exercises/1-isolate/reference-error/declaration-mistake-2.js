'use strict';

console.log('--- in execution phase ---');

/*
  environment: chrome 

  name:ReferenceError
  message:Cannot access 'isValidUserName' before initialization

  location:24

  life cycle:Creation phase -> Execution phase

  the mistake:Using isValidUserName before it is declared

  the fix(es):Declare the isValidUserName variable before using if statement
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
