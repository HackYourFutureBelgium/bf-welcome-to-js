'use strict';

/*


  Data In: user input

  Data Out: 
   - enter 'hello' the message its shows 'hello to you too'
   - if not enter 'hello' the prompt shows 'say hello'

  Test Cases:
   - world --> 'say hello'
   - hello --> 'hello to you too!'

*/
let input = '';
while (input !== 'hello') {
  input = prompt('say hello');
}
alert('hello to you too!');

