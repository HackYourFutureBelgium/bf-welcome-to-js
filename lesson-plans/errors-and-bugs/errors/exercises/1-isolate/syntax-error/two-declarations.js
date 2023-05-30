'use strict';

console.log('--- in execution phase ---');

/*
  environment: Chrome

  name: SyntaxError
  message: entifier 'tree' has already been declared

  location: line 22

  life cycle: execution

  the mistake: two declaration in the variable name

  the fix(es): remove the unwanted declaration
*/

let tree = 'oak';

tree = 'birch';
