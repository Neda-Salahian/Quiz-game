const cliProgress = require('cli-progress');
const readline = require('readline');

const totalQuestions = 21;
const questionTime = 20;

const questions = [
  {
    question: 'What is the capital of France?',
    options: ['a) London', 'b) Berlin', 'c) Madrid', 'd) Paris'],
    correctAnswer: 'd',
  },
  // Add more questions here
];

let currentQuestion = 0;

function askQuestionAndProvideAnswer() {
  if (currentQuestion < totalQuestions) {
    const question = questions[currentQuestion];
    currentQuestion++;

    const questionBar = new cliProgress.SingleBar(
      { format: `Question ${currentQuestion} {bar} {percentage}% | Remaining time: {eta}s` },
      cliProgress.Presets.shades_classic
    );

    console.log(`Question ${currentQuestion}: ${question.question}`);
    console.log(question.options.join('\n'));

    questionBar.start(questionTime, 0);

    const answerInterval = setInterval(() => {
      if (questionBar.value < questionTime) {
        questionBar.increment(1);
      } else {
        questionBar.stop();
        clearInterval(answerInterval);
        console.log('Time expired for question ' + currentQuestion);
        provideAnswer(question.correctAnswer);
      }
    }, 1000);
  } else {
    console.log('Quiz completed');
  }
}

function provideAnswer(correctAnswer) {
  const answerTime = 20;
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question('Choose the correct answer (a, b, c, or d): ', (answer) => {
    rl.close();

    if (answer.toLowerCase() === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log('Wrong. The correct answer is: ' + correctAnswer);
    }

    const answerBar = new cliProgress.SingleBar(
      { format: `Answer ${currentQuestion} {bar} {percentage}% | Remaining time: {eta}s` },
      cliProgress.Presets.shades_classic
    );

    answerBar.start(answerTime, 0);

    const answerInterval = setInterval(() => {
      if (answerBar.value < answerTime) {
        answerBar.increment(1);
      } else {
        answerBar.stop();
        clearInterval(answerInterval);
        console.log('Time expired for the answer.');
        askQuestionAndProvideAnswer();
      }
    }, 1000);
  });
}

askQuestionAndProvideAnswer();

