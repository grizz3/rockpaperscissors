let humanScore = 0;
let computerScore = 0;

let computerChoice = "";
let humanChoice = "";

function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    let choice = "none";
    if (randomNum == 0) {
        choice = "rock";
        return choice;
    }
    else if (randomNum == 1) {
        choice = "paper";
        return choice;
    }
    else if (randomNum == 2) {
        choice = "scissors";
        return choice;
    }
}

function getHumanChoice() {
    let input = prompt("Rock, paper, or scissors?");
    return input.toLowerCase();
}

function playRound(){
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();

    if (humanChoice == computerChoice){
        return "Tie."
    }
    else if(humanChoice == "rock"){
        if (computerChoice == "scissors"){
            return "You win!";
        }
        else{
            return "You lose.";
        }
    }
    else if(humanChoice == "paper"){
        if (computerChoice == "rock"){
            return "You win!";
        }
        else{
            return "You lose.";
        }
    }
    else if(humanChoice == "scissors"){
        if (computerChoice == "paper"){
            return "You win!";
        }
        else{
            return "You lose.";
        }
    }
}

console.log(playRound());
console.log("humanChoice = " + humanChoice);
console.log("computerChoice = " + computerChoice);