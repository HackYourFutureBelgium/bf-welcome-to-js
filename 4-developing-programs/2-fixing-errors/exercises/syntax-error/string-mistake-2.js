'use strict';

/*
  environment: Chrome

  name: SyntaxError
  message: Unexpected identifier 'anchorName'

  callstack: at evaller.onload (study-with.js:63:34)
             at Object.console (study-with.js:65:17)
             at JavaScriptFE.studyWith (javascript-class.js:732:29)
             at HTMLButtonElement.<anonymous> (javascript-class.js:390:49)

  life cycle: Execution phase

  the mistake: string mistake

  the fix(es): using backticks instead double quotation marks
*/

const anchorName = '#Home';

const innerHtml = `<p>Click here to <a href="${anchorName}">go home</a></p>`;



