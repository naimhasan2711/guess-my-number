/*jshint -W117 */
/*jshint -W097 */

'use strict';

//generate random number
let randomNumber = Math.trunc(Math.random() * 20) + 1;
//initial score set to 20
let score = 20;
//initial highscore set to 0
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//this will happen when we click to check button
document.querySelector('.check').addEventListener('click', function () {
  const guessNumber = Number(document.querySelector('.guess').value);

  //if input field has no number or empty
  if (!guessNumber) {
    displayMessage('🥵 No Number');
  } else if (guessNumber === randomNumber) {
    displayMessage('😍 Correct Number');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = randomNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guessNumber !== randomNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guessNumber > randomNumber ? '📈Too High' : '📉Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('🥵 You lost the game');
      document.querySelector('body').style.backgroundColor = '#FF0000';
      document.querySelector('.score').textContent = 0;
    }
  }
});

//this will execute when we click again button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').style.width = '15rem';
  displayMessage('Start Guessing...');
  document.querySelector('.score').textContent = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
});
