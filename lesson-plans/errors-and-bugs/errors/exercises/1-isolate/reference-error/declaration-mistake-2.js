'use strict';

console.log('--- in execution phase ---');

/*
  environment:

  name:
  message:

  location:

  life cycle:

  the mistake: declare before initialize

  the fix(es): declare with const or let
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
