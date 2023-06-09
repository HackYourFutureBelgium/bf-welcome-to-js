'use strict';

/*
  environment:

  name: ReferenceError
  message: isValidUserName is not defined

  callstack: at <anonymous>:29:57
    at evaller.onload (study-with.js:63:34)
    at Object.console (study-with.js:65:17)
    at JavaScriptFE.studyWith (javascript-class.js:732:29)
    at HTMLButtonElement.<anonymous> (javascript-class.js:390:49)

  life cycle: Executions phase

  the mistake: declare an initialize isValidUserName in local scope

  the fix(es): declare an initialize isValidUserName in global scope
*/

const userName = 'chiobin';
console.log('userName:', typeof userName, userName);

if (userName.length > 4) {
  const isValidUserName = true;
} else {
  const isValidUserName = false;
}

console.log('isValidUserName:', typeof isValidUserName, isValidUserName);
