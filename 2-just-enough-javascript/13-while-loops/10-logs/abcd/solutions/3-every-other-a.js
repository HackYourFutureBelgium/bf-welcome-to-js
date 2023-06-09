"use strict";

let letters = " a b c d";

let index = 0;

while (index < letters.length) {
  let currentChar = letters[index];
  if (currentChar !== " ") {
    console.log("'" + currentChar + "'");
  }
  index++;
}


//while (__) {}
// The while loop continues executing as long as the index is less than the length of the letters string.
// Inside the loop, the character at the current index of letters is accessed using letters[index] and stored in the currentChar variable.
//An if statement checks if the currentChar is not equal to a space character (' ').
//If the currentChar is not a space, it is logged to the console using console.log(currentChar).
//After each iteration, the index is incremented by 1 using index++ to move to the next character in the string.
//When you run this code, it will log each letter "a", "b", "c", and "d" (ignoring the spaces) to the console on separate lines.
