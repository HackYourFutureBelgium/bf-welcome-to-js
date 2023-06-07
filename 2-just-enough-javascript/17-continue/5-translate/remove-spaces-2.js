// #todo

'use strict';

/*

  Data In: any text with space(s)

  Data Out: text without space(s)

  Test Cases:

*/

/* ---   ?   --- */

// input <- null

// WHILE: true
//   input <- prompt('enter something with at least one space, the spaces will be removed')
//   IF: input === null
//     alert('no escape')
//     CONTINUE
//   :END IF
//   IF: input === ''
//     alert('gotta enter something')
//     CONTINUE
//   :END IF
//   IF: !input.includes(' ')
//     alert('there must be a space!')
//     CONTINUE
//   :END IF
//   BREAK
// :END WHILE

/* ---   ?   --- */

// spaceless <- ''

// FOR: char OF input
//   IF: char !== ' '
//     spaceless <- spaceless + char
//   :END IF
// :END FOR-OF

/* ---   ?   --- */

// alert(input + ' -> ' + spaceless)

let input = null;

while (true) {
  input = prompt(
    'enter something with at least one space, the spaces will be removed',
  );

  if (input === null) {
    alert('no escape');
    continue;
  } else if (input === '') {
    alert('gotta enter something');
    continue;
  } else if (!input.includes(' ')) {
    alert('there must be a space!');
    continue;
  } else {
    break;
  }
}

let spaceless = '';

for (const char of input) {
  if (char !== ' ') {
    spaceless += char;
  }
}

alert(input + ' -> ' + spaceless);