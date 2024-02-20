'use strict';

console.log('--- in execution phase ---');

/*
  environment: chrome

  name:SyntaxError
  message:Invalid left-hand side in assignment

  location:at variable-assignment-mistake.js:25:1

  life cycle: execution

  the mistake: true can't be assigned as a variable 

  the fix(es): assigne isHappy from right to left, 
*/

let isHappy = false;

isHappy = true;

console.log(isHappy);
