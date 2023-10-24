// UI opening

// IMPORT PACKAGE
// import readlineSync from "readline-sync";
import chalk from "chalk";
import chalkAnimation from 'chalk-animation';
import inquirer from "inquirer";

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

// TO GET USER NAME FUNCTION
function getUserName() {
  /*
  const userName = readlineSync.question(
    chalk.redBright("Welcome to Arnesvex Game! Please enter your name: ")
  );

  if (userName !== null) {
    return userName;
  } else {
    return "Guest";
  }
  */

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
      return answers.userName.trim() === "" ? "Guest" : answers.userName ;
    });
}

// FUNCTION MAIN MENU

function mainMenu() {
  console.log(
    chalk.bold(
      "---------------------------------------------------\n          ARNESVEX GAME - Main Menu\n---------------------------------------------------\n\n"
    )
  );

  /*
  console.log(chalk.redBright.bold("Please select your level:"));
  console.log(chalk.bold("1. Beginner"));
  console.log(chalk.bold("2. Intermediate"));
  console.log(chalk.bold("3. Advanced"));
  console.log(chalk.bold("4. Exit")); 

  */

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
    }).catch((error) => {
      console.error("An error occurred:", error);
    });
    
}

// FUNCTION SELECTED LEVEL

function handleSelectedLevel(choice) {
  /*mainMenu();

  const choice = readlineSync.question(
    chalk.blueBright(`Please enter the number of your choice`)
  );
*/

  switch (choice) {
    case "1":
      // WILL BE FILLED WITH THE FUNCTION OF BEGINNER LEVEL
      break;
    case "2":
      // WILL BE FILLED WITH THE FUNCTION OF INTERMEDIATE LEVEL
      break;
    case "3":
      // WILL BE FILLED WITH THE FUNCTION OF ADVANCED LEVEL
      break;
    case "4":
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

bannerOpening();

getUserName().then((answers) => {
  const playerName = answers.userName;
  console.clear();
  if (playerName) {
    console.log(chalk.redBright(`Hello, ${playerName}!👋\nLet's get started.\n`));
  } else {
    console.log(chalk.redBright(`Hello, Guest!👋\nLet's get started.\n`));
  }

  mainMenu();
}).catch((error) => {
  console.error("An error occurred:", error);
});


/*

const playerName = getUserName();

console.clear();

if (playerName !== null) {
  console.log(chalk.redBright(`Hello, ${playerName}! Let's get started.`));
}

handleSelectedLevel();
*/
