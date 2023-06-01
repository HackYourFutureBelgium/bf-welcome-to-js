'use strict';

console.log('--- in execution phase ---');

/*
  environment: chrom

  name:
  message: SyntaxError: Unexpected token '{'
    at evaller.onload

  location: 27

  life cycle: 

  the mistake: 28 line: else -> else if

  the fix(es): } else if (userName.length < 5) {
*/

let userName = 'indrogo';

if (userName.length < 3) {
  console.log('too short');
} else if (userName.length < 5) {
  console.log('just right');
} else {
  console.log('too long');
}
