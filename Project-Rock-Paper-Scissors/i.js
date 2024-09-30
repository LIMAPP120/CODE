const prompt = require("prompt-sync")();

function getComputerChoice(max) {
  let number;
  number = Math.floor(Math.random() * max);
  if (number === 0) {
    return "rock";
  } else if (number === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  console.log("[1] rock, [2] paper, [3] scissors");
  //let humanchoice = 1;

  let humanchoice = prompt("Please enter your name");
  switch (humanchoice) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
    default:
      break;
    //console.log("Please key in 1, 2 or 3");
    //getHumanChoice();
  }
}
let omputerchoice = getComputerChoice(3);
let umanchoice = getHumanChoice();
console.log(umanchoice);
