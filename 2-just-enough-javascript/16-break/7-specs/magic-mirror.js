// #todo

'use strict';

/* Challenge: write this program using at least 1 `break`

  a user can input a non-empty string and only the letters will be turned into a mirror
    - given the user cancels, they will be prompted again
    - given the input is empty, they will be prompted again
    - given their input is valid, the loop will exit and the mirrored letters will be displayed

  test cases:
    only letters:
      'abc' -> 'abc|cba'
      'hello' -> 'hello|olleh'
      'JavaScript' -> 'JavaScript|tpircSavaJ'
    only not-letters:
      '.(-).' -> '|'
      '-=>|<=-' -> '|'
      '. - ^ - .' -> '|'
    mixed letters and not-letters:
      'hello!' -> 'hello|olleh'
      'good bye?' -> 'goodbye|eybdoog'
      'let input = ""' -> 'letinput|tupnitel'

*/

console.log('--- begin program ---');

/* --- gather user input --- */

let input = '';
let output = '';
while (true) {
  input = prompt('Enter some text');
  console.log('input:', input);

  if (!input) {
    continue;
  }

  if (input.trim().length === 0) {
    continue;
  }

 input = input.replace(/[,;.?!:=]/g, "");
  output = input + ' | ' + input.split('').reverse().join('');
  break;
}

/* --- alert the result --- */

console.log('output:', output);
alert(output);

console.log('--- end program ---');
