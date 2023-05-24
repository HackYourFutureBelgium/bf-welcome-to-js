'use strict';

/* Booleans

  1- booleans are a data type used to work with true or false( yes or no)

  2- it can have only two values : true or false

  3- booleans are very useful in comparisons and conditions
*/
// decalre the varaiable isLoggedIn and initallize it to false
let isLoggedIn = false;

// decalre the varaiable isAuthorized and initallize it to true
let isAuthorized = true;

// decalre the varaiable hasAccess and initallize it to false
let hasAccess = false;


//read the value of isLoggedIn
if (isLoggedIn) {
  console.log('You can log in!');
} else {
  console.log("Sorry you can't log in");
}

//read the value of isAuthorized
if (isAuthorized) {
  console.log('You can Authorized to log in !');
} else {
  console.log("Sorry you aren't Authorized log in");
}


//read the value of hasAccess
if (hasAccess) {
  console.log('You can Access!');
} else {
  console.log("Sorry you can't Access");
}