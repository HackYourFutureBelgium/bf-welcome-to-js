// #todo

'use strict';
/*


  Data In:

  Data Out:

  Test Cases:

*/

/* ---   gather user input   --- */

//let input = prompt('enter anything longer than 5 characters')

//*---create a message-- *//
//let message = 'Your input is ';

// IF: input !== null
//IF: input.length < 5
/* ---   ?   --- */
//     message <- 'too short'
//   ELSE: IF: input.length > 5
/* ---   ?   --- */
//     message <- 'long enough'
//   ELSE:
/* ---   ?   --- */
//     message <- 'exactly 5!'
//   :END IF
// ELSE:
/* ---   ?   --- */
//   message <- 'you canceled :('
// :END IF

/* ---   ?   --- */

// alert(message)

/*


  Data In: user input

  Data Out: preethi
            hi
            laugh
          
  Test Cases: preethi --> your input is long enough
               hi--> your input is too short
               laugh --> your input is exactly 5
                --> your input is cancelled :(
                 */




/* ---   gather user input   --- */

let input = prompt('enter anything longer than 5 characters');

/* --- create a message --- */
let message = 'Your input is ';
// IF: input !== null
if (input !== null) {
  //IF: input.length < 5
  if (input.length < 5) {
    message += 'too short';
    //   ELSE: IF: input.length > 5
  } else if (input.length > 5) {
    //     message <- 'long enough'
    message += 'long enough';
  } else {
    //     message <- 'exactly 5!'
    message += 'exactly 5!';
  }
} else {
  //   message <- 'you canceled :('
  message += 'you canceled :(';
}

alert(message);
