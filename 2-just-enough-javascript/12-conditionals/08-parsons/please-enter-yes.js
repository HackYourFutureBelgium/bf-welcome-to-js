'use strict';

/* parsons-collapse: hint
  1. gather user input
  2. check if the input is exactly "yes"
  3. alert your message to the user
*/

let input = prompt('please enter "yes"');

let output = '';
if (input.toLowerCase() === 'yes') {
  output = 'you entered "yes"';
} else {
  output = '"' + input + '" is not "yes"';
}

alert(output);

// begin distractors

/*if (input.toLowerCase() === 'yes') { // distractor

} else { // distractor

output = 'you entered "yes"'; // distractor

output = '"' + input + '" is not "yes"'; // distractor*/
