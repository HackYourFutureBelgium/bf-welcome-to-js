// #todo

'use strict';

/*
- if you press ok without enter anything it shown 'unknown commend:""'
- if you press cancel it show 'good bye'
- if you type '-h' show the instruction about the game
- if you type 'play' the message show
    -'Player 2: look away! hide your eyes!'
    -'Player 1: enter a secret phrase'
    -'Player 1: enter a clue to help guess your number'
    - if the phase and clue is valid it goes to the player 2 if not it say 'good bye'
    - if the player 1 enter the valid text it show 'now go get Player 2'
    - then ask the secreat phase to player2
    - if the player 2 enter the correct secreat phase the message shows that the winner is player2 or its show the winner is player1
    - or else it show 'Nope, not correct.\n\ndo you want to know the secret?'
    - if press ok they show the secret phase and say 'thanks for playing, see ya'
    - if the user refuse to know the secret the prompt shows 'better luck next time' 
*/

/* Execution Paths

  try predicting how this game works just by reading the code
    how many prompts are there?
    how many choices does each user have?
    how many paths are there total?
    how would you draw a diagram of this game?

*/

/* -- prompt the user with their options -- */

const userInput = prompt(
  'Welcome!\n\n' +
    '"play": begin the game\n' +
    '"-h": read the instructions\n' +
    'escape: exit the game',
);

/* -- execute the user-selected path -- */

if (userInput === '-h') {
  /* -- display the game instructions -- */

  alert(
    'This is a two player game.\n\n' +
      'Player 1: enters a secret number, and then a clue.\n' +
      'Player 2: is shown the clue and must guess the number.\n\n' +
      'you can end the game at any point by canceling',
  );
} else if (userInput === 'play') {
  /* -- play the game -- */

  let winner = 'no one';

  /* -- player 1 enters the secret or exits the game -- */

  alert('Player 2: look away! hide your eyes!');

  let secretPhrase = '';
  while (secretPhrase === '') {
    secretPhrase = prompt('Player 1: enter a secret phrase');
  }

  if (secretPhrase === null) {
    /* -- player 1 exited the game -- */

    alert('good bye');
  } else {
    /* -- player 1 enters their clue or exits the game -- */

    let clue = '';
    while (clue === '') {
      clue = prompt('Player 1: enter a clue to help guess your number');
    }

    if (clue === null) {
      /* -- player 1 exited the game -- */

      alert('good bye');
    } else {
      /* -- player 1's turn is over -- */

      alert(
        'Player 1: you entered ...\n\n' +
          '- number: ' +
          secretPhrase +
          '\n' +
          '- clue: "' +
          clue +
          '"',
      );

      alert('now go get Player 2');

      /* -- player 2 guesses the secret number or exits the game -- */

      let guess = '';
      while (guess === '') {
        guess = prompt(
          'Player 2, Here is your clue:\n\n' +
            '- "' +
            clue +
            '"\n\n' +
            'what do you think the secret phrase is?',
        );
      }

      if (guess === null) {
        /* -- player 2 exited the game -- */

        alert('good bye');
      } else if (guess === secretPhrase) {
        /* --  player 2 won -- */

        winner = 'Player 2';
        alert('Congrats, you were right!\n\n');
      } else {
        /* -- player 1 won -- */

        winner = 'Player 1';

        /* -- player 2 can reveal the secret -- */

        const revealTheSecret = confirm(
          'Nope, not correct.\n\ndo you want to know the secret?',
        );

        if (revealTheSecret) {
          alert(
            'The secret was:\n\n' +
              '- ' +
              secretPhrase +
              '\n\n' +
              'thanks for playing, see ya',
          );
        } else {
          alert('better luck next time');
        }
      }
    }
  }

  /* -- announce the winner -- */

  alert('game over. the winner is: ' + winner);
} else if (userInput === null) {
  /* -- exit the game -- */

  alert('good bye');
} else {
  /* -- unknown command -- */

  alert('unknown command: "' + userInput + '"');
}
