'use strict';

/*
  environment: Chrome

  name: SyntaxError
  message: Unexpected token '{'

  callstack: at evaller.onload (study-with.js:63:34)
             at Object.console (study-with.js:65:17)
             at JavaScriptFE.studyWith (javascript-class.js:732:29)
             at HTMLButtonElement.<anonymous> (javascript-class.js:390:49)

  life cycle: Execution phase

  the mistake: key word mistake

  the fix(es): use else if instead else
*/

const userName = 'indrogo';

if (userName.length < 3) {
  console.log('too short');

} else if (userName.length < 5) {
  console.log('just right');

} else {
  console.log('too long');
}


