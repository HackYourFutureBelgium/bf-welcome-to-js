'use strict';

/*
  environment: Chrome

  name: ReferenceError
  message: Cannot access 'isValidUserName' before initialization

  callstack: at <anonymous>:24:19
    at evaller.onload (study-with.js:63:34)
    at Object.console (study-with.js:65:17)
    at JavaScriptFE.studyWith (javascript-class.js:732:29)
    at HTMLButtonElement.<anonymous> 

  life cycle: Execution phase

  the mistake: using let isValidUserName after resign

  the fix(es): put isValidUsernName before resign
*/


const userName = 'chiobin';
console.log('userName:', typeof userName, userName);

if (userName.length > 3) {
  isValidUserName = true;
}

let isValidUserName;

if (userName.length <= 3) {
  isValidUserName = false;
}

console.log('isValidUserName:', typeof isValidUserName, isValidUserName);
