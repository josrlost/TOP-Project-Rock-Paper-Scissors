let humanScore = 0;
let computerScore = 0;

const paperBtn = document.querySelector('#Paper');
const rockBtn = document.querySelector('#Rock');
const scissorsBtn = document.querySelector('#Scissors');
const content = document.querySelector('#display');


let totalScore = document.createElement('h3');
content.appendChild(totalScore);
totalScore.textContent = `You won ${humanScore} out of ${computerScore}`;

let victoryDecla = document.createElement('p');
content.appendChild(victoryDecla);

let displayScore = document.createElement('span');
content.appendChild(displayScore);

paperBtn.addEventListener('click', (evt) => playRound(evt, getComputerChoice()));
rockBtn.addEventListener('click', (evt) => playRound(evt, getComputerChoice()));
scissorsBtn.addEventListener('click', (evt) => playRound(evt, getComputerChoice()));


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


 function playRound(evt, computerChoice) {
    evt.preventDefault();
    humanScore >= 5 && computerScore <= humanScore ? victoryDecla.textContent = 'You win. You\'ve obtained 5 points.' : 'You lost a round a of 5.';
    totalScore.textContent = `You won ${humanScore} out of ${computerScore}`;
    if(evt.target === scissorsBtn && computerChoice === 'Rock') {
        ++computerScore;
        displayScore.textContent = `You've lost this round! Rock beats Scissors.`;
        console.log('You lost this round! Rock beats Scissors');
    } else if(evt.target === scissorsBtn && computerChoice === 'Scissors') {
        displayScore.textContent = `This round is a draw! Both choices were Scissors.`;
        console.log('This round is a draw!');
    } else if(evt.target === scissorsBtn && computerChoice === 'Paper') {
        ++humanScore;
        displayScore.textContent = `You've won this round! Scissors beat Paper.`;
        console.log('You won this round! Scissors beat Paper');
    } else if(evt.target === rockBtn && computerChoice === 'Rock') {
        displayScore.textContent = `This round is a draw! Both choices were Rock.`;
        console.log('This round is a draw!');
    } else if(evt.target === rockBtn && computerChoice === 'Scissors') {
        ++humanScore;
        displayScore.textContent = `You've won this round! Rock beats Scissors.`;
        console.log('You win this round! Rock beats Scissors');
    } else if(evt.target === rockBtn && computerChoice === 'Paper') {
        ++computerScore;
        displayScore.textContent = `You've lost this round! Paper beats Rock.`;
        console.log('You lost this round! Paper beats Rock');
    } else if(evt.target === paperBtn && computerChoice === 'Rock') {
        ++humanScore;
        displayScore.textContent = `You've won this round! Paper beats Rock.`;
        console.log('You won this round! Paper beats Rock');
    } else if(evt.target === paperBtn && computerChoice === 'Scissor') {
        ++computerScore;
        displayScore.textContent = `You've lost this round! Scissors beat Paper.`;
        console.log('You lost this round! Scissors beats Paper');
    } else if(evt.target === paperBtn && computerChoice === 'Paper') {
        displayScore.textContent = `This is a draw! Both choices were Paper.`;
        console.log('This round is a draw!');
    } 
 }