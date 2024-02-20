'use strict';

console.log('--- in execution phase ---');

/*
  environment:Chrome

  name: ReferenceError
  message: Cannot access 'tomatoes' before initialization

  location: reading-variable-mistake.js:20:13

  life cycle: execution

  the mistake: reading the variable tomatoes before declare it

  the fix(es): declare the variable then read it
*/

let tomatoes = 'fresh';

console.log(tomatoes);
