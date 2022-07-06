let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

// returns rock, paper, or scissors randomly
function computerPlay() {
    // randomNum = random number from 0 to 2
    let randomNum = Math.floor(Math.random() * 3);

    // variable declarations/initializations
    let rock = 'Rock';
    let paper = 'Paper';
    let scissors = 'Scissors';

    if (randomNum == 0)
        return rock;
    else if (randomNum == 1)
        return paper;
    else if (randomNum == 2)
        return scissors;
};

function resetGame() {
    playerScore = 0;
    computerScore = 0;
};

const rockBtn = document.getElementById('rock-btn');
rockBtn.addEventListener('click', () => {
    // store player and cpu selections
    playerSelection = 'rock';
    computerSelection = computerPlay().toLowerCase();

    // when player wins round --> tempPlayerScore = playerScore + 1;
    // when cpu wins round --> tempCpuScore = computerScore + 1;
    const container = document.getElementById('container');
    if (playerSelection == computerSelection) {
        const output = document.createElement('div');
        output.textContent = "tie game!";
        container.appendChild(output);
    }

    if (computerSelection == 'paper') {
        computerScore = computerScore + 1;

        const output = document.createElement('div');
        output.textContent = "paper beats rock, you lose --> cpu score: " + computerScore;
        container.appendChild(output);

        let cpuScoreBox = document.createElement('div');
        cpuScoreBox.textContent = computerScore;
    }

    if (computerSelection == 'scissors') {
        playerScore = playerScore + 1;

        const output = document.createElement('div');
        output.textContent = "rock beats scissors, you win --> player score: " + playerScore;
        container.appendChild(output);

        let playerScoreBox = document.createElement('div');
        playerScoreBox.textContent = computerScore;
    }

    if (playerScore == 5 || computerScore == 5) {
        if (playerScore > computerScore) {
            let output = document.createElement('div');
            output.textContent = "you win, good job!";
            container.appendChild(output);
        }
        else {
            let output = document.createElement('div');
            output.textContent = "you lose, better luck next time.";
            container.appendChild(output);
        }

        resetGame();
    }
});




