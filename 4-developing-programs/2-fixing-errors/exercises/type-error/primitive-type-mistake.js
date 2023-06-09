'use strict';

/*
  environment: Chrome

  name: TypeError
  message: Cannot read properties of null (reading 'length')

  callstack: at <anonymous>:20:23
             at evaller.onload (study-with.js:63:34)
             at Object.console (study-with.js:65:17)
             at JavaScriptFE.studyWith (javascript-class.js:732:29)
             at HTMLButtonElement.<anonymous> (javascript-class.js:390:49)

  life cycle: Execution phase

  the mistake: primitive type mistake

  the fix(es): add string to null
*/

const userInput = 'null';

console.log(userInput.length);

