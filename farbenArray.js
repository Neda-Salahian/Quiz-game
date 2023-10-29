import chalk from 'chalk';


const farbenArray = (answersArray) => {
   // const result = [true, true, null, false, true, false, true, true, null, null, null, null, null, null, null, null, null, null, null, null, null];
    // Muss verknüpft werden mit dem ursprünglichen Zahlen Array
    const bgBlock = [];
    const bgBlockNr = [];
    const blockNumber = ["001", "002", "003", "004","005", "006", "007", "008", "009", "010", "011", "012", "013", "014", "015", "016", "017", "018", "019", "020", "021"];
      for (let i = 0; i < answersArray.length; i++){
  
      const a1 = (`     `);
      const a2 = (` ${blockNumber[i]} `);
      const b1 = chalk.bgYellow('     ');
      const b2 = chalk.bgYellow(` ${blockNumber[i]} `);
      const c1 = chalk.bgRed(`x   x`);
      const c2 = chalk.bgRed(`  X  `);
  
         if (answersArray[i] === null){
              bgBlock.push(a1);//Without BG
              bgBlockNr.push(a2);// Without BG
          } else if (answersArray[i] === true){
              bgBlock.push(b1);;//Yellow
              bgBlockNr.push(b2);//Yellow
          } else if (answersArray[i] === false) {
              bgBlock.push(c1);// Red
              bgBlockNr.push(c2);// Red
          }
        }
        return [bgBlock, bgBlockNr];
};

// console.log(farbenArray());

export { farbenArray };