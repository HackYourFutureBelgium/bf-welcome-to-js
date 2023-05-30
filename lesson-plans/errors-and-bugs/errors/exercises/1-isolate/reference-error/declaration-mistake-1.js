'use strict';

console.log('--- in execution phase ---');

/*
  environment: Chrome

  name: ReferenceError
  message: ReferenceError: welf is not defined

  location: VM81:20

  life cycle:

  the mistake: there is no const and let

  the fix(es): enter const or let
*/

let welf = 'ingrad';

console.log(welf);
