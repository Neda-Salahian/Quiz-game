import chalk from 'chalk';

const farbenArray = [
    [
      '\x1B[43m     \x1B[49m', '\x1B[43m     \x1B[49m',
      '     ',                 '\x1B[41mx   x\x1B[49m',
      '\x1B[43m     \x1B[49m', '\x1B[41mx   x\x1B[49m',
      '\x1B[43m     \x1B[49m', '\x1B[43m     \x1B[49m',
      '     ',                 '     ',
      '     ',                 '     ',
      '     ',                 '     ',
      '     ',                 '     ',
      '     ',                 '     ',
      '     ',                 '     ',
      '     '
    ],
    [
      '\x1B[43m 001 \x1B[49m', '\x1B[43m 002 \x1B[49m',
      ' 003 ',                 '\x1B[41m  X  \x1B[49m',
      '\x1B[43m 005 \x1B[49m', '\x1B[41m  X  \x1B[49m',
      '\x1B[43m 007 \x1B[49m', '\x1B[43m 008 \x1B[49m',
      ' 009 ',                 ' 010 ',
      ' 011 ',                 ' 012 ',
      ' 013 ',                 ' 014 ',
      ' 015 ',                 ' 016 ',
      ' 017 ',                 ' 018 ',
      ' 019 ',                 ' 020 ',
      ' 021 '
    ]
  ]
  const score = chalk.blue('50');
  const lives = chalk.blue('I I I');
  const playerName = chalk.blue('Arnesvex');

// Oben nur zum veranschaulischen-------UNTEN CODE ZUM ÜBERNEHMEN

const befüllen = (farbenArray) => { 
    const bgBlock = [...farbenArray[0]];
    const bgBlockNr = [...farbenArray[1]]; 
    return `
                            Pyramide of Arnesvex           
                                                                        
                                 _____                                <==================>
                                |${bgBlock[20]}|                               //              //||
                                |${bgBlockNr[20]}|                             <=================> ||
                              __|${bgBlock[20]}|__                            ||             ||  ||
                             |${bgBlock[18]}|${bgBlock[19]}|                           ||   Player:   ||  ||
                             |${bgBlockNr[18]}|${bgBlockNr[19]}|                           ||             ||  ||
                           __|${bgBlock[18]}|${bgBlock[19]}|__                         ||   ${playerName}  ||  ||
                          |${bgBlock[15]}|${bgBlock[16]}|${bgBlock[17]}|                        ||_____________||  ||
                          |${bgBlockNr[15]}|${bgBlockNr[16]}|${bgBlockNr[17]}|                        ||             ||  ||
                        __|${bgBlock[15]}|${bgBlock[16]}|${bgBlock[17]}|__                      ||   Lives:    ||  ||
                       |${bgBlock[11]}|${bgBlock[12]}|${bgBlock[13]}|${bgBlock[14]}|                     ||             ||  ||
                       |${bgBlockNr[11]}|${bgBlockNr[12]}|${bgBlockNr[13]}|${bgBlockNr[14]}|                     ||   ${lives}     ||  ||
                     __|${bgBlock[11]}|${bgBlock[12]}|${bgBlock[13]}|${bgBlock[14]}|__                   ||_____________||  ||
                    |${bgBlock[6]}|${bgBlock[7]}|${bgBlock[8]}|${bgBlock[9]}|${bgBlock[10]}|                  ||             ||  ||
                    |${bgBlockNr[6]}|${bgBlockNr[7]}|${bgBlockNr[8]}|${bgBlockNr[9]}|${bgBlockNr[10]}|                  ||   Score:    ||  ||
                  __|${bgBlock[6]}|${bgBlock[7]}|${bgBlock[8]}|${bgBlock[9]}|${bgBlock[10]}|__                ||             ||  ||
                 |${bgBlock[0]}|${bgBlock[1]}|${bgBlock[2]}|${bgBlock[3]}|${bgBlock[4]}|${bgBlock[5]}|               ||   ${score}        || // 
                 |${bgBlockNr[0]}|${bgBlockNr[1]}|${bgBlockNr[2]}|${bgBlockNr[3]}|${bgBlockNr[4]}|${bgBlockNr[5]}|               ||             ||//            
                 |${bgBlock[0]}|${bgBlock[1]}|${bgBlock[2]}|${bgBlock[3]}|${bgBlock[4]}|${bgBlock[5]}|              <=================>    
                                                                                                                                
      `;
};
console.log(befüllen(farbenArray));