'use strict';

/*


  Data In: user input

  Data Out: if we enter less than or equal to 4 the prompt says 'enter something longer than 4 characters'

  Test Cases: 
   - cat --> 'enter something longer than 4 characters'
   - hello --> 'hello'

*/
let input = '';
while (input !== null && input.length <= 4) {
input = prompt('enter something longer than 4 characters')
}
alert(input);
