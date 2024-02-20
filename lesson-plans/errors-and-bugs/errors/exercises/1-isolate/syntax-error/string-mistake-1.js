'use strict';

console.log('--- in execution phase ---');

/*
  environment:chrome

  name:SyntaxError
  message:Invalid or unexpected token

  location: at string-mistake-1.js:23:11

  life cycle:execution

  the mistake: using ' ' / space push ,to create multlines string

  the fix(es): use ` instaed of ' ,or deleted the space 
*/

const a = `this is
two lines`;
console.log(a);
