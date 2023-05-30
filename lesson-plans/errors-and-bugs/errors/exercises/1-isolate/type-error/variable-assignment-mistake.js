'use strict';

console.log('--- in execution phase ---');

/*
  environment: chrom

  name: SyntaxError
  message: SyntaxError: Invalid left-hand side in assignment

  location: 25

  life cycle:

  the mistake: assigned value to the variable 

  the fix(es): isHappy = true;
*/

let isHappy = false;

isHappy = true;
