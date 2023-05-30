'use strict';

console.log('--- in execution phase ---');

/*
  environment: chrom

  name: SyntaxError
  message: SyntaxError: Identifier 'tree' has already been declared

  location: 22

  life cycle:

  the mistake: 'tree' has already been declared

  the fix(es): tree = 'birch';
*/

let tree = 'oak';

tree = 'birch';
