import chalk from 'chalk';
import readline from 'readline-sync';
import { mainMenu } from './openninglastversion.js';

function handleQuiz(questions) {
  let sumScore = 0;

  //Calculate Question Score
  for (let i = 0; i < questions.length; i++) {
    const currentQuestion = questions[i];
    const questionScore = scoring(currentQuestion, i + 1);//encapsulation
    //clean code and better reading
    
    sumScore += questionScore;
    console.log(chalk.blue(`Your current score: ${sumScore}`));
  }

  //Show the Quiz Result 
  console.log(chalk.green('Quiz completed!'));
  console.log(chalk.yellow(`***** Your final score: ${sumScore} *******`));

  if (sumScore < 100) {
    console.log(chalk.red(':( Failed :(((((('));
  } else {
    console.log(chalk.green('Super --- gut Gemacht :))))))))))))'));
  }

  // Show Menu ...
  const playAgain = readline.question('Do you want to play again? (yes/no): ');
  if (playAgain.toLowerCase() === 'yes') {
    mainMenu(); // Restart the game
  } else {
    console.log('Thank you for playing! Goodbye.');
  }
}

//Calculate Score - Calculate Question
function scoring(currentQuestion, i) { //for each-question
  console.log(chalk.yellow(`Question ${i}: ${currentQuestion.questionTitle}`));
  currentQuestion.questionOptions.forEach((option) => console.log(option));//fetch the Qutions options

  const userAnswer = readline.question('Enter the letter of your answer: ');

  if (userAnswer.toUpperCase() === currentQuestion.correctAnswer) {
    // Correct answer.
    console.log(chalk.green('Correct!\n'));
    console.log(chalk.green(`------------------- WOoOoOoOoOoOoOoOoOoOoO -------------------`));
    return 10;
  } else {
    // Incorrect answer.
    console.log(chalk.red(`Incorrect. The correct answer is: ${currentQuestion.correctAnswer}\n`));
    console.log(chalk.red(`------------------ Unlike --------------------`));
    return 0;
  }
}


export { handleQuiz };
