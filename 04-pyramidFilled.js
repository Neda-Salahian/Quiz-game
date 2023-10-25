import chalk from 'chalk';

const printPyramid = () => {


const bgBlock = [chalk.bgYellow('     '),chalk.bgRed(`x   x`), , (`     `) ];
//    bgBlock               [0]                      [1]            [2]            

const result = [true, true, true, false, true, false, true, true, null, null, null, null, null, null, null, null, null, null, null, null, null]
const blockNumber = ["001", "002", "003", "004","005", "006", "007", "008", "009", "010", "011", "012", "013", "014", "015", "016", "017", "018", "019", "020", "021"];
for (let i = 0; i < blockNumber.length; i++){
    const bgBlockNr = [chalk.bgYellow(` ${blockNumber[i]} `), chalk.bgRed(`  X  `), (` ${blockNumber[i]} `)]
//    bgBlockNr                     [0]                             [1]                         [2]

        if (result[i] === true){
            bgBlock[0];
            bgBlockNr[0];
        } else if (result[i] === null){
            bgBlock[2];
            bgBlockNr[2];
        } else if (result[i] === false) {
            bgBlock[1];
            bgBlockNr[1];
        }
        return `
                        Pyramide of Arnesvex           
                                                                             <=================> 
                               ______                                        //              //|
                              |${bgBlock[i]}|                                      //              //||
                              |${bgBlock[i]}|                                    <=================> ||
                            __|${bgBlock[i]}|___                                  ||             ||  ||
                           |${bgBlock[i]}|${bgBlock[i]}|                                 ||   Player:   ||  ||
                           |${bgBlock[i]}|${bgBlock[i]}|                                 ||             ||  ||
                         __|${bgBlock[i]}|${bgBlock[i]}|___                              ||             ||  ||
                        |${bgBlock[i]}|${bgBlock[i]}|${bgBlock[i]}|                             ||  _________  ||  ||
                        |${bgBlock[i]}|${bgBlock[i]}|${bgBlock[i]}|                             ||             ||  ||
                     ___|${bgBlock[i]}|${bgBlock[i]}|${bgBlock[i]}|__                           ||   Lives:    ||  ||
                    |${bgBlock[i]}|${bgBlock[i]}|${bgBlock[i]}|${bgBlock[i]}|                          ||             ||  ||
                    |${bgBlock[i]}|${bgBlock[i]}|${bgBlock[i]}|${bgBlock[i]}|                          ||             ||  ||
                  __|${bgBlock[i]}|${bgBlock[i]}|${bgBlock[i]}|${bgBlock[i]}|___                       ||  _________  ||  ||
                 |${bgBlock[i]}|${bgBlock[i]}|${bgBlock[i]}|${bgBlock[i]}|${bgBlock[i]}|                      ||             ||  ||
                 |${bgBlock[i]}|${bgBlock[i]}|${bgBlock[i]}|${bgBlock[i]}|${bgBlock[i]}|                      ||   Score:    ||  ||
              ___|${bgBlock[i]}|${bgBlock[i]}|${bgBlock[i]}|${bgBlock[i]}|${bgBlock[i]}|__                    ||             ||  ||
             |${bgBlock}|${bgBlock}|${bgBlock}|${bgBlock}|${bgBlock}|${bgBlock}|                   ||             ||  ||
             |${bgBlockNr}|${bgBlockNr}|${bgBlockNr}|${bgBlockNr}|${bgBlockNr}|${bgBlockNr}|                   ||             || // 
             |${bgBlock}|${bgBlock}|${bgBlock}|${bgBlock}|${bgBlock}|${bgBlock}|                   ||             ||//    
                                                                          <=================>                                                                 
  `}
};

console.log(printPyramid());