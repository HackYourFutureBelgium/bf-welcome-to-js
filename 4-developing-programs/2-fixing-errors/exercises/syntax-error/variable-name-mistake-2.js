'use strict';

/*
  environment: Chrome

  name: SyntaxError
  message: Identifier 'undefined' has already been declared

  callstack: at evaller.onload (study-with.js:63:34)
             at Object.console (study-with.js:65:17)
             at JavaScriptFE.studyWith (javascript-class.js:732:29)
             at HTMLButtonElement.<anonymous> (javascript-class.js:390:49)

  life cycle: Executions phase

  the mistake: variable name mistake

  the fix(es): change name of variable
*/

const three = 'three';
