'use strict';

/* Dogify

  A user can input some text and all "d"s will be replaced with "dog".
    - given the user cancels:
        they are prompted again
    - given their input has any lower case "d"s:
        all "d"s are replaced with "dog"
    - given their input has any upper case "D"s:
        all "D"s are replaced with "DOG"
    - given their input has any upper & lower case "d"s:
        all "d"s are replaced with "dog"
        and all "D"s are replaced with "DOG"

  test cases:
    contains no "d"s:
      ' '           ->   ' '
      'abc'         ->   'abc'
      'market'      ->   'market'
    contains lower case "d"s:
      'd'           ->  'dog'
      'toad'        ->  'toadog'
      'disk'        ->  'dogisk'
      'Iddam'       ->  'Idogdogam'
    contains upper case "d"s:
      'D'           ->  'DOG'
      'ToaD'        ->  'ToaDOG'
      'Disk'        ->  'DOGisk'
      'iDDam'       ->  'iDOGDOGam'
    contains both upper and lower "d"s:
      'dD'          ->  'dogDOG'
      'Do dump'     ->  'DOGo dogump'
      'dim mooD'    -> 'dogim mooDOG'
*/


/* --- gather user input --- */

let input = null;

while (!input) {
  input = prompt("Enter some text:");

  if (input === null) {
    alert("cancelled :(");
    continue;
  }

  if (input === '') {
    alert("you didn't enter anything");
    continue;
  }
}

/* --- replace "d"s with "dog" and "D"s with "DOG" --- */

let dogifiedText = '';

for (let i = 0; i < input.length; i++) {
  const char = input[i];

  if (char === 'd') {
    dogifiedText += 'dog';
  } else if (char === 'D') {
    dogifiedText += 'DOG';
  } else {
    dogifiedText += char;
  }
}


/* --- display the message to the user --- */


alert(dogifiedText);
console.log(dogifiedText);