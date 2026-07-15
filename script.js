
// STEP 4: Declare the players score variables
let humanScore = 0;
let computerScore = 0;
// STEP 5: Write the logic to play a single round
const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();

// STEP 2: Write the logic to get computer choice
function getComputerChoice() {
    let scissors = 'Scissors';
    let paper = 'Paper';
    let rock = 'Rock';
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    if(randomNumber === 1) {
        return scissors;
    } else if(randomNumber === 2) {
        return paper;
    } else {
        return rock;
    }
}

// STEP 3: Write the logic to get human choice
function getHumanChoice() {
    let askQuestion = () => prompt();
    let scissors = 'Scissors';
    let rock = 'Rock';
    let paper = 'Paper';
    let message = 'This is not a valid input';
    switch(askQuestion().toLowerCase()) {
        case 'scissors':
        return scissors;
        break;
        case 'rock':
        return rock;
        break;
        case 'paper':
        return paper;
        break;
        default:
        return message;
    }

}   

//STEP 5: Write the logic to play a single round
function playRound(humanChoice, computerChoice) {
    if(humanChoice === 'Scissors' && computerChoice === 'Rock') {
        ++computerScore;
        console.log('You lose! Rock beats Scissors');
    } else if(humanChoice === 'Scissors' && computerChoice === 'Scissors') {
        console.log('It\'s a draw!');
    } else if(humanChoice === 'Scissors' && computerChoice === 'Paper') {
        ++humanScore;
        console.log('You win! Scissors beat Paper');
    } else if(humanChoice === 'Rock' && computerChoice === 'Rock') {
        console.log('It\'s a draw!');
    } else if(humanChoice === 'Rock' && computerChoice === 'Scissors') {
        ++humanScore;
        console.log('You win! Rock beats Scissors');
    } else if(humanChoice === 'Rock' && computerChoice === 'Paper') {
        ++computerScore;
        console.log('You lose! Paper beats Rock');
    } else if(humanChoice === 'Paper' && computerChoice === 'Rock') {
        ++humanScore;
        console.log('You win! Paper beats Rock');
    } else if(humanChoice === 'Paper' && computerChoice === 'Scissor') {
        ++computerScore;
        console.log('You lose! Scissors beats Paper');
    } else if(humanChoice === 'Paper' && computerChoice === 'Paper') {
        console.log('It\'s a draw!');
    }
}

playRound(humanSelection, computerSelection);