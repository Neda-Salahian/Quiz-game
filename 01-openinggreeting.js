// UI opening

// IMPORT PACKAGE
import readlineSync from "readline-sync";
import chalk from "chalk";

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
  const userName = readlineSync.question(
    chalk.redBright("Welcome to Arnesvex Game! Please enter your name: ")
  );

  if (userName !== null) {
    return userName;
  } else {
    return "Guest";
  }
}

// FUNCTION MAIN MENU

function mainMenu() {
  console.log(
    chalk.bold(
      "---------------------------------------------------\n          ARNESVEX GAME - Main Menu\n---------------------------------------------------\n\n"
    )
  );
  console.log(chalk.redBright.bold("Please select your level:"));
  console.log(chalk.bold("1. Beginner"));
  console.log(chalk.bold("2. Intermediate"));
  console.log(chalk.bold("3. Advanced"));
  console.log(chalk.bold("4. Exit"));
}

// FUNCTION SELECTED LEVEL

function handleSelectedLevel() {
  mainMenu();

  const choice = readlineSync.question(
    chalk.blueBright(`Please enter the number of your choice`)
  );

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
        console.log(chalk.bold.redBright(`
        ____               _  
       |  _ \\             | | 
       | |_) |_   _  ___  | | 
       |  _ <| | | |/ _ \\ | | 
       | |_) | |_| |  __/ |_| 
       |____/ \\__, |\\___| (_) 
               __/ |          
              |___/           
      `));
      process.exit(0);
      break;
    default:
      console.log(`Please select valid option !`);
      handleSelectedLevel();
  }
}

bannerOpening();

const playerName = getUserName();

console.clear();

if (playerName !== null) {
  console.log(chalk.redBright(`Hello, ${playerName}! Let's get started.`));
}

handleSelectedLevel();
