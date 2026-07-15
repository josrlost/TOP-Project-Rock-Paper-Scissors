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
   /* default:
        console.log('Sorry that is not a valid input'); */
   }
}

//getHumanChoice

let humanScore = 0;
let computerScore = 0;
let computerChoice = getComputerChoice();

function recordScore(humanChoice, computerChoice) {
    switch(humanChoice, computerChoice) {
        case 'Scissors' || 'scissors' && 'Rock':
            console.log(computerScore++);
            break;
        case 'Scissors' || 'scissors' && 'Scissors':
            console.log('Draw');
            break;
        case 'Scissors' || 'scissors' && 'Paper':
            console.log(humanScore++);
            break;
        case 'Rock' || 'rock' && 'Rock':
            console.log('Draw');
            break;
        case 'Rock' || 'rock' && 'Scissors':
            console.log(humanScore++);
            break;
        case 'Rock' || 'rock' && 'Paper':
            console.log(computerScore++);
            break;
        case 'Paper' || 'paper' && 'Rock':
            console.log(humanScore++);
            break;
        case 'Paper' || 'paper' && 'Scissors':
            console.log(computerScore++);
            break;
        case 'Paper' || 'paper' && 'Paper':
            console.log('Draw');
            break;
    }
}

recordScore(humanChoice, computerChoice);