import chalk from 'chalk';

/*const farbenArray = (result) => {
  const result = [true, true, null, false, true, false, true, true, null, null, null, null, null, null, null, null, null, null, null, null, null];
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
        return bgBlock, bgBlockNr;
}*/
/*
const printPyramide = () => {
     
const bgBlock = [];
const bgBlockNr = [];
const result = [true, true, null, false, true, false, true, true, null, null, null, null, null, null, null, null, null, null, null, null, null];

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
                              |${bgBlock[20]}|                                 //              //||
                              |${bgBlockNr[20]}|                               <=================> ||
                            __|${bgBlock[20]}|___                             ||             ||  ||
                           |${bgBlock[18]}|${bgBlock[19]}|                             ||   Player:   ||  ||
                           |${bgBlockNr[18]}|${bgBlockNr[19]}|                             ||             ||  ||
                         __|${bgBlock[18]}|${bgBlock[19]}|___                          ||             ||  ||
                        |${bgBlock[15]}|${bgBlock[16]}|${bgBlock[17]}|                          ||  _________  ||  ||
                        |${bgBlockNr[15]}|${bgBlockNr[16]}|${bgBlockNr[17]}|                          ||             ||  ||
                     ___|${bgBlock[15]}|${bgBlock[16]}|${bgBlock[17]}|__                        ||   Lives:    ||  ||
                    |${bgBlock[11]}|${bgBlock[12]}|${bgBlock[13]}|${bgBlock[14]}|                        ||             ||  ||
                    |${bgBlockNr[11]}|${bgBlockNr[12]}|${bgBlockNr[13]}|${bgBlockNr[14]}|                        ||             ||  ||
                  __|${bgBlock[11]}|${bgBlock[12]}|${bgBlock[13]}|${bgBlock[14]}|___                     ||  _________  ||  ||
                 |${bgBlock[6]}|${bgBlock[7]}|${bgBlock[8]}|${bgBlock[9]}|${bgBlock[10]}|                     ||             ||  ||
                 |${bgBlockNr[6]}|${bgBlockNr[7]}|${bgBlockNr[8]}|${bgBlockNr[9]}|${bgBlockNr[10]}|                     ||   Score:    ||  ||
              ___|${bgBlock[6]}|${bgBlock[7]}|${bgBlock[8]}|${bgBlock[9]}|${bgBlock[10]}|__                   ||             ||  ||
             |${bgBlock[0]}|${bgBlock[1]}|${bgBlock[2]}|${bgBlock[3]}|${bgBlock[4]}|${bgBlock[5]}|                   ||             ||  ||
             |${bgBlockNr[0]}|${bgBlockNr[1]}|${bgBlockNr[2]}|${bgBlockNr[3]}|${bgBlockNr[4]}|${bgBlockNr[5]}|                   ||             || // 
             |${bgBlock[0]}|${bgBlock[1]}|${bgBlock[2]}|${bgBlock[3]}|${bgBlock[4]}|${bgBlock[5]}|                   ||             ||//    
                                                                    <=================>                                                                 
  `);}
};
//console.log(printPyramide());
printPyramide();*/