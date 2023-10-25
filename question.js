import fs from 'fs';

const jsonBeginnerData = fs.readFileSync('./data/beginnerquestions.json', 'utf8');
const jsonInterData = fs.readFileSync('./data/intermediatequestions.json', 'utf8');
const jsonAdvanceData = fs.readFileSync('./data/advancedquestions.json', 'utf8');
const beginnerquestions = JSON.parse(jsonBeginnerData);
const intermediatequestions = JSON.parse(jsonInterData);
const advancedquestions = JSON.parse(jsonAdvanceData);
// Resource: https://v8.dev/features/import-assertions
// Tip: assert { type: "json" } 
// let beginnerquestions = null;
// let intermediatequestions = null;
// let advancedquestions = null;

function randomQuestion(array) {
  // Resource: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  // shuffle
  // Create a copy of the array to avoid modifying the original array
  const randomQuestionArray = [...array];
  // Perform Fisher-Yates shuffle to randomize the order
  for (let i = randomQuestionArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [randomQuestionArray[i], randomQuestionArray[j]] = [randomQuestionArray[j], randomQuestionArray[i]];
    }
    return randomQuestionArray;
  }



//Beginner Questions
function loadBeginnerQuestions() {
  const beginnerQuestions = beginnerquestions.filter(question => question.level === 'Beginner');
  const randomBeginnerQuestion = randomQuestion(beginnerQuestions);
  return randomBeginnerQuestion;
}

console.clear();




// Intermediate Questions
function loadIntermediateQuestions() {
  const intermediateQuestions = intermediatequestions.filter(question => question.level === 'Intermediate');
  const randomIntermediateQuestion = randomQuestion(intermediateQuestions);
  return randomIntermediateQuestion;
}

console.clear();


//Advanced Questions
function loadAdvancedQuestions() {
  const advancedQuestions = advancedquestions.filter(question => question.level === 'Advanced');
  const randomAdvancedQuestion = randomQuestion(advancedQuestions);
  return randomAdvancedQuestion;
}

console.clear();

export {loadBeginnerQuestions,loadIntermediateQuestions,loadAdvancedQuestions}

