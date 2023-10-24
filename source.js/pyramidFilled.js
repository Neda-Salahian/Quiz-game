import chalk from 'chalk';
const printPyramide = () => {
    return `
                        Pyramide of Arnesvex           
                                                                             <=================> 
                               ______                                        //              //|
                              |${chalk.bgYellow('      ')}|                                      //              //||
                              |${chalk.bgYellow('  21  ')}|                                    <=================> ||
                            __|${chalk.bgYellow('______')}|___                                  ||             ||  ||
                           |${chalk.bgYellow('      ')}|${chalk.bgYellow('      ')}|                                 ||   Player:   ||  ||
                           |${chalk.bgYellow('  19  ')}|${chalk.bgYellow('  20  ')}|                                 ||             ||  ||
                         __|${chalk.bgYellow('______')}|${chalk.bgYellow('______')}|___                              ||             ||  ||
                        |${chalk.bgYellow('      ')}|${chalk.bgYellow('      ')}|${chalk.bgYellow('      ')}|                             ||  _________  ||  ||
                        |${chalk.bgYellow('  16  ')}|${chalk.bgYellow('  17  ')}|${chalk.bgYellow('  18  ')}|                             ||             ||  ||
                     ___|${chalk.bgYellow('______')}|${chalk.bgYellow('______')}|${chalk.bgYellow('______')}|__                           ||   Lives:    ||  ||
                    |${chalk.bgYellow('      ')}|${chalk.bgYellow('      ')}|${chalk.bgYellow('      ')}|${chalk.bgYellow('      ')}|                          ||             ||  ||
                    |${chalk.bgYellow('  12  ')}|${chalk.bgYellow('  13  ')}|${chalk.bgYellow('  14  ')}|${chalk.bgYellow('  15  ')}|                          ||             ||  ||
                  __|${chalk.bgYellow('______')}|${chalk.bgYellow('______')}|${chalk.bgYellow('______')}|${chalk.bgYellow('______')}|___                       ||  _________  ||  ||
                 |${chalk.bgYellow('      ')}|${chalk.bgYellow('      ')}|${chalk.bgYellow('      ')}|${chalk.bgYellow('      ')}|${chalk.bgYellow('      ')}|                      ||             ||  ||
                 |${chalk.bgYellow('  07  ')}|${chalk.bgYellow('  08  ')}|${chalk.bgYellow('  09  ')}|${chalk.bgYellow('  10  ')}|${chalk.bgYellow('  11  ')}|                      ||   Score:    ||  ||
              ___|${chalk.bgYellow('______')}|${chalk.bgYellow('______')}|${chalk.bgYellow('______')}|${chalk.bgYellow('______')}|${chalk.bgYellow('______')}|__                    ||             ||  ||
             |${chalk.bgYellow('      ')}|${chalk.bgYellow('      ')}|${chalk.bgYellow('      ')}|${chalk.bgYellow('      ')}|${chalk.bgYellow('      ')}|${chalk.bgYellow('      ')}|                   ||             ||  ||
             |${chalk.bgYellow('  01  ')}|${chalk.bgYellow('  02  ')}|${chalk.bgYellow('  03  ')}|${chalk.bgYellow('  04  ')}|${chalk.bgYellow('  05  ')}|${chalk.bgYellow('  06  ')}|                   ||             || // 
             |${chalk.bgYellow('      ')}|${chalk.bgYellow('      ')}|${chalk.bgYellow('      ')}|${chalk.bgYellow('      ')}|${chalk.bgYellow('      ')}|${chalk.bgYellow('      ')}|                   ||             ||//    
                                                                          <=================>
  `};
console.log(printPyramide());