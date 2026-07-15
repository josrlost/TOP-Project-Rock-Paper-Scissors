//console.log('Hello World');

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

//getComputerChoice

let humanChoice = prompt('Write a valid choice', 'Scissors');

function getHumanChoice(humanChoice) {
   switch(humanChoice) {
    case "Scissors" || "scissors":
        console.log(getComputerChoice());
        break;
    case "Paper" || "paper":
        console.log(getComputerChoice());
        break;
    case "Rock" || "rock":
        console.log(getComputerChoice());
        break;
    default:
        console.log('Sorry that is not a valid input');
   }
}

getHumanChoice(humanChoice);

let humanScore = 0;
let computer = 0;


