
/*
let humanScore = 0;
let computerScore = 0;
const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();
*/
let promptInput = () => prompt();


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

/*
function getHumanChoice() {
    
    let scissors = 'Scissors';
    let rock = 'Rock';
    let paper = 'Paper';
    let message = 'This is not a valid input';
    switch(promptInput) {
        case 'scissors':
        console.log(scissors);
        break;
        case 'rock':
        console.log(rock);
        break;
        case 'paper':
        console.log(paper);
        break;
        default:
        console.log(message);
    }

}   
*/

function playRound(humanSelection, computerSelection) {

}