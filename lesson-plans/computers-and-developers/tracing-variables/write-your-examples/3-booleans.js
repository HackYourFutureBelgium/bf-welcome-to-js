'use strict';

/* Booleans

TODO: create a few variables(boolean):
- you need to add comments to show where the variable been
declared, initialized, read , reassigned,...
*/

console.log('**** My journey list ****');

/* declaring variables and initializing them to their booleans */
let passport = true;
let baggage = false;
let flightTicket = true;
let hotelRoom = false;
let carRental = true;

/* reading the value of the variables */
if (passport) {
  console.log('✔️ Your passport is ready');
} else {
  console.log('❌ Your passport is not ready');
}

if (baggage) {
  console.log('✔️ Your baggage is ready');
} else {
  console.log('❌ Your baggage is not ready');
}

if (flightTicket) {
  console.log('✔️ Your flight ticket is booked');
} else {
  console.log('❌ You have not booked your flight ticket yet');
}

if (hotelRoom) {
  console.log('✔️ Your hotel room is reserved');
} else {
  console.log('❌ Your hotel room is not reserved');
}

if (carRental) {
  console.log('✔️ Your car rental is booked');
} else {
  console.log('❌ Your car rental is not reserved');
}