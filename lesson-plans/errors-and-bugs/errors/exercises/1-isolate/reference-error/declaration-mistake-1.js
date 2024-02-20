'use strict';

console.log('--- in execution phase ---');

/*
  environment: chrome

  name:ReferenceError

  message: welf is not defined

  location: declaration-mistake-1.js:21:6

  life cycle: execution

  the mistake: undeclared variable

  the fix(es): declare the variable welf 
*/

const welf = 'ingrad';

console.log(welf);
