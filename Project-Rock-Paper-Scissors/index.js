let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let num = Math.floor(Math.random() * 3);
  if (num === 0) {
    return "rock";
  } else if (num === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let hc = prompt("Key in rock, paper or scissors: ", "rock").toLowerCase();
  if (hc === "rock" || hc === "paper" || hc === "scissors") {
    return hc;
  } else {
    getHumanChoice();
  }
  return hc;
}

function playRound(getComputerChoice, getHumanChoice) {
  if (getComputerChoice === getHumanChoice) {
    return "This is a Tie. Both are " + getComputerChoice;
  }
  if (getComputerChoice === "rock") {
    if (getHumanChoice === "paper") {
      humanScore += 1;
      return "You win! Paper beats Rock";
    } else {
      computerScore += 1;
      return "You lose! Rock beats Scissors";
    }
  } else if (getComputerChoice === "paper") {
    if (getHumanChoice === "scissors") {
      humanScore += 1;
      return "You win! Scissors beat Paper";
    } else {
      computerScore += 1;
      return "You lose! Paper beats Rock";
    }
  } else {
    if (getHumanChoice === "rock") {
      humanScore += 1;
      return "You win! Rock beats Scissors";
    } else {
      computerScore += 1;
      return "You lose! Scissors beat Paper";
    }
  }
}

function playGame(round) {
  for (let i = 1; i <= 5; i++) {
    let msg = playRound(getComputerChoice(), getHumanChoice());
    alert(`Round ${i}: ${msg}`);
  }
  return "Human Score: " + humanScore + ", Computer Score: " + computerScore;
}

console.log(playGame(5));
