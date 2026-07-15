
//let humanScore = 0;
//let computerScore = 0;
//const computerChoice = getComputerChoice();
//const humanChoice = getHumanChoice();

let promptInput = prompt()


function getComputerChoice() {
    let scissors = 'Scissors';
    let paper = 'Paper';
    let rock = 'Rock';
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    if(randomNumber === 1) {
        return console.log(scissors);
    } else if(randomNumber === 2) {
        return console.log(paper);
    } else {
        return console.log(rock);
    }
}


function getHumanChoice() {
  if(promptInput === 'Scissors') {
    console.log('Scissors');
  } else if(promptInput === 'Rock') {
    console.log('Rock');
  } else if(promptInput === 'Paper') {
    console.log('Paper');
}   else {
    console.log('This is not a valid input')
}
}   

getHumanChoice();



/*

function getHumanChoice(promptInput) {
    switch(promptInput) {
        case 'Scissors' || 'scissors':
            promptInput;
            break;
        case 'Paper' || 'paper':
            promptInput;
            break;
        case 'Rock' || 'rock':
            promptInput;
            break;
        default:
            promptInput; 
   }
}

*/


/*
function playRound(humanSelection, computerChoice) {
     switch(humanSelection, computerChoice) {
        case ('Scissors' || 'scissors') && 'Rock':
            computerScore++;
            console.log('You lose! Rock beats scissors');
            break;
        case ('Scissors' || 'scissors') && 'Scissors':
            console.log('This is Draw!, Scissors does not beat Scissors');
            break;
        case ('Scissors' || 'scissors') && 'Paper':
            humanScore++;
            console.log('You win! Scissors beat paper');
            break;
        case ('Rock' || 'rock') && 'Rock':
            console.log('This is a Draw! Rock does not beat Rock');
            break;
        case ('Rock' || 'rock') && 'Scissors':
            humanScore++;
            console.log('You win! Rock beats Scissors');
            break;
        case ('Rock' || 'rock') && 'Paper':
            computerScore++;
            console.log('You lose! Rock does not beat Paper');
            break;
        case ('Paper' || 'paper') && 'Rock':
            humanScore++;
            console.log('You win! Paper beats Rock');
            break;
        case ('Paper' || 'paper') && 'Scissors':
            computerScore++;
            console.log('You lose! Paper does not beat Scissors');
            break;
        case ('Paper' || 'paper') && 'Paper':
            console.log('This is a Draw! Paper does not bear Paper');
            break;
        default:
            console.log('That is not a valid input, reload the page and try again!')
    }
}
*/