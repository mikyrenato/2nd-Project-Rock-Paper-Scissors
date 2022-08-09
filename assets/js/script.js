const choiceButtons = document.querySelectorAll('[data-selection]')
const lastColumn = document.querySelector('[data-final-column]')
const computerResult = document.querySelector('[data-computer-score]')
const yourResult = document.querySelector('[data-your-score]')
const input = document.getElementById('nickname');
const start = document.getElementById('start');
const you = document.getElementById('nick');
const SELECTIONS = [
  {
    name: 'rock',
    emoji: '✊',
    beats: 'scissors'
  },
  {
    name: 'paper',
    emoji: '✋',
    beats: 'rock'
  },
  {
    name: 'scissors',
    emoji: '✌',
    beats: 'paper'
  }
]


choiceButtons.forEach(selectionButton => {
  selectionButton.addEventListener('click', e => {
    const selectionName = selectionButton.dataset.selection
    const selection = SELECTIONS.find(selection => selection.name === selectionName)
    makeChoice(selection)
  })
})

function makeChoice(selection) {
  const computerSelection = randomChoice()
  const yourWinner = Winner(selection, computerSelection)
  const computerWinner = Winner(computerSelection, selection)

  addChoiceResult(computerSelection, computerWinner)
  addChoiceResult(selection, yourWinner)

  if (yourWinner) incrementScore(yourResult)
  if (computerWinner) incrementScore(computerResult)
}

function incrementScore(scoreSpan) {
  scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1
  checkWinner();
}

function addChoiceResult(selection, winner) {
  const div = document.createElement('div')
  div.innerText = selection.emoji
  div.classList.add('resultchoice')
  if (winner) div.classList.add('winner')
  lastColumn.after(div)
}

function Winner(selection, opponentSelection) {
  return selection.beats === opponentSelection.name
}

function randomChoice() {
  const randomIndex = Math.floor(Math.random() * SELECTIONS.length)
  return SELECTIONS[randomIndex]
}

function nickname() {
  nick.innerHTML = input.value;
  input.value = "";
  document.getElementById("start").style.visibility = "hidden";
  document.getElementById("nickname").style.visibility = "hidden";
  }

  start.addEventListener('click', nickname);

  function checkWinner() {
    let computerResult = document.querySelector('[data-computer-score]').innerHTML
    let yourResult = document.querySelector('[data-your-score]').innerHTML
    if (computerResult >= 10) {
      alert(":( You lost, better luck next time.");
      location.reload();
    }
    else if (yourResult >= 10) {
      alert("Great job, you are the winner :) !!");
      location.reload();
    }
    else
    return false
}