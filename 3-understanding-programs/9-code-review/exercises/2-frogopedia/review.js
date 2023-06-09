// #todo

'use strict';

/* ===== CODE REVIEW =====


  BEHAVIOR:
    TITLE:
    DESCRIPTION:
    USER STORY:
    TEST CASES:

  GOALS:
    NAMES:
    PROGRESSION:
    DATA:

  COMMENTS:
    "WHY" not "WHAT":
    QUANTITY/QUALITY:

  LINTING:

  VARIABLES:
    LOCATION:
    INITIAL VALUES:
    ROLES:
    DOMAIN:
    QUANTITY/QUALITY:

  LOGS:
    TRACE:
    QUANTITY/QUALITY:

  LOGIC:
    OPERATIONS:
    CONTROL FLOW:
*/


/* ===== CODE REVIEW =====

BEHAVIOR:
TITLE: Frogpedia
DESCRIPTION: A user can teach the program something about frogs.
USER STORY:
- The user is prompted to enter something about frogs.
- If the input is null or an empty string, the user is informed and prompted again.
- If the input does not contain the word 'frog' (case insensitive), the user is informed and prompted again.
- If the input contains the word 'frog' (case insensitive), the user is thanked for the information.

TEST CASES:
- Input contains 'frog':
- 'aFrogJumpsFast' => 'thank you ...'
- 'ASDFROGHJKL' => 'thank you ...'
- 'frogs frog froggily' => 'thank you ...'
- Input does not contain 'frog':
- '' => 'no frog :('
- 'frrog' => 'no frog :('
- 'toad' => 'no frog :('

GOALS:
NAMES:
- animalName: Stores the name of the animal to search for in the user's input.
- userInput: Stores the input provided by the user.
- isValid: Flag variable to track the validity of the input.
PROGRESSION: 
  - Prompt the user for input.
  - Check the validity of the input.
  - Display appropriate messages based on the input.

DATA:
  - String: user input, animal name

COMMENTS:
- The code is well-structured and easy to read.
- Good use of descriptive variable names.
- Clear separation of concerns into different sections.
- The use of constants is appropriate.
- The logic to check for valid input and display messages is implemented correctly.

LINTING:
- The code appears to be properly formatted and follows good coding practices.

VARIABLES:
LOCATION: The variables are declared and initialized in appropriate locations.
INITIAL VALUES: The initial values of the variables are set correctly.
ROLES: The roles of the variables are clearly defined.
DOMAIN: The variables are scoped correctly within their intended domain.
QUANTITY/QUALITY: The variables are used appropriately and efficiently.

LOGS:
TRACE: There are no console logs present in the code.
QUANTITY/QUALITY: No issues found regarding the quantity or quality of logs.

LOGIC:
OPERATIONS: The operations in the code are implemented correctly.
CONTROL FLOW: The control flow in the code follows the intended behavior. 

*/