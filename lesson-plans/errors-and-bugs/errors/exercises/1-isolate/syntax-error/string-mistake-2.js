

'use strict';

console.log('--- in execution phase ---');


/*
  environment: chrome

  name:syntax error
  message: unexpected string

  location: 23

  life cycle:Eceutionphase

  the mistake: '' is used twice 

  the fix(es): added ""
*/

const quotesInQuotes = 'remind yourself "i can do this!"  at least once a day';


// 'remind yourself'i can do this! 'at least once a day';