'use strict';

let result = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
// document.querySelector('.secret-number').textContent = result;

const displayMessage = function (msg) {
  document.querySelector('.guess').textContent = msg;
};

const displayBody = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

const displayGuess = function (point) {
  document.querySelector('.secret-number').textContent = point;
};

document.querySelector('.check').addEventListener('click', function () {
  let value = Number(document.querySelector('.input').value);

  if (!value) {
    displayMessage('No Number❌');

    //No value
  } else if (value === result) {
    displayMessage('Correct guess🎉');
    displayGuess(result);
    displayBody('#10ac84');

    highScore = score > highScore ? score : highScore;
    document.querySelector('.highscore').textContent = highScore;
    //Value equal to guessing value
  } else if (value !== result) {
    if (score > 1) {
      let add1 = result + 1;
      let add2 = result + 2;
      let sub1 = result - 1;
      let sub2 = result - 2;

      // console.log(add1, add2, sub1, sub2);
      let condition = '';
      condition = value > result ? 'Too high!!📈' : 'Too low!!📉';
      if (
        value === add1 ||
        value === add2 ||
        value === sub1 ||
        value === sub2
      ) {
        condition = 'Too Close!!🔎';
      }
      score--;
      displayMessage(condition);
      document.querySelector('.score').textContent = score;
    } else {
      score = 0;
      document.querySelector('.score').textContent = score;
      displayMessage('You lost the game!!📌');
    }
    // Value not equal to guessing value
  }
});

document.querySelector('.play').addEventListener('click', function () {
  displayBody('#222f3e');
  displayGuess('?');
  document.querySelector('.input').value = '';
  displayMessage('Start Guessing...🎁');
  document.querySelector('.score').textContent = 20;
  score = 20;
  result = Math.trunc(Math.random() * 20 + 1);
});
