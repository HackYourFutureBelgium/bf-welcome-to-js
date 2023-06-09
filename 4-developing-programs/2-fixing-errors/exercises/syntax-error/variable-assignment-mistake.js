'use strict';

/*
  environment: Chrome

  name: SyntaxError
  message: Invalid left-hand side in assignment

  callstack: at evaller.onload (study-with.js:63:34)
             at Object.console (study-with.js:65:17)
             at JavaScriptFE.studyWith (javascript-class.js:732:29)
             at HTMLButtonElement.<anonymous> (javascript-class.js:390:49)

  life cycle: Execution phase

  the mistake: variable assignment mistake

  the fix(es): change side in assignment
*/


let favoriteNumber = 4;
 favoriteNumber = 3;


