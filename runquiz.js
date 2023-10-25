// import {displayQuestion} from './displayquestion.js'
// import inquirer from 'inquirer';
import chalk from 'chalk';
import readline from 'readline-sync';
import {mainMenu} from './openninglastversion.js'

function runQuiz(questions) {
    let sumScore = 0;

    for (let i = 0; i < questions.length; i++){
      const currentQuestion = questions[i];

      console.log(chalk.yellow(`Question ${i + 1}: ${currentQuestion.question}`));
      currentQuestion.options.forEach((option) => console.log(option));

      const userAnswer = readline.question('Enter the letter of your answer: ');

      if (userAnswer.toUpperCase() === currentQuestion.correctAnswer) {
        // Correct answer.
        console.log(chalk.green('Correct!\n'));
        console.log(chalk.green(`------------------- WOoOoOoOoOoOoOoOoOoOoO -------------------`));
        sumScore += 10;
      } else {
        // Incorrect answer.
        console.log(chalk.red(`Incorrect. The correct answer is, ${currentQuestion.correctAnswer}`));
        console.log(chalk.red(`------------------ Unlike --------------------`));
      }

      console.log(`Your current score: ${sumScore}`);
    }

    console.log(chalk.green('Quiz completed!'));
    console.log(chalk.yellow(`***** Your final score: ${sumScore} *******`));

    if( sumScore < 100 ){
      console.log(chalk.red(':( Failed :(((((('));
    } else {
      console.log(chalk.green('Super --- gut Gemacht :))))))))))))'));
    }

    // Ask the user if they want to play again.
    const playAgain = readline.question('Do you want to play again? (yes/no): ');
    if (playAgain.toLowerCase() === 'yes') {
      mainMenu(); // Restart the game
    } else {
      console.log('Thank you for playing! Goodbye.');
    }
}

export { runQuiz }
