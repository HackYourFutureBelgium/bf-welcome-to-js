'use strict';

/*
  refactor this program so it uses a `while` loop instead of a `for-of` loop
*/

let toBeFrogged = null;

while (toBeFrogged === null) {
  toBeFrogged = prompt(
    'enter some text to frogify.\n' +
      '- "f" will be replaced with "frog"\n' +
      '- "F" will be replaced with "FROG"',
  );
}

let frogged = '';

let i = 0;
while (i < toBeFrogged.length) {
  const char = toBeFrogged[i];
  if (char === 'f') {
    frogged = frogged + 'frog';
    i++;
    continue;
  }
  if (char === 'F') {
    frogged = frogged + 'FROG';
    i++;
    continue;
  }
  frogged = frogged + char;
  i++;
}

alert(frogged);
