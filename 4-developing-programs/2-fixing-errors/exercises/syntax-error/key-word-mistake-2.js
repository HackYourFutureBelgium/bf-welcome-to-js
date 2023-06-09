'use strict';

/*
  environment: Chrome

  name: SyntaxError
  message: Unexpected token 'for'

  callstack: at evaller.onload (study-with.js:63:34)
             at Object.console (study-with.js:65:17)
             at JavaScriptFE.studyWith (javascript-class.js:732:29)
             at HTMLButtonElement.<anonymous> (javascript-class.js:390:49)

  life cycle: Executed phase

  the mistake: key word mistake

  the fix(es): remove const and =
*/

 for  (let i = 0; i < 5; i++) {
  console.log(i);
}


