'use strict';

console.log('--- in execution phase ---');

/*
  environment: chrome

  name: SyntaxError
  message:Unexpected string

  location:at string-mistake-2.js:23:42

  life cycle: execution

  the mistake:using only ' to surround strings

  the fix(es): use this "" after use ' to make string in one
*/

const quotesInQuotes = "remind yourself ''i can do this!'' at least once a day";
console.log(quotesInQuotes);
