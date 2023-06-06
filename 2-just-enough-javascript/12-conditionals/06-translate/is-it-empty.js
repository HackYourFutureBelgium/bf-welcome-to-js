// #todo

'use strict';

/*


  Data In: user input

  Data Out:

  Test Cases:

*/

/* ---   ?   --- */

 //input <- prompt('do whatever you want')

/* ---   ?   --- */

// message <- 'your input is '

// IF: input === null
/* ---   ?   --- */
//   message <- message + 'null'
// ELSE:
/* ---   ?   --- */
//   maybeNot <- ''
//   IF: input.length !== 0
/* ---   ?   --- */
//     maybeNot <- 'not '
//   :END IF
//   message <- message + maybeNot + 'empty'
// :END IF

/* ---   alert ouput   --- */

// alert(message)



/*


  Data In: user input

  Data Out: 1. Hello
            2. ''

  Test Cases: Hello -> your input is not empty
               '' --> your input is empty
*/

/* ---   gather user input  --- */

let input = prompt('do whatever you want')
/*---create a message ----*/

 let message = 'Your input is ';

// IF: input === null
if (input === null) {
  /* ---   checks if the input is null  --- */
  message = message + 'null';
} else {
  /* ---   check if it is empty string   --- */
  let maybeNot = '';
  // IF: input.length !== 0
  if (input.length !== 0) {
    maybeNot = 'not ';
  }
  message = message + maybeNot + 'empty';
}

/* ---   alert output   --- */

alert(message);
