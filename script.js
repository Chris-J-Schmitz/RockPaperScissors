console.log('hello derek');

function computerPlay() {
    var result = Math.floor((Math.random() * 3) + 1);
    return result;
};


function playGame(playerSelection, computerSelection){
    if (playerSelection == 1 && computerSelection == 1){
        return("It's a Tie!");
    } else if ( playerSelection == 1 && computerSelection == 2) {
        return("You lose! Paper beats Rock");
    } else if ( playerSelection == 1 && computerSelection == 3) {
        return("You Win! Rock beats Scissors");
    } else if ( playerSelection == 2 && computerSelection == 1) {
        return("You Win! Paper beats Rock");
    } else if ( playerSelection == 2 && computerSelection == 2) {
        return("It's a Tie!");
    } else if ( playerSelection == 2 && computerSelection == 3) {
       return("You lose! Scissors beats Paper");
    } else if ( playerSelection == 3 && computerSelection == 1) {
        return("You lose! Rock beats Scissors");
    } else if ( playerSelection == 3 && computerSelection == 2) {
        return("You Win! Scissors beats Paper");
    } else if ( playerSelection == 3 && computerSelection == 3) {
        return("It's a Tie!");
    } 

};



function game(){

    for (i = 0; i < 6; i++) {
    const playerSelection = prompt('Please choose 1, 2, or 3 for :Rock / Paper / Scissors');
    const computerSelection = computerPlay();
    console.log(playGame(playerSelection,computerSelection));
    }

}

game();


