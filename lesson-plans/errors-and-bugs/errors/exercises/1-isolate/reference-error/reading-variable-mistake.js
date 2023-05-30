'use strict';

console.log('--- in execution phase ---');

/*
  environment: Chrome

  name: ReferenceError
  message: Cannot access 'tomatoes' before initialization

  location: line 20

  life cycle:

  the mistake: not declare the value 'tomatoes'

  the fix(es): declare the value 'tomatoes'
*/
let tomatoes;

console.log(tomatoes);

tomatoes = 'fresh';

console.log(tomatoes);