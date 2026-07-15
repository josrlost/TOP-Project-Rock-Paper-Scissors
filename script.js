//console.log('Hello World');

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

//getComputerChoice

let humanChoice = prompt('Write a valid choice', 'Scissors');

function getHumanChoice(humanChoice) {
   switch(humanChoice) {
    case "Scissors" || "scissors":
        return humanChoice;
        break;
    case "Paper" || "paper":
        return humanChoice;
        break;
    case "Rock" || "rock":
        return humanChoice;
        break;
     default:
        return ; 
   }
}

//getHumanChoice

let humanScore = 0;
let computerScore = 0;
let computerChoice = getComputerChoice();


function playRound(humanChoice, computerChoice) {
    switch(humanChoice, computerChoice) {
        case 'Scissors' || 'scissors' && 'Rock':
            computerScore++;
            console.log('You lose! Rock beats scissors');
            break;
        case 'Scissors' || 'scissors' && 'Scissors':
            console.log('This is Draw!, Scissors does not beat Scissors');
            break;
        case 'Scissors' || 'scissors' && 'Paper':
            humanScore++;
            console.log('You win! Scissors beat paper');
            break;
        case 'Rock' || 'rock' && 'Rock':
            console.log('This is a Draw! Rock does not beat Rock');
            break;
        case 'Rock' || 'rock' && 'Scissors':
            humanScore++;
            console.log('You win! Rock beats Scissors');
            break;
        case 'Rock' || 'rock' && 'Paper':
            computerScore++;
            console.log('You lose! Rock does not beat Paper');
            break;
        case 'Paper' || 'paper' && 'Rock':
            humanScore++;
            console.log('You win! Paper beats Rock');
            break;
        case 'Paper' || 'paper' && 'Scissors':
            computerScore++;
            console.log('You lose! Paper does not beat Scissors');
            break;
        case 'Paper' || 'paper' && 'Paper':
            console.log('This is a Draw! Paper does not bear Paper');
            break;
        default:
            console.log('That is not a valid input, reload the page and try again!')
    }
}

playRound(humanChoice, computerChoice);

