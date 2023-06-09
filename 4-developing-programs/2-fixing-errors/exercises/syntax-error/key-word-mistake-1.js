'use strict';

/*
  environment: Chrome

  name: SyntaxError
  message: Unexpected strict mode reserved word

  callstack: at evaller.onload (study-with.js:63:34)
             at Object.console (study-with.js:65:17)
             at JavaScriptFE.studyWith (javascript-class.js:732:29)
             at HTMLButtonElement.<anonymous> (javascript-class.js:390:49)

  life cycle: Execution phase

  the mistake: key word mistake

  the fix(es): used for instead if
*/

for (let i = 0; i < 5; i++) {
  console.log(i);
}


