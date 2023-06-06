'use strict';

console.log('--- in execution phase ---');

/*
  environment: chrome

  name: reference error
  message: welf is not defined

  location: 20

  life cycle:

  the mistake: didn't assign a value to the variable welf without declaring it.

  the fix(es): declare the welf variable using the let.
*/

let welf = 'ingrad';

console.log(welf);
