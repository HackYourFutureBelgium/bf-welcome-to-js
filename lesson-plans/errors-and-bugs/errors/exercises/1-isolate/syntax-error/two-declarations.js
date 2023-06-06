'use strict';

console.log('--- in execution phase ---');

/*
  environment: chrome

  name: syntax error
  message: Identifier 'tree' has already been declared

  location: 22

  life cycle:Exceutionphase

  the mistake: cannot declare a variable twice

  the fix(es):reassigned the value
*/

let tree = 'oak';

tree = 'birch'; //  let tree = 'brich'
