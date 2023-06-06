// #todo

'use strict';

/* Be Curious


  Data In:

  Data Out:

  Test Cases:

*/

/* ---  ?  --- */

// input <- null
// WHILE: input === null
//   input <- prompt('enter something, it will become curious')
// :END WHILE

/* ---  ?  --- */

// output <- input
// IF: input[input.length - 1] !== '?'
//   output <- output + '?'
// :END IF

/* ---  ?  --- */

// alert(output)


'use strict';


/* Be Curious

  Data In: user input
  Data Out: "How are you?"
  
  

  Test Cases:  how are you ---> how are you?

*/

/* --- gather user input   --- */
let input = null;
while (input === null) {
  input = prompt('Enter something, it will become curious');
}

/* ---  create a message  --- */

let output = input;
if (output[output.length - 1] !== '?') {
  output += '?';
}

/* ---  alert the output  --- */

alert(output);