'use strict';

console.log('--- in execution phase ---');

/*
  environment: chrome

  name: ReferenceError
  message:Cannot access 'isValidUserName' before initialization

  location: declaration-mistake-2.js:24:19

  life cycle: execution

  the mistake: assign before initialization

  the fix(es): declare the variable before using it
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
