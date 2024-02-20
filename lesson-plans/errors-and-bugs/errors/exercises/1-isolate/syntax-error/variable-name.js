'use strict';

console.log('--- in execution phase ---');

/*
  environment: chrome

  name:SyntaxError
  message:Unexpected number

  location:at variable-name.js:25:7

  life cycle: execution

  the mistake: we cant start declare a variable with a number

  the fix(es): start with a character then after with number
*/

const the3 = 'three';
console.log(the3);
