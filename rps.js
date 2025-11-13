// variables
let humanScore = 0;
let computerScore = 0;
let playerChoice = null;

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
    humanScore++;
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
    console.log(
      "human: " + humanChoice + " vs " + "computer: " + computerChoice,
    );
    console.log("You Lose! " + computerChoice + " beats " + humanChoice + ".");
    return;
  }
}

// player choice
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
  }
});

// play the game
function playGame() {
  let computerChoice = getComputerChoice();
  playRound();
}

// remove screen
function mainMenu() {
  const menu = document.querySelector("#menu");
  menu.remove();
  playGame();
}

menuButton.addEventListener("click", mainMenu);
