'use strict';

console.log('--- in execution phase ---');

/*
  environment: chrome

  name: ReferenceError
  message: ReferenceError: welf is not defined

  location: 20

  life cycle:

  the mistake: welf missed the declaration

  the fix(es): let welf = 'ingrad';
*/

let welf = 'ingrad';

console.log(welf);
