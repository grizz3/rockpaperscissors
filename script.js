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
            humanScore++;
            return "You win!";
        }
        else{
            computerScore++;
            return "You lose.";
        }
    }
    else if(humanChoice == "paper"){
        if (computerChoice == "rock"){
            humanScore++;
            return "You win!";
        }
        else{
            computerScore++;
            return "You lose.";
        }
    }
    else if(humanChoice == "scissors"){
        if (computerChoice == "paper"){
            humanScore++;
            return "You win!";
        }
        else{
            computerScore++;
            return "You lose.";
        }
    }
}

function playGame(){
    for (let round = 0; round < 5; round++){
        console.log(playRound());
    }

    if (humanScore > computerScore) {
        console.log("You win the game " + humanScore + " : " + computerScore);
    } else if (humanScore < computerScore) {
        console.log("You lose the game " + humanScore + " : " + computerScore);
    }
    else {
        console.log("Tie game " + humanScore + " : " + computerScore);
    }
}

playGame();
//console.log("humanChoice = " + humanChoice);
//console.log("computerChoice = " + computerChoice);