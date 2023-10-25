export function displayQuestion(question) {
    console.log('Question:', question.question);
    console.log('Options:');
    for (let i = 0; i < question.options.length; i++) {
      const optionLabel = String.fromCharCode(65 + i);
      //REsource: https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_fromcharcode
      console.log(`${optionLabel}. ${question.options[i]}`);
    }
  }