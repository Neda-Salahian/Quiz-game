// UI opening

// IMPORT PACKAGE

import chalk from "chalk";
import chalkAnimation from 'chalk-animation';
import inquirer from "inquirer";

function mainMenu() {
  console.log(
    chalk.bold(
      "---------------------------------------------------\n          ARNESVEX GAME - Main Menu\n---------------------------------------------------\n\n"
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
  switch (choice) {
    case "1":
      console.log("Starting with Beginner Level...");
      // the function for beginner level will be placed here
      break;
    case "2":
      console.log("Starting with Intermediate Level...");
      // the function for intermediate level will be placed here
      break;
    case "3":
      console.log("Starting with Advanced Level...");
      // the function for advanced level will be placed here
      break;
    case "4":
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
}

function obtainedUserName() {
  return inquirer
  .prompt([
    {
      type: "input",
      name: "userName",
      message: chalk.redBright(
        "Welcome to Arnesvex Game! Please enter your name: "
      ),
      default : "Guest",
    },
  ])
  .then((answers) => {
  const enteredName =  answers.userName.trim();
  return enteredName === "" ? "Guest" : enteredName;
  });
}

// BANNER OPENING FUNCTION
function bannerOpening() {
  console.log(
    chalk.red(
      ` ___        _______   _________   ________           ________   _________   ________   ________   _________   
    |\\  \\      |\\  ___ \\ |\\___   ___\\|\\   ____\\         |\\   ____\\ |\\___   ___|\\   __  \\ |\\   __  \\ |\\___   ___\\ 
    \\ \\  \\     \\ \\   __/|\\|___ \\  \\_\\ \\  \\___|_        \\ \\  \\___|_\\|___ \\  \\_\\ \\  \\|\\  \\\\ \\  \\|\\  \\\\|___ \\  \\_|
     \\ \\  \\     \\ \\  \\_|/__   \\ \\  \\  \\ \\_____  \\        \\ \\_____  \\    \\ \\  \\  \\ \\   __  \\\\ \\   _  _\\    \\ \\  \\
      \\ \\  \\____ \\ \\  \\_|\\ \\   \\ \\  \\  \\|____|\\  \\        \\|____|\\  \\    \\ \\  \\  \\ \\  \\ \\  \\\\ \\  \\\\  \\|    \\ \\  \\
       \\ \\_______\\\\ \\_______\\   \\ \\__\\   ____\\_\\  \\         ____\\_\\  \\    \\ \\__\\  \\ \\__\\ \\__\\\\ \\__\\\\ _\\     \\ \\__\\
        \\|_______| \\|_______|    \\|__|  |\\_________\\       |\\_________\\    \\|__|   \\|__|\\|__| \\|__|\\|__|     \\|__|
                                        \\|_________|       \\|_________|                                           
    `
    )
  );
}

bannerOpening();

obtainedUserName().then((playerName) => {
  console.clear();
  console.log(chalk.redBright(`Hello, ${playerName}!👋\nLet's get started.\n`));
  mainMenu();
});





