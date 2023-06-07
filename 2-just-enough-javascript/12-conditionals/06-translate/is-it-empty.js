'use strict';

/*


  Data In:

  Data Out:

  Test Cases:

*/

/* declare a variable input and initialize it to the value */

let input = prompt('do whatever you want');

/* declare a variable message and initialize it to the value 'your input is '*/

let message = 'your input is ';

if (input === null) {
  /* declare a variable maybeNot and initialize it to the value '' */
  let maybeNot = '';
  if (input.length !== 0) {
    /* reassign the variable maybenot and initialize it to the value 'not ' */
    maybeNot = 'not ';
  }
  // reassign the variable message and initialize it to the value 'message + maybeNot + 'empty''//
  message = message + maybeNot + 'empty';
} else {
  // reassign the variable message and initialize it to the value 'message + 'null''//
  message = message + 'null';
}
// read the value message//
alert(message);
