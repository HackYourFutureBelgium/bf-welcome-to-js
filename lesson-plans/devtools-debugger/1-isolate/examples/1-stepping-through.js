'use strict';

/*  Stepping Through

  click the [debug] button to start the program in your debugger

  see the little arrow at the top of the pane on the right?
    it looks like this:  ->·
    this evaluates one statement at a time

  your challenge: step through to each commented line and pause
    look around the debugger, what do you see?

*/

// the debugger jump to line 23 because the comments are ignore

let didClickOk = confirm('please click "ok":');

if (didClickOk !== true) {
  alert(':(');
} else {
  alert('thank you!');
}
