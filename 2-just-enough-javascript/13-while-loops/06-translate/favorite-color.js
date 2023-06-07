'use strict';

/*
  Data In: user input

  Data Out:
   - if user press 'cancel' its shows 'there is no escape'
   - if user press 'ok' its shows 'is this correct? ""'
   - if user enter something its shows 'your favorite color is something'

  Test Cases:
   - press cancel --> 'there is no escape'
   - press ok without enter anything --> 'is this correct? ""'
   - enter 'red' --> 'your favorite color is red'
*/

let message = 'your favorite color is ';
let unconfirmed = true;

while (unconfirmed) {
  let input = prompt('what is your favorite color?');
  if (input === null) {
    alert('there is no escape');
  } else if (input === '') {
    alert('is this correct? "' + input + '"');
  } else {
    message = message + input;
    unconfirmed = false;
  }
}

alert(message);

/* ---   ?   --- */

// message <- 'your favorite color is '

// unconfirmed <- true

// WHILE: unconfirmed
//   input <- prompt('what is your favorite color?')
//   IF: input === null
//     alert('there is no escape')
//   ELSE:
/* ---   ?   --- */
//     confirmed <- confirm('is this correct? "' + input + '"')
//     IF: confirmed === true
//       message <- message + input
//       unconfirmed <- false
//     :END IF
//   :END IF
// :END WHILE

/* ---   ?   --- */

// alert(message)
