import inquirer from "inquirer";

function shuffleArrayQuestions(arrayQuestions) {
  for (let i = 0; i < arrayQuestions.length; i++) {
    const j = Math.floor(Math.random() * (i + 1));
    [arrayQuestions[i], arrayQuestions[j]] = [arrayQuestions[j], arrayQuestions[i]];
  }
}

/* TEST */

const questions = [
  {
    question: "How do you declare a variable in JavaScript?",
    choices: [
      { name: 'a) variable x', value: 'a' },
      { name: 'b) var x', value: 'b' },
      { name: 'c) v x', value: 'c' },
      { name: 'd) x = var', value: 'd' },
    ],
    correctedAnswer: 'd',
  },
  {
    question: "Which symbol is used to assign a value to a variable in JavaScript?",
    choices: [
      { name: 'a) =', value: 'a' },
      { name: 'b) :', value: 'b' },
      { name: 'c) ==', value: 'c' },
      { name: 'd) ===', value: 'd' },
    ],
    correctedAnswer: 'a',
  },
  {
    question: "What is the correct way to write a comment in JavaScript?",
    choices: [
      { name: 'a) # This is a comment', value: 'a' },
      { name: 'b) // This is a comment', value: 'b' },
      { name: 'c) <!-- This is a comment -->', value: 'c' },
      { name: 'd) /* This is a comment */', value: 'd' },
    ],
    correctedAnswer: 'd',
  },
];

shuffleArrayQuestions(questions);

// Use Inquirer to present questions to the user and handle answers
let score = 0;
let gameContinue = true

async function askQuestion() {
  if (questions.length > 0) {
    const question = questions.shift();
    const answer = await inquirer.prompt([
      {
        type: 'list',
        name: 'selectedAnswer',
        message: `${question.question}`,
        choices: question.choices,
      },
    ]);

    if (answer.selectedAnswer === question.correctedAnswer) {
      console.log('Correct!');
      score += 10;
    } else {
      console.log('Wrong answer!');
      gameContinue = false;
    }

    console.log(`Score: ${score}`);
    askQuestion();
  } else {
    console.log('Game Over!');
    console.log(`Your final score: ${score}`);
  }
}

askQuestion();
