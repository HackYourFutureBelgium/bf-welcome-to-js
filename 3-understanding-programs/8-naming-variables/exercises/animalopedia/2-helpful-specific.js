'use strict';

/* specific

_a -> animal:
    named because it is a string of text that does not have enough animals
    more animals will be added

_b -> fact:
    named because is used in the program to represent the interesting fact about the chosen animals


_c -> isFactValid:
    named because it is a boolean which check if variable fact is valid

*/

alert(
  'Welcome to Animal Trivia Game!\n\n' +
    '- Player 1: Enter an animal\n' +
    '- Player 2: Provide an interesting fact about it'
);

let animal = null;
while (animal === null) {
  animal = prompt('Player 1, enter an animal:');
}

let fact = '';

let isFactValid = false;

while (!isFactValid) {
  fact = prompt('Player 2, tell me something interesting about ' + animal + ':');
  if (fact === '' || fact === null) {
    alert('That is not something! Please provide a valid fact.');
  } else if (fact.toLowerCase().includes(animal.toLowerCase())) {
    isFactValid = true;
  } else {
    alert('Oops! That fact is not about ' + animal + '. Please try again.');
  }
}
alert('Great! I just learned something cool about ' + animal + ':\n\n- "' + fact + '"');