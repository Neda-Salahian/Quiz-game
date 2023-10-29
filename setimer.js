/*function startTimer() {
  let timeLeft = 20;

  const timeInterval = setInterval(function () {
    if (timeLeft >= 0) {
      process.stdout.write("\rYour time left: " + timeLeft + " second"); // he timer to be displayed on a single line,update the same line with the current time left in each iteration
      timeLeft--;
    } else {
      clearInterval(timeInterval); // Clear timer when it reaches 0
      process.stdout.clearLine(); // Clear the current line
    
      console.log("Run of time");
      // need to add logic when run time
    }
  }, 1000); // 1000 millisecond = 1second)
}

startTimer(); */

import { SingleBar } from 'cli-progress';

function startTimer() {
  const bar = new SingleBar({
    format: 'Your time left: [{bar}] {percentage}% | {value}/{total} seconds',
    barCompleteChar: '\u2588',
    barIncompleteChar: '\u2591',
    hideCursor: true,
  });

  const duration = 20; // 20 seconds
  let timeLeft = duration;

  bar.start(duration, 0);

  const timerInterval = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      bar.update(duration - timeLeft);
    } else {
      clearInterval(timerInterval);
      bar.stop();
      console.clear(); // Clear the console
      console.log('Run of time');
    }
  }, 1000); // 1000 milliseconds = 1 second
}

//  startTimer();

export {startTimer};


