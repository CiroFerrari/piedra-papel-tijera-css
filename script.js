// Target img from html
const playerRockImg = document.getElementById('player-rock');
const playerPaperImg = document.getElementById('player-paper');
const playerScissorsImg = document.getElementById('player-scissors');

const computerRockImg = document.getElementById('computer-rock');
const computerPaperImg = document.getElementById('computer-paper');
const computerScissorsImg = document.getElementById('computer-scissors');

// Target button #reset-round from html
const resetRoundBtn = document.querySelector('#reset-round');

// Target #round-result from html
let roundResult = document.querySelector('#round-result');

// Variable to save player election
let playerChoice = '';

// Add event listener to each Player img
playerRockImg.addEventListener('click', () => {
  console.log('Player chose rock');
  playerChoice = 'rock';

  //Add .selected class to player img
  playerRockImg.classList.add('selected');
  playerPaperImg.classList.add('not-selected');
  playerScissorsImg.classList.add('not-selected');

  // Display round result
  roundResult.textContent = playRound(playerChoice, computerPlay());
});
playerPaperImg.addEventListener('click', () => {
  console.log('Player chose paper');
  playerChoice = 'paper';

  //Add .selected class to player img
  playerRockImg.classList.add('not-selected');
  playerPaperImg.classList.add('selected');
  playerScissorsImg.classList.add('not-selected');

  // Display round result
  roundResult.textContent = playRound(playerChoice, computerPlay());
});
playerScissorsImg.addEventListener('click', () => {
  console.log('Player chose scissors');
  playerChoice = 'scissors';

  //Add .selected class to player img
  playerRockImg.classList.add('not-selected');
  playerPaperImg.classList.add('not-selected');
  playerScissorsImg.classList.add('selected');

  // Display round result
  roundResult.textContent = playRound(playerChoice, computerPlay());
});

// Add event listener to reset round button
resetRoundBtn.addEventListener('click', () => {
  resetRound();
});

// Create a function that randomly returns either 'rock', 'paper', or 'scissors'
function computerPlay() {
  let computerChoice = ['rock', 'paper', 'scissors'];
  computerChoice = computerChoice[Math.floor(Math.random() * computerChoice.length)];

  if (computerChoice === 'rock') {
    computerRockImg.classList.add('selected');
    computerPaperImg.classList.add('not-selected');
    computerScissorsImg.classList.add('not-selected');
  }

  if (computerChoice === 'paper') {
    computerRockImg.classList.add('not-selected');
    computerPaperImg.classList.add('selected');
    computerScissorsImg.classList.add('not-selected');
  }

  if (computerChoice === 'scissors') {
    computerRockImg.classList.add('not-selected');
    computerPaperImg.classList.add('not-selected');
    computerScissorsImg.classList.add('selected');
  }

  return computerChoice;
}

// Create a function that plays a single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
  // Check if player and computer choices are the same
  if (playerSelection === computerSelection) {
    roundResult.textContent = 'It\'s a tie!';
    return 'It\'s a tie!';
  }

  // Check if player chose rock
  if (playerSelection === 'rock') {
    if (computerSelection === 'paper') {
      return 'You lose! Paper beats rock';
    } else {
      return 'You win! Rock beats scissors';
    }
  }

  // Check if player chose paper
  if (playerSelection === 'paper') {
    if (computerSelection === 'rock') {
      return 'You win! Paper beats rock';
    } else {
      return 'You lose! Scissors beats paper';
    }
  }

  // Check if player chose scissors
  if (playerSelection === 'scissors') {
    if (computerSelection === 'rock') {
      return 'You lose! Rock beats scissors';
    } else {
      return 'You win! Scissors beats paper';
    }
  }
}

// Reset round function deleting all css classes
function resetRound() {
  playerRockImg.classList.remove('selected', 'not-selected');
  playerPaperImg.classList.remove('selected', 'not-selected');
  playerScissorsImg.classList.remove('selected', 'not-selected');

  computerRockImg.classList.remove('selected', 'not-selected');
  computerPaperImg.classList.remove('selected', 'not-selected');
  computerScissorsImg.classList.remove('selected', 'not-selected');

  roundResult.textContent = '';
}
