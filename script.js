'use strict';

const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// game has two states, active/ not active

score0El.textContent = 0;
score1El.textContent = 0;

let totalScore = [0, 0];
let tempScore = 0;
let currentPlayer = 0;
let gameActive = true;

diceEl.classList.add('hidden');

const changePlayer = function () {
  document.querySelector('#current--' + currentPlayer).textContent = 0;
  currentPlayer === 0 ? (currentPlayer = 1) : (currentPlayer = 0);

  document.querySelector('.player--0').classList.toggle('player--active');
  document.querySelector('.player--1').classList.toggle('player--active');

  tempScore = 0;
};

btnRoll.addEventListener('click', function () {
  const randNum = Math.trunc(Math.random() * 6) + 1;
  diceEl.src = `dice-${randNum}.png`;
  diceEl.classList.remove('hidden');
  tempScore += randNum;
  const currentScore = document.querySelector('#current--' + currentPlayer);
  currentScore.textContent = tempScore;
  if (randNum === 1) {
    changePlayer();
  }
});

// hold button TODO
btnHold.addEventListener('click', function () {
  totalScore[currentPlayer] += tempScore;
  currentPlayer === 0
    ? (score0El.textContent = totalScore[0])
    : (score1El.textContent = totalScore[1]);
  // add class, change state of game to inactive TODO
  if (totalScore[currentPlayer] >= 100) {
    diceEl.classList.add('hidden');
    document
      .querySelector('.player--' + currentPlayer)
      .classList.add('player--winner');
  }
  changePlayer();
});

btnNew.addEventListener('click', function () {
  diceEl.classList.remove('hidden');
  changePlayer();
  document.querySelector('.player--0').classList.add('player--active');
  document.querySelector('.player--1').classList.remove('player--active');
  diceEl.classList.add('hidden');
  document
    .querySelector('.player--' + currentPlayer)
    .classList.remove('player--winner');
  currentPlayer = 0;
  totalScore = [0, 0];
  tempScore = 0;
  document.querySelector('#current--0').textContent = 0;
  document.querySelector('#current--1').textContent = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
});
