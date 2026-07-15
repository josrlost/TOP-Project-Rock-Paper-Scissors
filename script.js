
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

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let computerSelection;
    let humanSelection;;
    function playRound(humanChoice, computerChoice) {
    if(humanChoice === 'Scissors' && computerChoice === 'Rock') {
        ++computerScore;
        console.log('You lost this round! Rock beats Scissors');
    } else if(humanChoice === 'Scissors' && computerChoice === 'Scissors') {
        console.log('This round is a draw!');
    } else if(humanChoice === 'Scissors' && computerChoice === 'Paper') {
        ++humanScore;
        console.log('You won this round! Scissors beat Paper');
    } else if(humanChoice === 'Rock' && computerChoice === 'Rock') {
        console.log('This round is a draw!');
    } else if(humanChoice === 'Rock' && computerChoice === 'Scissors') {
        ++humanScore;
        console.log('You win this round! Rock beats Scissors');
    } else if(humanChoice === 'Rock' && computerChoice === 'Paper') {
        ++computerScore;
        console.log('You lost this round! Paper beats Rock');
    } else if(humanChoice === 'Paper' && computerChoice === 'Rock') {
        ++humanScore;
        console.log('You won this round! Paper beats Rock');
    } else if(humanChoice === 'Paper' && computerChoice === 'Scissor') {
        ++computerScore;
        console.log('You lost this round! Scissors beats Paper');
    } else if(humanChoice === 'Paper' && computerChoice === 'Paper') {
        console.log('This round is a draw!');
    }
} for(let i = 0; i < 5; i++) {
    computerSelection = getComputerChoice();
    humanSelection = getHumanChoice();
    playRound(humanSelection, computerSelection);
} if(humanScore > computerScore){
    console.log(`You won! Your total score is ${humanScore}`)
} else if(humanScore < computerScore) {
    console.log(`You lost! Your total score is ${humanScore}`)
} else if(humanScore === computerScore) {
    console.log(`It's a total draw! Your score was: ${humanScore}. The computer score was: ${computerScore}`);
}
}
playGame();