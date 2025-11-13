// variables
let playerChoice = null;
let playerScore = 0;
let computerScore = 0;

const playerScoreText = document.querySelector("#player-score");
const computerScoreText = document.querySelector("#computer-score");
const computerChoiceText = document.querySelector("#computer-choice");
const choices = ["rock", "paper", "scissors"];
const options = document.querySelector(".card");
const menuButton = document.querySelector("#menu__button");

// get the computers choice
function getComputerChoice() {
  const random = Math.floor(Math.random() * choices.length);
  return choices[random];
}

// play the round
function playRound(humanChoice, computerChoice) {
  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    playerScore++;
    playerScoreText.textContent = playerScore;
    console.log(
      "human: " + humanChoice + " vs " + "computer: " + computerChoice,
    );
    console.log("You Won! " + humanChoice + " beats " + computerChoice + ".");
    return;
  } else if (humanChoice === computerChoice) {
    console.log(
      "human: " + humanChoice + " vs " + "computer: " + computerChoice,
    );
    console.log("Draw! both chose " + humanChoice + ".");
    return;
  } else {
    computerScore++;
    computerScoreText.textContent = computerScore;
    console.log(
      "human: " + humanChoice + " vs " + "computer: " + computerChoice,
    );
    console.log("You Lose! " + computerChoice + " beats " + humanChoice + ".");
    return;
  }
}
options.addEventListener("click", (event) => {
  const choice = event.target;

  switch (true) {
    case choice.className.includes("card__button--rock"):
      playerChoice = "rock";
      break;
    case choice.className.includes("card__button--paper"):
      playerChoice = "paper";
      break;
    case choice.className.includes("card__button--scissors"):
      playerChoice = "scissors";
      break;
  }

  if (playerChoice) {
    console.log("Player selected: " + playerChoice);
    playGame();
  }
});

// play the game
function playGame() {
  const display = document.createElement("h3");

  let computerChoice = getComputerChoice();
  playRound(playerChoice, computerChoice);
  computerChoiceText.textContent = computerChoice;
  playerChoice = null;
}

// remove screen
function mainMenu() {
  const menu = document.querySelector("#menu");
  menu.remove();
}

menuButton.addEventListener("click", mainMenu);
