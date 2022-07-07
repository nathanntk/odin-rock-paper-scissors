
// declare variables for player choice and computer choice -- set scores to zero intially
let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

// reference all buttons and the body element with "container" id
let buttons = document.querySelectorAll(".js-button");
const container = document.getElementById('container');

// for each button add script when clicked on
buttons.forEach((button) => {

    button.addEventListener('click', () => {

        // store player selections depending on button pressed
        if (button.textContent == 'Rock') {
            playerSelection = 'rock';
        }
        if (button.textContent == 'Paper') {
            playerSelection = 'paper';
        }
        if (button.textContent == 'Scissors') {
            playerSelection = 'scissors';
        }
        // store computer selection by calling the computerPlay() function -- set to lower case
        computerSelection = computerPlay().toLowerCase();

        // call playRound() -- compares user and cpu choices -- tallies scores
        playRound();
    
        // the first one to reach a score of 5 wins
        if (playerScore == 5 || computerScore == 5) {
            if (playerScore > computerScore) {
                // create div for winning message
                let output = document.createElement('div');
                output.textContent = "you win, good job!";
                output.style.textAlign = "center";
                container.appendChild(output);
            }
            else {
                // create div for losing message
                let output = document.createElement('div');
                output.textContent = "you lose, better luck next time.";
                output.style.textAlign = "center";
                container.appendChild(output);
            }

            // call reset function -- disables buttons, reloads page
            resetGame();
        }
    });
});

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

// disables buttons and reloads page
function resetGame() {
    // for each button set to disable
    buttons.forEach((button) => {
        button.disabled = true;
    });

    // wait one second and reload page
    setTimeout(function(){
        location.reload();
    }, 1000);
};

// compares player and cpu selections and updates scores
function playRound() {
    if (playerSelection == computerSelection) {
        
        const output = document.createElement('div');
        output.textContent = "tie game!";
        output.style.textAlign = "center";
        container.appendChild(output);
    }

    if (playerSelection == 'rock' && computerSelection == 'paper') {

        computerScore = computerScore + 1;

        const output = document.createElement('div');
        output.textContent = "paper beats rock, you lose --> cpu score: " + computerScore;
        output.style.textAlign = "center";
        container.appendChild(output);
    }

    if (playerSelection == 'rock' && computerSelection == 'scissors') {

        playerScore = playerScore + 1;

        const output = document.createElement('div');
        output.textContent = "rock beats scissors, you win --> player score: " + playerScore;
        output.style.textAlign = "center";
        container.appendChild(output);
    }

    if (playerSelection == 'paper' && computerSelection == 'scissors') {

        computerScore = computerScore + 1;

        const output = document.createElement('div');
        output.textContent = "scissors beats paper, you lose --> cpu score: " + computerScore;
        output.style.textAlign = "center";
        container.appendChild(output);
    }

    if (playerSelection == 'paper' && computerSelection == 'rock') {

        playerScore = playerScore + 1;

        const output = document.createElement('div');
        output.textContent = "paper beats rock, you win --> player score: " + playerScore;
        output.style.textAlign = "center";
        container.appendChild(output);
    }

    if (playerSelection == 'scissors' && computerSelection == 'rock') {

        computerScore = computerScore + 1;

        const output = document.createElement('div');
        output.textContent = "rock beats scissors, you lose --> cpu score: " + computerScore;
        output.style.textAlign = "center";
        container.appendChild(output);
    }

    if (playerSelection == 'scissors' && computerSelection == 'paper') {

        playerScore = playerScore + 1;

        const output = document.createElement('div');
        output.textContent = "scissors beats paper, you win --> player score: " + playerScore;
        output.style.textAlign = "center";
        container.appendChild(output);
    }
};


