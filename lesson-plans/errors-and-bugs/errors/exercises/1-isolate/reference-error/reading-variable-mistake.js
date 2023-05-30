'use strict';

console.log('--- in execution phase ---');

/*
  environment: chrome

  name:ReferenceError
  message: tomatoe is not defined

  location:20

  life cycle:

  the mistake:using tomates before its declared

  the fix(es):declaire tomatoe first and use it in console
*/

let tomatoes = 'fresh';

console.log(tomatoes);


