'use strict';

console.log('--- in execution phase ---');

/*
  environment: chrome

  name: ReferenceError
  message: ReferenceError: Cannot access 'tomatoes' before initialization

  location: 25

  life cycle:

  the mistake: initialization after console.log(tomatoes)

  the fix(es): let tomatoes = 'fresh';

console.log(tomatoes);
*/
let tomatoes = 'fresh';

console.log(tomatoes);
