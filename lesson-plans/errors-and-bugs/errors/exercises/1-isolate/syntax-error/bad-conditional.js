'use strict';

console.log('--- in execution phase ---');

/*
  environment: Chrome

  name: SyntaxError
  message: expected token '{'

  location: line 27

  life cycle: execution

  the mistake: use else twise

  the fix(es): use else if instead of else
*/

let userName = 'indrogo';

if (userName.length < 3) {
  console.log('too short');
} else if (userName.length < 5) {
  console.log('just right');
} else {
  console.log('too long');
}
