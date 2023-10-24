// SCORING FUNCTION

function scoring(answers){
    let sumScore = 0;

    for ( let i = 0 ; i < answers.length ; i++ ){
        if(answers[i]){
            sumScore += 10;
        }
    };

    return sumScore;
};

/*TESTING */
const userAnswer = [true, true, true, true, false];
console.log(scoring(userAnswer));
