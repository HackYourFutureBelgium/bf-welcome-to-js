// #todo

'use strict';

/*


  Data In:

  Data Out:

  Test Cases:

*/

/* ---   ?   --- */

let message = 'your favorite color is ';

let unconfirmed = true;

while (unconfirmed) {
  input = prompt('what is your favorite color?');
  if (input === null) {
    alert('there is no escape');
  } else {
    /* ---   ?   --- */
    confirmed = confirm('is this correct? "' + input + '"');
  }
  if (confirmed === true) {
    message = message + input;
    unconfirmed = false;
  }
}

/* ---   ?   --- */

alert(message);
