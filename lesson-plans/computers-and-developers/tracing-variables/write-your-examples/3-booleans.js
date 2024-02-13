'use strict';
debugger;
/* Booleans

TODO: create a few variables(boolean):
- you need to add comments to show where the variable been
declared, initialized, read , reassigned,...
*/

//declare a variable isRaining and initialize it to the value true
const isRaining = true;

// Reading the variable
if (isRaining) {
  console.log('Take an umbrella!'); // Logging a message if it's raining
} else {
  console.log('Leave your umbrella at home.'); // Logging a message if it's not raining
}

// Reassigning the variable
isRaining = false; // Reassigning the variable to false because the rain has stopped

// Reading the variable again
if (isRaining) {
  console.log('Take an umbrella!');
} else {
  console.log('Leave your umbrella at home.'); // Logging a message because it's not raining anymore
}
