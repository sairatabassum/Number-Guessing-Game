'use strict';

let result = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
let v = document.querySelector('img');

// document.querySelector('.secret-number').textContent = result;

const displayMessage = function (msg) {
  document.querySelector('.guess').textContent = msg;
};

const displayBody = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

document.querySelector('.check').addEventListener('click', function () {
  let value = Number(document.querySelector('.input').value);

  if (!value) {
    v.src = 'GIF/giphy3.gif';

    displayMessage('No Number❌');

    //No value
  } else if (value === result) {
    v.src = 'GIF/giphy2.gif';

    displayMessage('Correct guess🎉');
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
      let condition = '',
        condition2 = '';
      condition = value > result ? 'Too high!!📈' : 'Too low!!📉';
      condition2 = value > result ? 'GIF/high.gif' : 'GIF/low.gif';

      v.src = condition2;

      if (
        value === add1 ||
        value === add2 ||
        value === sub1 ||
        value === sub2
      ) {
        v.src = 'GIF/close.gif';
        condition = 'Too Close!!🔎';
      }
      score--;
      displayMessage(condition);
      document.querySelector('.score').textContent = score;
    } else {
      v.src = 'GIF/lost.gif';
      score = 0;
      document.querySelector('.score').textContent = score;
      displayMessage('You lost the game!!📌');
      displayBody('#FB3640');
    }
    // Value not equal to guessing value
  }
});

document.querySelector('.play').addEventListener('click', function () {
  v.src = 'GIF/io.gif';
  displayBody('#222f3e');
  document.querySelector('.input').value = '';
  displayMessage('Start Guessing...🎁');
  document.querySelector('.score').textContent = 20;
  score = 20;
  result = Math.trunc(Math.random() * 20 + 1);
});
