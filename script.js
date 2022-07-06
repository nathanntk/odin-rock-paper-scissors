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

    setTimeout(function(){
        location.reload();
    }, 1000);
};

let buttons = document.querySelectorAll(".js-button");
const body = document.querySelector("body");

buttons.forEach((button) => {

    button.addEventListener('click', () => {
        // store player and cpu selections
    
        if (button.textContent == 'Rock') {
            playerSelection = 'rock';
        }
        if (button.textContent == 'Paper') {
            playerSelection = 'paper';
        }
        if (button.textContent == 'Scissors') {
            playerSelection = 'scissors';
        }
        computerSelection = computerPlay().toLowerCase();
    
        // when player wins round --> tempPlayerScore = playerScore + 1;
        // when cpu wins round --> tempCpuScore = computerScore + 1;

        const container = document.getElementById('container');
        if (playerSelection == computerSelection) {
            const output = document.createElement('div');
            output.textContent = "tie game!";
            container.appendChild(output);
        }
    
        if (playerSelection == 'rock' && computerSelection == 'paper') {
            computerScore = computerScore + 1;
    
            const output = document.createElement('div');
            output.textContent = "paper beats rock, you lose --> cpu score: " + computerScore;
            container.appendChild(output);
    
            let cpuScoreBox = document.createElement('div');
            cpuScoreBox.textContent = computerScore;
        }
    
        if (playerSelection == 'rock' && computerSelection == 'scissors') {
            playerScore = playerScore + 1;
    
            const output = document.createElement('div');
            output.textContent = "rock beats scissors, you win --> player score: " + playerScore;
            container.appendChild(output);
    
            let playerScoreBox = document.createElement('div');
            playerScoreBox.textContent = computerScore;
        }
    
        if (playerSelection == 'paper' && computerSelection == 'scissors') {
            computerScore = computerScore + 1;
    
            const output = document.createElement('div');
            output.textContent = "scissors beats paper, you lose --> cpu score: " + computerScore;
            container.appendChild(output);
    
            let cpuScoreBox = document.createElement('div');
            cpuScoreBox.textContent = computerScore;
        }
    
        if (playerSelection == 'paper' && computerSelection == 'rock') {
            playerScore = playerScore + 1;
    
            const output = document.createElement('div');
            output.textContent = "paper beats rock, you win --> player score: " + playerScore;
            container.appendChild(output);
    
            let playerScoreBox = document.createElement('div');
            playerScoreBox.textContent = computerScore;
        }
    
        if (playerSelection == 'scissors' && computerSelection == 'rock') {
            computerScore = computerScore + 1;
    
            const output = document.createElement('div');
            output.textContent = "rock beats scissors, you lose --> cpu score: " + computerScore;
            container.appendChild(output);
    
            let cpuScoreBox = document.createElement('div');
            cpuScoreBox.textContent = computerScore;
        }
    
        if (playerSelection == 'scissors' && computerSelection == 'paper') {
            playerScore = playerScore + 1;
    
            const output = document.createElement('div');
            output.textContent = "scissors beats paper, you win --> player score: " + playerScore;
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



});




