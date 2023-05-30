'use strict';

console.log('--- in execution phase ---');

/*
  environment: chrome

  name:SyntaxError
  message: Unexpected token 

  location:27

  life cycle:

  the mistake:

  the fix(es):
*/

let userName = 'indrogo';

if (userName.length < 3) {
  console.log('too short');
} else if (userName.length < 5) {
  console.log('just right');
} else {
  console.log('too long');
}
