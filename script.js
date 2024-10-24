console.log("Hello world!");

function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);
    let choice;
    if(random === 0 ) {
        choice = "rock";
    } else if(random === 1) {
        choice = "paper";
    } else {
        choice = "scissors";
    }
    return choice;
}

function getHumanChoice() {
    let humanChoice = prompt("Please enter your choice: rock, paper, or scissors?");
    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice) {
    if(humanChoice === computerChoice) {
        alert("Draw!!");
    }
    else if(
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        alert("Human wins this round");
        humanScore++;
        console.log(`HumanScore: ${humanScore}, ComputerScore: ${computerScore}`);
    } else {
        computerScore++;
        alert("Computer wins this round");
        console.log(`HumanScore: ${humanScore}, ComputerScore: ${computerScore}`);
    }
}

console.log("Loading game...");

while(humanScore <= 2 && computerScore <= 2) {
    let human = getHumanChoice();
    while(human === null || human.length < 3) {
        human = getHumanChoice();
    }
    human = human.toLowerCase();
    let computerChoice = getComputerChoice();
    playRound(human, computerChoice);
    if(humanScore === 2) {
        console.log("Human Wins");
        break;
    } else if(computerScore === 2) {
        console.log("Computer Wins");
        break;
    }
}
console.log("Thanks for playing!");
