'use strict';

/*


  Data In:

  Data Out:

  Test Cases:

*/

/* ---   ?   --- */

let input = null;
while (input === null) {
  input = prompt('say hello');
}
/* ---   ?   --- */

let message = '';
if (input === 'hello') {
  message = 'hello to you too!';
} else {
  message = 'good bye';
}
/* ---   ?   --- */

alert(message);
