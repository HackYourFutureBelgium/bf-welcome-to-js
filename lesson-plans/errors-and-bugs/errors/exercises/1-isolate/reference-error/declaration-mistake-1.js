'use strict';

console.log('--- in execution phase ---');

/*
  environment: chrome

  name:ReferenceError
  message:welf is not defined


  location:21

  life cycle:excution

  the mistake:undeclare variable wolf

  the fix(es):declare the variable using const
*/

const welf = 'ingrad';

console.log(welf);
