console.log("Hello World")

let computerChoice = 0;
let humanChoice = 0;

let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    return Math.floor(Math.random() * 3);
}


function getHumanChoice(){
    let input = prompt("Rock, paper, or scissors?");
    input = input.toLowerCase();
    if (input == "rock"){
        input = 0;
        return input;
    }
    else if(input == "paper"){
        input = 1;
        return input;
    }
    else if(input == "scissors"){
        input = 2;
        return input;
    }
}

function playRound(humanChoice, computerChoice){
    computerChoice = getComputerChoice();
    humanChoice = getHumanChoice();
    return "playRound";
}



console.log(playRound());