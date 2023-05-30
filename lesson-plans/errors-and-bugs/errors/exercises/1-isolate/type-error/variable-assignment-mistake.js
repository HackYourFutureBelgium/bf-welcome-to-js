'use strict';

console.log('--- in execution phase ---');

/*
  environment: Chrome

  name: SyntaxError
  message: valid left-hand side in assignment

  location: line 25

  life cycle: execution

  the mistake: value mentioned in wrong place

  the fix(es): first declare the variable and initialize the value
*/

let isHappy = false;

isHappy = true;
