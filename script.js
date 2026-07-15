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

getComputerChoice();

