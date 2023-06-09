'use strict';

/* generic

  _a -> shortList:
    Represents a list of strings with short length.

  _b -> mediumList:
    Represents a list of strings with medium length.

  _c -> longList:
    Represents a list of strings with long length.

  _d -> continueEntering:
    Represents a boolean flag indicating whether the user wants to continue entering strings.

  _e -> inputString:
    Represents the string entered by the user.

*/

alert(
  'enter many strings, they will be sorted by length.\n\n' +
    'when you are done entering strings you can "cancel" or "escape"',
);

let shortList = 'short:';
let mediumList = 'medium:';
let longList = 'long:';

let continueEntering = true;
while (continueEntering) {
  let inputString = prompt('enter something');

  if (inputString === null) {
    continueEntering = false;
  } else if (inputString.length < 5) {
    shortList = shortList + '\n- "' + inputString + '"';
  } else if (inputString.length < 10) {
    mediumList = mediumList + '\n- "' + inputString + '"';
  } else {
    longList = longList + '\n- "' + inputString + '"';
  }
}

alert(shortList + '\n\n' + mediumList + '\n\n' + longList);