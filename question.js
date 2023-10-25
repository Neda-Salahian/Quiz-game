// import beginnerquestions from './data/beginnerquestions.json' assert { type: "json" };
// import intermediatequestions from './data/intermediatequestions.json' assert { type: "json" };
// import advancedquestions from './data/advancedquestions.json' assert { type: "json" };
import { default as beginnerquestions } from './data/beginnerquestions.json' assert { type: "json" };
import { default as intermediatequestions } from './data/intermediatequestions.json' assert { type: "json" };
import { default as advancedquestions } from './data/advancedquestions.json' assert { type: "json" };
// Resource: https://v8.dev/features/import-assertions
// Tip: assert { type: "json" } 



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
const beginnerQuestions = loadBeginnerQuestions();
console.log(beginnerQuestions);
console.clear();




// Intermediate Questions
function loadIntermediateQuestions() {
  const intermediateQuestions = intermediatequestions.filter(question => question.level === 'Intermediate');
  const randomIntermediateQuestion = randomQuestion(intermediateQuestions);
  return randomIntermediateQuestion;
}
const intermediateQuestions = loadIntermediateQuestions();
console.log(intermediateQuestions);
console.clear();


//Advanced Questions
function loadAdvancedQuestions() {
  const advancedQuestions = advancedquestions.filter(question => question.level === 'Advanced');
  const randomAdvancedQuestion = randomQuestion(advancedQuestions);
  return randomAdvancedQuestion;
}
const advancedQuestions = loadAdvancedQuestions();
console.log(advancedQuestions);

console.clear();


// console.log("Beginner Questions:");
// console.log(beginnerquestions);

// console.log("Intermediate Questions:");
// console.log(intermediatequestions);

// console.log("Advanced Questions:");
// console.log(advancedquestions);

export {loadBeginnerQuestions,loadIntermediateQuestions,loadAdvancedQuestions}

