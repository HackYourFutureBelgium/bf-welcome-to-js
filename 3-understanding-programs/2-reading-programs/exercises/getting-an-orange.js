// #todo

'use strict';
/*
- if the user enter nothing the prompt shows again and again
- if we mention some other text except orange or ORANGE is shows the prompt
- if we enter orange with lower case it shows "is a small orange"
- if we enter ORANGE with upper case it shows "is a big orange"
- if we enter Orange using upper and lower case it shows "is a small and big orange"
*/
/* -- 1. get an orange --

  - how many control flow structures are there in this goal?
  - describe the input a user needs to give to exit this loop
  - how many paths are there through this Input/Output (I/O) loop?
*/

let theOrange = '';

while (theOrange === '') {
  /* -- 1.a gather user input --
      - this input showing promp to the user
  
   */

  const input = prompt('give me an orange, lower or upper case');

  /* -- 1.b check if the user canceled --
    - which user action will pass this condition?

    - if the user canceled or press ok without enter the text it show again and again the prompt
  */

  if (input === null) {
    continue;
  }

  /* -- 1.c check if the user's input is an orange --
    - what is the scope for `theOrange`?
    - what is the scope for `input`?

    - its showing again and again the prompt
  */

  if (input.toLowerCase() === 'orange') {
    theOrange = input;
  }
}

/* -- 2. describe the orange --

  - how many comparisons are there in this goal?
    - 3 comparisons
  - how many possible descriptions are there?
    - 3 possible descriptions
  - how many paths are there through this conditional?
    - 3 paths
  - which variables are used in this goal, where were they declared?
    - boolean
*/

let description = '';

if (theOrange === 'orange') {
  description = 'small';
} else if (theOrange === 'ORANGE') {
  description = 'big';
} else {
  description = 'small and big';
}

/* -- 3. alert the description for the user -- */

alert(theOrange + ' is a ' + description + ' orange');
