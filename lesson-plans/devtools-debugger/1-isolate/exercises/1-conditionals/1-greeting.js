'use strict';

let fn = prompt('Please enter your first name:');
let ln = prompt('Please enter your last name:');

let greeting = '';
if (fn === null && ln === null) {
  greeting = 'hello anonymous.';
} else if (fn === null) {
    greeting = 'hello ' + ln + ' !';

} else {
  greeting = 'hello ' + fn + ' ' + ln + ' !';
}

alert(greeting);

/*  ===== Challenges =====
  - Ask the user for their first and last names.
  - Greet them with their full name.
*/
