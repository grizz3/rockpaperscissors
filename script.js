let humanScore = 0;
let computerScore = 0;
let roundCount = 0;
const maxRounds = 5;

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

function updateScores() {
    document.getElementById("human-score").textContent = humanScore;
    document.getElementById("computer-score").textContent = computerScore;
}

function updateRoundCount() {
    document.getElementById("round-count-display").textContent = roundCount;
}

function updateResult(resultText) {
    document.getElementById("result-text").textContent = resultText;
}

function updateWinner(winnerText) {
    document.getElementById("winner-text").textContent = winnerText;
}

function determineWinner() {
    if (humanScore > computerScore) {
        return "You win the game " + humanScore + " : " + computerScore;
    } else if (humanScore < computerScore) {
        return "You lose the game " + humanScore + " : " + computerScore;
    }
    else {
        return "Tie game " + humanScore + " : " + computerScore;
    }
}

function playRound(humanChoiceInput) {
    if (roundCount >= maxRounds) {
        return;
    }

    humanChoice = humanChoiceInput;
    computerChoice = getComputerChoice();

    let result = "";

    if (humanChoice == computerChoice) {
        result = "Tie! Both chose " + humanChoice + ".";
    }
    else if (humanChoice == "rock") {
        if (computerChoice == "scissors") {
            humanScore++;
            result = "You win! Rock crushes scissors.";
        }
        else {
            computerScore++;
            result = "You lose. Paper covers rock.";
        }
    }
    else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            humanScore++;
            result = "You win! Paper covers rock.";
        }
        else {
            computerScore++;
            result = "You lose. Scissors cut paper.";
        }
    }
    else if (humanChoice == "scissors") {
        if (computerChoice == "paper") {
            humanScore++;
            result = "You win! Scissors cut paper.";
        }
        else {
            computerScore++;
            result = "You lose. Rock crushes scissors.";
        }
    }

    if (humanChoice != computerChoice) {
        roundCount++;
    }

    updateScores();
    updateRoundCount();
    updateResult(result + " Computer chose " + computerChoice + ".");

    if (roundCount >= maxRounds) {
        updateWinner(determineWinner());
    }
}

document.getElementById("rock-btn").addEventListener("click", function() {
    playRound("rock");
});

document.getElementById("paper-btn").addEventListener("click", function() {
    playRound("paper");
});

document.getElementById("scissors-btn").addEventListener("click", function() {
    playRound("scissors");
});