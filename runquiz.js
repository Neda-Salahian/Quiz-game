// import {displayQuestion} from './displayquestion.js'
import inquirer from 'inquirer';
import chalk from 'chalk';
import readline from 'readline-sync';

function runQuiz(questions) {
    let score = 0;
    for (let i = 0; i < questions.length; i++){
      const currentQuestion = questions[i];
      console.log(chalk.yellow(`Question ${i + 1}: ${currentQuestion.question}`));
      currentQuestion.options.forEach((option) => console.log(option));
      const userAnswer = readline.question('Enter the letter of your answer: ');
      if (userAnswer.toUpperCase() === currentQuestion.correctAnswer) {
        console.log(chalk.green('Correct!\n'));
        console.log(chalk.green(`------------------- WOoOoOoOoOoOoOoOoOoOoO -------------------`));
        score+=10;
      } else {
        console.log(chalk.red(`Incorrect. The correct answer is, ${currentQuestion.correctAnswer}`));
        console.log(chalk.red(`------------------ Unlike --------------------`));
      }
      console.log(`Your current score: ${score}`);
    }
    console.log('Quiz completed!');
    console.log(`Your final score: ${score}`);

    const playAgain = readline.question('Do you want to play again? (yes/no): ');
    if (playAgain.toLowerCase() === 'yes') {
      displayMainMenu(); // Restart the game
    } else {
      console.log('Thank you for playing! Goodbye.');
    }
}


  export {runQuiz}
