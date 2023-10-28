// UI opening

// IMPORT PACKAGE

import chalk from "chalk";
import chalkAnimation from 'chalk-animation';
import inquirer from "inquirer";
import { loadBeginnerQuestions, loadIntermediateQuestions, loadAdvancedQuestions } from './03-question.js';
import {handleQuiz} from './02-handlequiz.js'


function mainMenu() {
  console.log(
    chalk.bold.blueBright(
      "***************************************************\n          ARNESVEX GAME - Main Menu\n***************************************************\n"
    )
  );


  const choices = [
    { name: "Beginner", value: "1" },
    { name: "Intermediate", value: "2" },
    { name: "Advanced", value: "3" },
    { name: "Exit", value: "4" },
  ];

  inquirer
    .prompt([
      {
        type: "list",
        name: "level",
        message: chalk.redBright.bold("Please select your level."),
        choices: choices,
      },
    ])
    .then((answers) => {
      handleSelectedLevel(answers.level);
    });

  
}

function handleSelectedLevel(choice) {
    let questions;
  switch (choice) {
    case "1":
      console.clear();
      console.log("Starting with Beginner Level...");
      // the function for beginner level will be placed here
      questions = loadBeginnerQuestions();
      break;
    case "2":
      console.clear();
      console.log("Starting with Intermediate Level...");
      // the function for intermediate level will be placed here
      questions = loadIntermediateQuestions();
      break;
    case "3":
      console.clear();
      console.log("Starting with Advanced Level...");
      // the function for advanced level will be placed here
      questions = loadAdvancedQuestions();
      break;
    case "4":
      console.clear();
      console.log("Closing the Pyramid...");
      console.log(chalk.bold.redBright("\nThank you for playing with us !"));
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
      process.exit(0);
  }
  handleQuiz(questions);
}

// Add a global variable to store the username.
let username = "Guest";

async function obtainedUserName() {
  if (username === "Guest") {
    const answers = await inquirer.prompt([
      {
        type: "input",
        name: "userName",
        message: chalk.redBright(
          "Welcome to Arnesvex Game! Please enter your name: "
        ),
        default: "Guest",
      },
    ]);

    username = answers.userName.trim() === "" ? "Guest" : answers.userName;
  }

  return username;
}



// BANNER OPENING FUNCTION
function bannerOpening() {
  const bannerArt = `
  _  _              _       _                        _       _    
 | || |    ___     | |     | |     ___      o O O   | |     | |   
 | __ |   / -_)    | |     | |    / _ \\    o        |_|     |_|   
 |_||_|   \\___|   _|_|_   _|_|_   \\___/   TS__[O]  _(_)_   _(_)_  
_|"""""|_|"""""|_|"""""|_|"""""|_|"""""| {======|_| """ |_| """ | 
\`-0-0-'\`-0-0-'\`-0-0-'\`-0-0-'\`-0-0-'./o--000'"\`-0-0-'\`-0-0-' 
  `;

  

  console.log(chalk.yellow(bannerArt));
}

bannerOpening();

obtainedUserName().then((playerName) => {
  console.log(playerName);
  console.clear();
  console.log(chalk.redBright(`Hello, ${playerName}!👋\nLet's get started.\n`));

  mainMenu();

});


export {mainMenu, obtainedUserName}