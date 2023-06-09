'use strict';

/*
  _a:
    declaration:
      init: yes
      types: null
      scopes: global
    reads:
      scopes: while loop
      checks: while condition
    assignments:
      types: -
      scopes: while loop

  _b:
    declaration:
      init: yes
      types: string
      scopes: global
    reads:
      scopes: for of loop
      checks: 
    assignments:
      types: -
      scopes: for of loop

  _c:
    declaration:
      init: yes
      types: unknown
      scopes: for of loop
    reads:
      scopes: for of loop
      checks: 
    assignments:
      types: 
      scopes: for of loop

  _d:
    declaration:
      init: yes
      types: boolean
      scopes: for of loop
    reads:
      scopes: for of loop
      checks: 
    assignments:
      types: 
      scopes: for of loop

*/

let _a = null;
while (_a === null) {
  _a = prompt('enter some text, the program will remove all vowels');
}

let _b = '';
for (let _c of _a) {
  let _d = 'aeiou'.includes(_c.toLowerCase());
  if (!_d) {
    _b = _b + _c;
  }
}

alert(_b);