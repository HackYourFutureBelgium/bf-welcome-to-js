'use strict';

/*
  modify the program to search for "coffee" in the user's input

  upper or lower case is your choice
*/

const userInput = prompt('please enter something with an "Coffee" in it');

let reaction;
if (userInput === null || userInput === '') {
  reaction = 'nothing!  why  ???';
} else if (userInput.toUpperCase().includes('Coffee')) {
  reaction = '"' + userInput + '" has "Coffee"';
} else {
  reaction = '"' + userInput + '" has no "Coffee" in it';
}

alert(reaction);
