'use strict';

/* ===== CODE REVIEW =====

BEHAVIOR:
TITLE: Checking if input ends with '!'
DESCRIPTION: The program checks if the user's input ends with an exclamation mark '!'. It ignores any trailing white space.
USER STORY: As a user, I want to enter some text and know if it is excited or not.
TEST CASES:
- Excited strings:
- 'asdf!'
- 'asdf! '
- '!!! '
- '!'
- '"!"'
- Bored strings:
- 'asdf'
- 'asdf? '
- '!!! ? '
- ''

GOALS:
NAMES: Use descriptive names for variables and functions.
PROGRESSION: The code execution flows logically and handles different scenarios.
DATA: Ensure the correct data types are used and handle edge cases.

COMMENTS:
- "WHY" not "WHAT": Include comments that explain the purpose or reasoning behind certain code blocks or decisions, not just what the code does.
- QUANTITY/QUALITY: Ensure the comments are meaningful and provide useful information.

LINTING: The code is properly formatted and follows a consistent style.

VARIABLES:
LOCATION: Declare variables in the appropriate scope.
INITIAL VALUES: Set initial values for variables.
ROLES: Variables have clear roles and are named appropriately.
DOMAIN: Ensure variables are used within their intended domain.
QUANTITY/QUALITY: Avoid excessive or redundant variables.

LOGS:
TRACE: Add meaningful console logs to trace the execution and debug if necessary.
QUANTITY/QUALITY: Include relevant logs without overwhelming the code.

LOGIC:
OPERATIONS: Perform operations accurately and efficiently.
CONTROL FLOW: Handle control flow statements (conditionals, loops) correctly. */
