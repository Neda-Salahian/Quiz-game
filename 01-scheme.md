# QUIZ 

# GAME FEATURES : 

- Difficulty Levels: Users can choose from three difficulty levels - Beginner, Intermediate, and Advanced.
- Questions: Each category should have a set of questions. Questions should be displayed one by one in the terminal with multiple-choice options.
- Scoring: Users earn points for correct answers. Points accumulate as they progress through the question.
- Each difficulty levels has 3 lifes time. Once the 3 lifes over, user can choose either PLAY AGAIN or END THE PROGRAM. 
- Visual Progress: progress and position level of the user will interpret their position up the pyramid.
- If the users completed the level, user will give celebration ASCII Art and back to Menu.
- (this is an additional option, we could add sound effect in it.)

# Mock-up Design (Text-Based):

## 1. Main Menu: 
   - A menu where the user selects the difficulty level (Beginner, Intermediate, Advanced).
   - Use a library like inquirer to create interactive menus for user input.
   - Allow the user to choose a difficulty level (Beginner, Intermediate, Advanced).
   - Use a switch statement or conditional logic to determine which set of questions to load based on the chosen difficulty level.   

## 2. Quiz Interface:

    Display questions one by one along with multiple-choice options.
    Allow the user to select an answer using text input (e.g., "Type the letter of your answer: A, B, C, D").
    After answering each question, display the user's current score and position on the pyramid (in ASCII art).

    ## Store the quiz questions in data structures (e.g., arrays of objects) where each question has properties for the question itself, answer choices, and the correct answer.
    ## Use a loop to iterate through the questions one by one.
    ## Display each question along with the answer choices.
    ## Use a library like readline-sync to get user input for their answer.
    ## Check if the user's answer is correct and update their score accordingly.
    ## Use a function to render the ASCII art pyramid and update the user's position on it based on their score.

## 3.  Pyramid (ASCII Art):

    Create an ASCII art pyramid that represents the user's progress. As they answer questions correctly.

    ## Create a function that generates and displays the ASCII art pyramid.
    ## The position of the user on the pyramid can be determined based on their score. For example, each level of the pyramid corresponds to a score range.

## 4. Scoring:

    Show the user's current score.

    ## Keep track of the user's score using a variable.
    ## Increment the score for each correct answer and display it after each question.

## 5. Result Page:

    After completing a quiz, display the results, the user's final score, and any rewards earned.
    ## After all questions have been answered, display the user's final score.
    ## Provide feedback or rewards based on their performance in the quiz.


## 6. lay Again / Exit:

Ask the user if they want to play again or exit the game.

## 7. additional (sounds effects)
    We can use libraries like play-sound to add sound effects. For example, play a sound when the user answers a question correctly or incorrectly.