'use strict';

debugger;
/* Flip Five

  Data In: any text


  Data Out: the reverse input need to be 5 character long,
   else it will prompt another input


  Test Cases: "hoi" => "nope, try again"
              "vihan" => "vihangood"
              "garnal" => "nope, try again"


*/

/* --- gather user input --- */

let input = null;
while (true) {
  input = prompt('garnal');
  console.log(input);

  /* --- check that the user input is 5 characters long --- */

  if (input !== null && input.length === 5) {
    break;
  } else {
    alert('nope, try again.');
  }
}

/* --- create the final message --- */

let message = 'good';
for (let character of input) {
  message = character + '' + message;
}
console.log(message);

/* --- display the message --- */

alert(message);
