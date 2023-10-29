import chalk from "chalk";
import readline from "readline-sync";
import { mainMenu, obtainedUserName, username } from "./01-opening.js";
import { farbenArray } from "./farbenArray.js";
import { befüllen } from "./pyramidFunction.js";
// import { startTimer } from "./setimer.js";
// import { SingleBar } from 'cli-progress';


// let timerInterval; // Define the timerInterval globally

function handleQuiz(questions) {
  let sumScore = 0;
  let wrongAnswers = 0;
  let gameContinue = true;
  let answersArray = [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ];

  // let colorArray = [];


  //Calculate Question Score
  for (let i = 0; i < questions.length && gameContinue; i++) {
    const currentQuestion = questions[i];
    const questionScore = scoring(currentQuestion, i + 1); //encapsulation
    //clean code and better reading
    // return of type number
    if (questionScore === 10) {
      answersArray[i] = true;
    } else {
      answersArray[i] = false;
    }
    sumScore += questionScore;
    if(questionScore === 0){
      wrongAnswers++;
    }

    const playerName = username;
    const dynamicFarbenArray = farbenArray(answersArray);
    console.log(befüllen(dynamicFarbenArray, sumScore, wrongAnswers, username));
    console.log(chalk.blue(`Your current score: ${sumScore}`));

    if (questionScore === 0) {
      let lifeRest = 3 - wrongAnswers;
      console.log(chalk.red.bold(`Your Chance now ${lifeRest}`));
      if (wrongAnswers === 3) {
        gameContinue = false;
        console.log(
          chalk.red.bold(`
        _____                         ____                   _ 
       / ____|                       / __ \\                 | |
      | |  __  __ _ _ __ ___   ___  | |  | |_   _____ _ __  | |
      | | |_ |/ _\` | '_ \` _ \\ / _ \\ | |  | \\ \\ / / _ \\ '__| | |
      | |__| | (_| | | | | | |  __/ | |__| |\\ V /  __/ |    |_|
       \\_____|\\__,_|_| |_| |_|\\___|  \\____/  \\_/ \\___|_|    (_)
                                                               
     `)
        );
      }
    }
  }

  //Show the Quiz Result
  console.log(chalk.green(`Quiz Complete..!`));
  console.log(chalk.yellow(`***** Your final score: ${sumScore} *******`));
  if (wrongAnswers < 3) {
    console.log(
      chalk.green.bold(`
    ____                      _      _           _ 
   / ___|___  _ __ ___  _ __ | | ___| |_ ___  __| |
  | |   / _ \\| '_ \` _ \\| '_ \\| |/ _ \\ __/ _ \\/ _\` |
  | |__| (_) | | | | | | |_) | |  __/ ||  __/ (_| |
   \\____\\___/|_| |_| |_| .__/|_|\\___|\\__\\___|\\__,_|
                       |_|
 `)
    );
  }

  // Show Menu ...
  const playAgain = readline.question("Do you want to play again? (yes/no): ");
  if (playAgain === "yes") {
    mainMenu(); // Restart the game
  } else {
    console.log(chalk.bold.redBright("Thank you for playing! Goodbye."));
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
 // return { wrongAnswers, sumScore, answersArray };
}

//Calculate Score - Calculate Question
function scoring(currentQuestion, i) {

 
  //for each-question
  console.log(chalk.yellow(`Question ${i}: ${currentQuestion.questionTitle}`));
  currentQuestion.questionOptions.forEach((option) => console.log(option)); //fetch the Qutions options

   // Create a flag to track if the timer has expired
  // let timerExpired = false;

  // Start the timer and set timerExpired to true when time runs out
  /*startTimer(() => {
    timerExpired = true;
  })*/

  //um Optionen anzuzeigen
  const userAnswer = readline.question("\nEnter the letter of your answer: ");

    // Clear the timer when the user answers
    // clearInterval(timerInterval);

    /*

  // Check if the timer expired
  if (timerExpired) {
    console.log("Run out of time");
    // Handle the case when the timer runs out here
    return 0;
  }
*/


  if (userAnswer.toUpperCase() === currentQuestion.correctAnswer) {
    // Correct answer.
    console.log(chalk.green("\nCorrect!\n"));
    // console.log(` __  _____               _       _   
// /  ||  _  |             (_)     | |  
// \`| || |/' |  _ __   ___  _ _ __ | |_ 
//  | ||  /| | | '_ \\ / _ \\| | '_ \\| __|
// _| |\\ |_/ / | |_) | (_) | | | | | |_ 
// \\___/\\___/  | .__/ \\___/|_|_| |_|\\__|
//             | |                      
//             |_|`);

    return 10;
  } else {
    // Incorrect answer.
    console.log(
      chalk.red(
        `Incorrect. The correct answer is: ${currentQuestion.correctAnswer}\n`
      )
    );
    // console.log(chalk.red(`------------------ Unlike --------------------`));
    return 0;
  }
}




export { handleQuiz };
