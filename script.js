'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const changeNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

const changeHighscore = function (highscore) {
  document.querySelector('.highscore').textContent = highscore;
};

const changeScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const changeBackgroundColor = function (backgroundColor) {
  document.querySelector('body').style.backgroundColor = backgroundColor;
};

const changeNumberWidth = function (numberWidth) {
  document.querySelector('.number').style.width = numberWidth;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage('No number!');
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!');
    changeNumber(secretNumber);

    changeBackgroundColor('#60b347');
    changeNumberWidth('30rem');

    if (score > highscore) {
      highscore = score;
      changeHighscore(highscore);
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      score--;
      changeScore(score);
    } else {
      displayMessage('You lost the game!');
      changeScore(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  changeScore(score);
  displayMessage('Start guessing...');
  changeNumber('?');
  document.querySelector('.guess').value = '';
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  changeBackgroundColor('#222');
  changeNumberWidth('15rem');
});
