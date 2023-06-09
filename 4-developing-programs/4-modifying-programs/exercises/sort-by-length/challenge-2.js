'use strict';

/*
  modify the program so that:
    a short string is 3 characters long OR fewer
    a long string is LONGER than 6 characters
*/

alert(
  'enter many strings, they will be sorted by length.\n\n' +
    'when you are done entering strings you can "cancel" or "escape"',
);

let shortStrings = 'short:';
let longStrings = 'long:';

while (true) {
  const input = prompt('enter something');

  if (input === null) {
    break;
  }

  if (input.length <= 3) {
    shortStrings = shortStrings + '\n- "' + input + '"';
  }

  if (input.length > 6) {
    longStrings = longStrings + '\n- "' + input + '"';
  }
}

alert(shortStrings + '\n\n' + longStrings);

