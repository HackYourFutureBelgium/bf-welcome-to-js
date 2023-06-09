'use strict';

let letters = 'abcd';

let index = 0;
while (index < letters.length) {
  console.log("'" + letters[index] + "'");
  index++;
}

//while (< __.__) {}
//The while loop continues executing as long as the index is less than the length of the letters string.
//Inside the loop, the character at the current index of letters is accessed using letters[index].
//The current character is logged to the console using console.log(letters[index]).
//After each iteration, the index is incremented by 1 to move to the next character in the string.
//This process continues until all characters in the letters string have been logged.
//When we run this code, it will show output the letters "a", "b", "c", and "d" to the console, each on a separate line.
