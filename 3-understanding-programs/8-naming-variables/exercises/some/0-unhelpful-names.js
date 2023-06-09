'use strict';
/*
  _a:
    declaration:
      init: no
      types: unknown
      scopes: global
    reads:
      scopes: none
      checks: none
    assignments:
      types: unknown
      scopes: none

  _b:
    declaration:
      init: yes
      types: string
      scopes: global
      reads:
      scopes: none
      checks: none
     assignments:
      types: string
      scopes: none

  _c:
    declaration:
      init: yes
      types: boolean
      scopes: local
      reads:
      scopes: local
      checks: none
      assignments:
      types: boolean
      scopes: none

  _d:
     declaration:
      init: no
      types: unknown
      scopes: local
      reads:
      scopes: local
      checks: none
      assignments:
      types: unknown
      scopes: none

 _e:
      declaration:
      init: no
      types: unknown
      scopes: local
    reads:
      scopes: none
      checks: none
    assignments:
      types: unknown
      scopes: none

*/

let _a = null;
while (_a === null) {
  _a = prompt(
    'enter some text, the program will check if it contains any vowels',
  );
}

let _b = 'aeiou';

let _c = false;
for (let _d of _a) {
  let _e = _d.toLowerCase();
  if (_b.includes(_e)) {
    _c = true;
    break;
  }
}

alert(_c);
