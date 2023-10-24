import beginnerquestions from './data/beginnerquestions.json' assert { type: "json" };
import intermediatequestions from './data/intermediatequestions.json' assert { type: "json" };
import advancedquestions from './data/advancedquestions.json' assert { type: "json" };
// Resource: https://v8.dev/features/import-assertions
// Tip: assert { type: "json" } 

function loadBeginnerQuestions() {
  const beginnerQuestions = beginnerquestions.filter(question => question.level === 'Beginner');
  return beginnerQuestions;
}
const beginnerQuestions = loadBeginnerQuestions();
console.log(beginnerQuestions);



function loadIntermediateQuestions() {
  const intermediateQuestions = intermediatequestions.filter(question => question.level === 'Intermediate');
  return intermediateQuestions;
}
const intermediateQuestions = loadIntermediateQuestions();
console.log(intermediateQuestions);


function loadAdvancedQuestions() {
  const advancedQuestions = advancedquestions.filter(question => question.level === 'Advanced');
  return advancedQuestions;
}
const advancedQuestions = loadAdvancedQuestions();
console.log(advancedQuestions);




// console.log("Beginner Questions:");
// console.log(beginnerquestions);

// console.log("Intermediate Questions:");
// console.log(intermediatequestions);

// console.log("Advanced Questions:");
// console.log(advancedquestions);

