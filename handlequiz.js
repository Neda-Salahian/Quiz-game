import chalk from 'chalk';
import readline from 'readline-sync';
import { mainMenu } from './openninglastversion.js';
import inquirer from "inquirer";

function handleQuiz(questions) {
  let sumScore = 0;
  let wrongAnswers = 0;
  let gameContinue = true;

  //Calculate Question Score
  for (let i = 0; i < questions.length && gameContinue ; i++) {
    const currentQuestion = questions[i];
    const questionScore = scoring(currentQuestion, i + 1);//encapsulation
    //clean code and better reading
    
    sumScore += questionScore;
    console.log(chalk.blue(`Your current score: ${sumScore}`));
    if (questionScore === 0) {
      wrongAnswers++;
      if (wrongAnswers === 3) {
        gameContinue = false;
        console.log(chalk.red.bold("Game Over! You are out of lives."));
      }
    }
  }

  //Show the Quiz Result 
  console.log(chalk.green('Quiz completed!'));
  console.log(chalk.yellow(`***** Your final score: ${sumScore} *******`));

  // Show Menu ...
  const playAgain = readline.question('Do you want to play again? (yes/no): ');
  if (playAgain.toLowerCase() === 'yes') {
    mainMenu(); // Restart the game
  } else {
    console.log('Thank you for playing! Goodbye.');
    console.log(
      chalk.bold.redBright(`
      ____               _  
     |  _ \\             | | 
     | |_) |_   _  ___  | | 
     |  _ <| | | |/ _ \\ | | 
     | |_) | |_| |  __/ |_| 
     |____/ \\__, |\\___| (_) 
             __/ |          
            |___/           
    `)
    );
  }
}

//Calculate Score - Calculate Question
function scoring(currentQuestion, i) { //for each-question
  console.log(chalk.yellow(`Question ${i}: ${currentQuestion.questionTitle}`));
  currentQuestion.questionOptions.forEach((option) => console.log(option));//fetch the Qutions options
 //um Optionen anzuzeigen
  const userAnswer = readline.question('Enter the letter of your answer: ');
  
  if (userAnswer === currentQuestion.correctAnswer) {
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
