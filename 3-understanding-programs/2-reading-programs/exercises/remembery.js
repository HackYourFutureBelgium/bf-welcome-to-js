'use strict';

/* -- 1. show the instructions --

  - are there any variables used in this goal?
     - no there is no variable
*/

alert(`Guess 3 phrases in 3 tries

  Player 1:
    enter three phrases

  Player 2:
    see the three phrases in order
    then enter them back in order
    you will get one point for each correct guess
`);

/* -- 2. gather player 1's phrases --

  - what types can be assigned to the `phrase` variables?
     - const type
  - is it possible that all 3 `phrase` variables have the same value?
     - yes its possible to ente the same value to all 3 'phrase'.
*/

alert('Player 2: go hide');

const phrase1 = prompt('Player 1, enter your first phrase:');
const phrase2 = prompt('Player 1, enter your second phrase:');
const phrase3 = prompt('Player 1, enter your third phrase:');

alert('Player 2, get back here');

/* -- 3. player 2 tries to remember the phrases --

  - can you know what values will assigned to the `guess` variables without running the program?
    - No, we don't know the values without runing the program
  - what happens if a user cancels all of their guesses?
    - If they cancel, the score should be '0'
  - how is this goal of the program different from goal 2?
    - In goel 2 -- player 1 enter the answers
    - this goel -- player 2 remember the answers
*/

alert(
  'Player 2, remember these:' +
    '\n1. "' +
    phrase1 +
    '"' +
    '\n2. "' +
    phrase2 +
    '"' +
    '\n3. "' +
    phrase3 +
    '"',
);

const guess1 = prompt('Player 2, guess the first phrase:');
const guess2 = prompt('Player 2, guess the second phrase:');
const guess3 = prompt('Player 2, guess the third phrase:');

/* -- 4. player 2's score is calculated --

  - which operator is used in the conditional checks?
    - 'if' conditional
  - what are the possible scores a user can earn?
    - The possible scores is '0,1,2,3'
  - what is the scope of the `points` variable?
    - the condition will compare the 'guess & phrase'
  - is the `points` variable used in any other parts of the program?
    - no
*/

let points = 3;

if (guess1 !== phrase1) {
  points = points - 1;
}

if (guess2 !== phrase2) {
  points = points - 1;
}

if (guess3 !== phrase3) {
  points = points - 1;
}

/* -- 5. show player 2's final score -- */

alert("player 2's score: " + points);
