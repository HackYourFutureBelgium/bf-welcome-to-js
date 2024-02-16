/* 'use strict';

let input = null;
while (input === null || input.length !== 5) {
  input = prompt('enter something with 5 characters:');
}

let message = 'thank you for "' + input + '"!';

alert(message); */

/*  ===== Challenges =====
  - Change the condition to 10 characters.
  - Make the user write "everything" in 2 steps.
*/

'use strict';

let user;

while (!user || user.length !== 10) {
  const input1 = prompt('enter something with 5 characters:');
  const input2 = prompt('enter something again with 5 characters:');

  if (input1 && input2) {
    user = input1 + input2;
  } else {
    alert('fill out the 2 prompt');
  }
}

alert('Thank you for your input : ' + user);
