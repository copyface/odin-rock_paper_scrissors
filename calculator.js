// score variables 
let humanScore = 0;
let computerScore = 0;
let choices = ["rock", "paper", "scissors"];

// get the computers choice
function getComputerChoice() {
  let random = Math.floor(Math.random() * choices.length);
  // console.log(choices[random]);
  return choices[random];
}

// get the human choice 
function getHumanChoice() {
  let choice = prompt("Your choice?");
  return choice.toLowerCase();
}

// play the round
function playRound(humanChoice, computerChoice) {
  if (humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "paper" && computerChoice === "rock" || humanChoice === "scissors" && computerChoice === "paper") {
    humanScore++;
    console.log("human: " + humanChoice + " vs " + "computer: " + computerChoice);
    console.log("You Won! " + humanChoice + " beats " + computerChoice + ".");
    return;
  } else if (humanChoice === computerChoice) {
    console.log("human: " + humanChoice + " vs " + "computer: " + computerChoice);
    console.log("Draw! both chose " + humanChoice + ".");
    return;
  } else {
    computerScore++;
    console.log("human: " + humanChoice + " vs " + "computer: " + computerChoice);
    console.log("You Lose! " + computerChoice + " beats " + humanChoice + ".");
    return;
  }
} 

// play the game
function playGame(round) {
  for (let i = 0; i < round; i++) {
    console.log("round: " + (i + 1));
    playRound(getHumanChoice(), getComputerChoice()); 
  }
  console.log("Human: " + humanScore);
  console.log("Computer: " + computerScore);
  if (humanScore > computerScore) {
    console.log("Human Won!"); 
  } else {
    console.log("Computer Won!");
  }
}

playGame(5);
