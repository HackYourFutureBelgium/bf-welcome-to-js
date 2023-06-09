

'use strict';

console.log('--- in execution phase ---');


/*
  environment: chrome

  name: syntax error
  message: unexpected token '('

  location: 27

  life cycle: Exceutionphase

  the mistake: used else two times in line 27 and 29

  the fix(es): add  else if instead  of else in line 27
*/

let userName = 'indrogo';

if (userName.length < 3) {
  console.log('too short');
} else if(userName.length < 5) { // syntax error: used else instead of else if
  console.log('just right');
} else {
  console.log('too long');
}


