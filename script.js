
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(humanChoice, computerChoice) {

    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log(`tie ${humanChoice}.`);
        return "tie";
    }

    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        return "human";
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        return "computer";
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 1; i <= 5; i++) {
        console.log(`Game ${i}`);
        
        let humanChoice = prompt("Enter Rock, Paper, or Scissors:");
        
        if (!humanChoice) {
            console.log("not entered anything");
            continue;
        }

        const computerChoice = getComputerChoice();
        const winner = playRound(humanChoice, computerChoice);

        if (winner === "human") {
            humanScore++;
        } else if (winner === "computer") {
            computerScore++;
        }

        console.log(`Score: You ${humanScore} - ${computerScore} Computer`);
    }

    console.log("end");
    console.log(`Score: You ${humanScore} - ${computerScore} Computer`);

    if (humanScore > computerScore) {
        console.log("You won!");
    } else if (computerScore > humanScore) {
        console.log("You lose.");
    } else {
        console.log("tie!");
    }
}

playGame();