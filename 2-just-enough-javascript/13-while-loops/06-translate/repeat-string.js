'use strict';

/*


  Data In: user input

  Data Out: repeated

  Test Cases:
   - press cancel --> 'enter some text'
   - press ok --> prompt will close
   - enter 'hello' -->
      hello
      hello
      hello
      hello
      hello

*/

/* ---   ?   --- */
let input = null
while (input === null) {
  input = prompt('enter some text');
}
let repeated = '';
let i = 0;
while (i < input.length) {
  repeated = repeated + '\n' + input;
  i = i + 1;
}
alert(repeated);

