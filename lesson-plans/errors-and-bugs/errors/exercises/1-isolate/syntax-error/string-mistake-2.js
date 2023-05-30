'use strict';

console.log('--- in execution phase ---');

/*
  environment: Chrome

  name: SyntaxError
  message: expected string

  location: line 23

  life cycle: execution

  the mistake: unwanted string

  the fix(es): remove unwanted string
*/

const quotesInQuotes = 'remind yourself "i can do this!" at least once a day';
