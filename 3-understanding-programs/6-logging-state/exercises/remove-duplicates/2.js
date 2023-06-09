'use strict';

/*
  log every character that is added to the final string
*/

let phrase = null;
while (phrase === null) {
  phrase = prompt(
    'enter something with duplicated letters, they will be removed',
  );
}

let previous = '';

let noRepetitions = '';
for (const next of phrase) {
  if (next !== previous) {
    noRepetitions = noRepetitions + next;

     console.log(next); // log every character added to the final string

     console.log('Character added:', next);

  }
  previous = next;
}

alert(noRepetitions);
