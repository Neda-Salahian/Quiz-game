import {displayQuestion} from './displayquestion.js'
import inquirer from 'inquirer';
import chalk from 'chalk';
// import { loadBeginnerQuestions, loadIntermediateQuestions, loadAdvancedQuestions } from './question.js';


export function runQuiz(questions) {
    let currentQuestionIndex = 0;
  
    function askQuestion() {
      if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
        displayQuestion(currentQuestion);
        currentQuestionIndex++;
        inquirer
          .prompt([
            {
              type: 'input',
              name: 'answer',
              message: 'Your answer (A, B, C, or D):',
            },
          ])
          .then((answers) => {
            // Check the user's answer
            const userAnswer = answers.answer.toUpperCase();
            const correctAnswer = currentQuestion.correctAnswer.toUpperCase();
            if (userAnswer === correctAnswer) {
              console.log(chalk.green('Correct!\n'));
            } else {
              console.log(chalk.red('Incorrect. The correct answer is', correctAnswer, '\n'));
            }
  
            askQuestion();
          });
      } else {
        console.log('End of questions.');
        mainMenu();
        return;
      }
    }
    askQuestion();
  }