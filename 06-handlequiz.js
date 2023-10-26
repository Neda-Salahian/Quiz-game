import chalk from "chalk";
import readline from "readline-sync";
// import { mainMenu } from "./01-openinggreeting.js";
import inquirer from "inquirer";

const questions = [
  {
    question: "How do you declare a variable in JavaScript?",
    choices: [
      { name: "a) variable x", value: "a" },
      { name: "b) var x", value: "b" },
      { name: "c) v x", value: "c" },
      { name: "d) x = var", value: "d" },
    ],
    correctAnswer: "b",
  },
  {
    question:
      "Which symbol is used to assign a value to a variable in JavaScript?",
    choices: [
      { name: "a) =", value: "a" },
      { name: "b) :", value: "b" },
      { name: "c) ==", value: "c" },
      { name: "d) ===", value: "d" },
    ],
    correctAnswer: "a",
  },
  {
    question: "What is the correct way to write a comment in JavaScript?",
    choices: [
      { name: "a) # This is a comment", value: "a" },
      { name: "b) // This is a comment", value: "b" },
      { name: "c) <!-- This is a comment -->", value: "c" },
      { name: "d) /* This is a comment */", value: "d" },
    ],
    correctAnswer: "d",
  },
];

let sumScore = 0;
let wrongAnswers = 0;
let gameContinue = true;

async function handleQuiz() {
  //Calculate Question Score
  
    if (gameContinue > 0 && wrongAnswers < 3 && questions.length > 0) {
      const currentQuestion = questions[i];
      const questionScore = scoring(currentQuestion, i + 1); //encapsulation
      //clean code and better reading

      const answer = await inquirer.prompt([
        {
          type: "list",
          name: "selectedAnswer",
          message: `${currentQuestion.question}`,
          choices: currentQuestion.choices,
        },
      ]);
    }

   
}

handleQuiz()

export { handleQuiz };
