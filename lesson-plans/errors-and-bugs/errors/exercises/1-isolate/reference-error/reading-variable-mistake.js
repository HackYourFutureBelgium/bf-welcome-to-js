'use strict';

console.log('--- in execution phase ---');

/*
  environment: chrome 

  name: ReferenceError
  message: cannot access 'tomatoes' before intilization

  location: 20

  life cycle: Exceution phase

  the mistake: using tomatoes before it is declare

  the fix(es): declare tomatoes before using it in console
*/

let tomatoes = 'fresh';
console.log(tomatoes); // ReferenceError: tomatoes is defined


