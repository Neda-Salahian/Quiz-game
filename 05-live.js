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
    correctAnswer: "b", // Corrected from "correctedAnswer"
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

let score = 0;
let wrongAnswers = 0;
let gameContinue = true;

async function askQuestion() {
  if (questions.length > 0 && wrongAnswers < 3) {
    const question = questions.shift();
    const answer = await inquirer.prompt([
      {
        type: "list",
        name: "selectedAnswer",
        message: `${question.question}`,
        choices: question.choices,
      },
    ]);

    if (answer.selectedAnswer === question.correctAnswer) {
      console.log("Correct! You got 10 points.");
      score += 10;
    } else {
      console.log(`Wrong answer! The correct answer is: ${question.correctAnswer}`);
      wrongAnswers++;
      if (wrongAnswers === 3) {
        gameContinue = false;
        console.log("Game Over!");
      }
    }

    console.log(`Score: ${score}`);
    askQuestion();
  } else {
    console.log("Game Over!");
    console.log(`Your final score: ${score}`);
  }
}

askQuestion();
