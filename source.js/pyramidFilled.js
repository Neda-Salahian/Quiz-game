import chalk from 'chalk';

const result =      [true, true, null, false, true, false, true, true, null, null, null, null, null, null, null, null, null, null, null, null, null]

const printPyramide = () => {
     
const bgBlock = [];
const bgBlockNr = [];
  

const blockNumber = ["001", "002", "003", "004","005", "006", "007", "008", "009", "010", "011", "012", "013", "014", "015", "016", "017", "018", "019", "020", "021"];
for (let i = 0; i < result.length; i++){

const a1 = (`     `);
const a2 = (` ${blockNumber[i]} `);
const b1 = chalk.bgYellow('     ');
const b2 = chalk.bgYellow(` ${blockNumber[i]} `);
const c1 = chalk.bgRed(`x   x`);
const c2 = chalk.bgRed(`  X  `);

       if (result[i] === null){
            bgBlock.push(a1);//Without BG
            bgBlockNr.push(a2);// Without BG
        } else if (result[i] === true){
            bgBlock.push(b1);;//Yellow
            bgBlockNr.push(b2);//Yellow
        } else if (result[i] === false) {
            bgBlock.push(c1);// Red
            bgBlockNr.push(c2);// Red
        }
console.log( `
                        Pyramide of Arnesvex           
                                                                        <=================> 
                               ______                                  //              //|
                              |${bgBlock[i]}|                                 //              //||
                              |${bgBlockNr[i]}|                               <=================> ||
                            __|${bgBlock[i]}|___                             ||             ||  ||
                           |${bgBlock[i]}|${bgBlock[i]}|                             ||   Player:   ||  ||
                           |${bgBlockNr[i]}|${bgBlockNr[i]}|                             ||             ||  ||
                         __|${bgBlock[i]}|${bgBlock[i]}|___                          ||             ||  ||
                        |${bgBlock[i]}|${bgBlock[i]}|${bgBlock[i]}|                          ||  _________  ||  ||
                        |${bgBlockNr[i]}|${bgBlockNr[i]}|${bgBlockNr[i]}|                          ||             ||  ||
                     ___|${bgBlock[i]}|${bgBlock[i]}|${bgBlock[i]}|__                        ||   Lives:    ||  ||
                    |${bgBlock[i]}|${bgBlock[i]}|${bgBlock[i]}|${bgBlock[i]}|                        ||             ||  ||
                    |${bgBlockNr[i]}|${bgBlockNr[i]}|${bgBlockNr[i]}|${bgBlockNr[i]}|                        ||             ||  ||
                  __|${bgBlock[i]}|${bgBlock[i]}|${bgBlock[i]}|${bgBlock[i]}|___                     ||  _________  ||  ||
                 |${bgBlock[i]}|${bgBlock[i]}|${bgBlock[i]}|${bgBlock[i]}|${bgBlock[i]}|                     ||             ||  ||
                 |${bgBlockNr[i]}|${bgBlockNr[i]}|${bgBlockNr[i]}|${bgBlockNr[i]}|${bgBlockNr[i]}|                     ||   Score:    ||  ||
              ___|${bgBlock[i]}|${bgBlock[i]}|${bgBlock[i]}|${bgBlock[i]}|${bgBlock[i]}|__                   ||             ||  ||
             |${bgBlock}|${bgBlock}|${bgBlock}|${bgBlock[i]}|${bgBlock[i]}|${bgBlock[i]}|                   ||             ||  ||
             |${bgBlockNr}|${bgBlockNr}|${bgBlockNr}|${bgBlockNr[i]}|${bgBlockNr[i]}|${bgBlockNr[i]}|                   ||             || // 
             |${bgBlock}|${bgBlock}|${bgBlock}|${bgBlock[i]}|${bgBlock[i]}|${bgBlock[i]}|                   ||             ||//    
                                                                    <=================>                                                                 
  `);}
};
//console.log(printPyramide());
printPyramide();