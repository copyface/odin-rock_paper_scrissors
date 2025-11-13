// variables
let playerChoice = null;
let playerScore = 0;
let computerScore = 0;
let log = null;

const playerScoreText = document.querySelector("#player-score");
const computerScoreText = document.querySelector("#computer-score");
const computerChoiceText = document.querySelector("#computer-choice");
const choices = ["rock", "paper", "scissors"];
const options = document.querySelector(".card");
const menuButton = document.querySelector("#menu__button");
const container = document.querySelector(".container");

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
    const status = "You Won! " + humanChoice + " beats " + computerChoice + ".";
    log = status;
    return;
  } else if (humanChoice === computerChoice) {
    const status = "Draw! both chose " + humanChoice + ".";
    log = status;
    return;
  } else {
    computerScore++;
    computerScoreText.textContent = computerScore;
    const status =
      "You Lose! " + computerChoice + " beats " + humanChoice + ".";
    log = status;
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
    choice.setAttribute("style", "background-color: green;");
    playGame();
  }
});

// play the game
function playGame() {
  const display = document.createElement("div");
  const text = document.createElement("h3");
  const nextButton = document.createElement("button");
  const disableButton = options.querySelectorAll("button");

  disableButton.forEach((button) => {
    button.disabled = true;
  });

  display.setAttribute(
    "style",
    "display: flex; justify-content: center; align-items: center; margin-top: 20px; gap: 20px;",
  );
  nextButton.setAttribute(
    "style",
    "padding: 10px 20px; border: 2px solid black; border-radius: 5px;",
  );
  nextButton.textContent = "Next";

  nextButton.addEventListener("click", () => {
    disableButton.forEach((button) => {
      button.disabled = false;
      button.setAttribute("style", "background-color: none;");
    });
    computerChoiceText.textContent = "...";
    container.removeChild(display);
  });

  display.appendChild(text);
  display.appendChild(nextButton);

  let computerChoice = getComputerChoice();
  playRound(playerChoice, computerChoice);
  text.textContent = log;
  container.appendChild(display);
  computerChoiceText.textContent = computerChoice;
  playerChoice = null;
}

// remove screen
function mainMenu() {
  const menu = document.querySelector("#menu");
  menu.remove();
}

menuButton.addEventListener("click", mainMenu);
