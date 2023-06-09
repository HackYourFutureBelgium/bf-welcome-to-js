'use strict';

/*
  environment: Chrome

  name: SyntaxError
  message: Unexpected token '='

  callstack: at evaller.onload (study-with.js:63:34)
    at Object.console (study-with.js:65:17)
    at JavaScriptFE.studyWith (javascript-class.js:732:29)
    at HTMLButtonElement.<anonymous> (javascript-class.js:390:49)

  life cycle: Execution phase

  the mistake: variable declaration mistake

  the fix(es): adding name to variable
*/

const learn = 'always be learning';
