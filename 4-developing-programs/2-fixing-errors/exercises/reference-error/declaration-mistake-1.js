'use strict';

/*
  environment: Chrome

  name: ReferenceError
  message: welf is not defined

  callstack: at <anonymous>:20:6
    at evaller.onload (study-with.js:63:34)
    at Object.console (study-with.js:65:17)
    at JavaScriptFE.studyWith (javascript-class.js:732:29)
    at HTMLButtonElement.<anonymous> 

  life cycle: Execution phase

  the mistake: initialization without declare

  the fix(es): add const
*/

const welf = 'ingrad';

console.log(welf);