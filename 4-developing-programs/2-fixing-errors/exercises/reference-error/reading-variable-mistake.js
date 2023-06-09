'use strict';

/*
  environment: Chrome

  name: ReferenceError
  message: 'tomatoes' before initialization

  callstack:  at <anonymous>:20:13
    at evaller.onload (study-with.js:63:34)
    at Object.console (study-with.js:65:17)
    at JavaScriptFE.studyWith (javascript-class.js:732:29)
    at HTMLButtonElement.<anonymous> (javascript-class.js:390:49)

  life cycle: Execution phase

  the mistake: using variable tomatoes before initialization

  the fix(es): put variable tomatoes before using it
*/

console.log(tomatoes);

let tomatoes = 'fresh';
