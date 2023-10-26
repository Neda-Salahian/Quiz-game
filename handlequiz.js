import chalk from 'chalk';
import readline from 'readline-sync';
import { mainMenu } from './openninglastversion.js';
import inquirer from "inquirer";

async function handleQuiz(questions) {
  let sumScore = 0;
  let wrongAnswers = 0;
  let gameContinue = true;

  //Calculate Question Score
  for (let i = 0; i < questions.length; i++) {
    const currentQuestion = questions[i];
    const questionScore = scoring(currentQuestion, i + 1);//encapsulation
    //clean code and better reading
    wrongAnswers++;
    if (wrongAnswers === 3) {
      gameContinue = false;
      console.log(chalk.red.bold("Game Over! You are out of lives."));
    }
    sumScore += questionScore;

    console.log(chalk.blue(`Your current score: ${sumScore}`));
  }

  //Show the Quiz Result '
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
async function scoring(currentQuestion, i) { //for each-question
  console.log(chalk.yellow(`Question ${i}: ${currentQuestion.questionTitle}`));
  currentQuestion.questionOptions.forEach((option) => console.log(option));//fetch the Qutions options
 //um Optionen anzuzeigen
  // const userAnswer = readline.question('Enter the letter of your answer: ');

      const userAnswer = await inquirer.prompt([
            {
              type: "list",
              name: "selectedAnswer",
              message: `${currentQuestion.questionTitle}`,
              choices: currentQuestion.option,
            },
          ]);
  if (userAnswer.selectedAnswer === currentQuestion.correctAnswer) {
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
