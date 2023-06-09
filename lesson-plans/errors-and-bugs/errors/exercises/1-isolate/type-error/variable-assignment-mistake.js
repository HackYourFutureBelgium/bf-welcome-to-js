

'use strict';

console.log('--- in execution phase ---');


/*
  environment: chrome

  name: syntax error
  message:invalid left hand side in assignment

  location: 25 

  life cycle:Exceution phase

  the mistake: value before variable

  the fix(es): variable before value
*/

let isHappy = false;

  isHappy = true; // true = isHappy




