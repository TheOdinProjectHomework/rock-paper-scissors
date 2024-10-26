console.log("Rock, Paper, Scissors game!");

let humanScore = 0;
let computerScore = 0;

let playerScore = document.getElementById("player-h2");

let p1Score = document.getElementById("p1Score");
// let p1Score = document.createElement("p");
p1Score.textContent = humanScore;
playerScore.appendChild(p1Score);

let cpuScore = document.getElementById("computer-h2");

let p2Score = document.getElementById("p2Score");
// let p2Score = document.createElement("p");
p2Score.textContent = computerScore;
cpuScore.appendChild(p2Score);

let rockBtn = document.getElementById("rockBtn");
let paperBtn = document.getElementById("paperBtn");
let scissorsBtn = document.getElementById("scissorBtn");

rockBtn.addEventListener("click", function() {
    let humanChoice = "rock";
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
});

paperBtn.addEventListener("click", function() {
    let humanChoice = "paper";
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
});

scissorsBtn.addEventListener("click", function() {
    let humanChoice = "scissors";
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
});

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

function weHaveAwinner(playerScore, cpuScore) {
    if(playerScore > 4) {
        humanScore = 0;
        computerScore = 0;
        p1Score.innerHTML = humanScore;
        p2Score.innerHTML = computerScore;
        alert("You win!!!");
    } else if(cpuScore > 4) {
        humanScore = 0;
        computerScore = 0; 
        p1Score.innerHTML = humanScore;
        p2Score.innerHTML = computerScore;
        alert("Computer wins!!!");
    }
}

function playRound(humanChoice, computerChoice) {
    let winner = document.getElementById("winner-tag");
    if(humanChoice === computerChoice) {
        winner.textContent = "It`s a draw!";
    }
    else if(
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        p1Score.textContent = humanScore;
        winner.textContent = "Human wins";
        console.log(`HumanScore: ${humanScore}, ComputerScore: ${computerScore}`);
    } else {
        computerScore++;
        p2Score.textContent = computerScore;
        winner.textContent = "Computer wins";
        console.log(`HumanScore: ${humanScore}, ComputerScore: ${computerScore}`);
    }
    weHaveAwinner(humanScore, computerScore);
}

// console.log("Loading game...");

// while(humanScore <= 2 && computerScore <= 2) {
//     let human = getHumanChoice();
//     while(human === null || human.length < 3) {
//         human = getHumanChoice();
//     }
//     human = human.toLowerCase();
//     let computerChoice = getComputerChoice();
//     playRound(human, computerChoice);
//     if(humanScore === 2) {
//         console.log("Human Wins");
//         break;
//     } else if(computerScore === 2) {
//         console.log("Computer Wins");
//         break;
//     }
// }
// console.log("Thanks for playing!");
