'use strict';

console.log('--- in execution phase ---');

/*
  environment: chrome

  name:SyntaxError
  message:Identifier 'tree' has already been declared

  location:at two-declarations.js:22:5)

  life cycle: execution

  the mistake: the variable was declared twice

  the fix(es): declare one/ change the second variable name
*/

let tree = 'oak';

let trees = 'birch';

console.log(tree, trees);
