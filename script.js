'use strict';

const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// keep track of what player is active start with player 1
// current player rolls dice if not 1 dice value gets added to current score if one current score goes to zero switch player
// hold button adds current score to total score, checks if total score is >= 100, if so game over visual cues like color and state is not active, if not switches user current score back to zero
// game has two states, active/ not active
// new game button resets game to original state

score0El.textContent = 0;
score1El.textContent = 0;

const totalScore = [0, 0];
let tempScore = 0;
let currentPlayer = 0;
let gameActive = true;

diceEl.classList.add('hidden');

const changePlayer = function () {
  currentPlayer === 0 ? (currentPlayer = 1) : (currentPlayer = 0);

  //   switch color to other player TODO
  document.querySelector('.player--0').classList.toggle('player--active');
  document.querySelector('.player--1').classList.toggle('player--active');

  // zero tempScore TODO
  tempScore = 0;
};

btnRoll.addEventListener('click', function () {
  // 1. generate random dice number
  const randNum = Math.trunc(Math.random() * 6) + 1;
  // 2. display dice
  diceEl.src = `dice-${randNum}.png`;
  diceEl.classList.remove('hidden');
  // add randNum to tempScore TODO
  tempScore += randNum;
  // 3. check if rolled 1, if true switch player
  if (randNum === 1) {
    changePlayer();
  }
});

// hold button TODO
btnHold.addEventListener('click', function () {
  totalScore[currentPlayer] += tempScore;
  changePlayer();
});

// change playerTODO

// add current score to total score TODO
