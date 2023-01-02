
const choice = ["rock","paper","scissors"];


///////////////////Computer Choice///////////////////////////
function getComputerChoice(){
    //math.floor = rounds down to the nearest whole number
    //math.random = random number between 0 & <1
    //choice.length = length of the variable
    //whole line give a random # btwn 0 and the length of the variable
   
    let random_val= Math.floor(Math.random()*choice.length);

    let random_choice= choice[random_val]; //Put the value in the choice array to select an object in it.
    // random_choice = choice[0] or [1] or [2] at random

    return random_choice;
}
////////////////////////////////////////////////////////////////////

///////////////////Player Choice///////////////////////////
function getPlayerChoice(){
    let player_choice = prompt("Enter: rock, paper or scissors");

    player_choice = player_choice.toLowerCase(); //Makes user input in lower case

    return player_choice;
}
//////////////////////////////////////////////////////////

///////////////////Play Round///////////////////////////

function game_winner(playerSelection, computerSelection){


    if(playerSelection == computerSelection){
        return "Draw";
    }
    else if(computerSelection == "rock" && playerSelection == "paper"){
        return "Player"  ; 
    }
    else if(computerSelection == "rock" && playerSelection == "scissors"){
        return "Computer"  ; 
    }
    else if(computerSelection == "scissors" && playerSelection == "paper"){
        return "Computer"  ; 
    }
    else if(computerSelection == "scissors" && playerSelection == "rock"){
        return "Player" ;  
    }
}

function playRound(playerSelection, computerSelection){
    let result = game_winner(playerSelection, computerSelection);


    if(result == "Draw"){ return "Its a tie!"}
    else if(result == "Player"){return `You win! ${playerSelection} beats ${computerSelection}`}
    else if(result == "Computer"){return `You lose! ${computerSelection} beats ${playerSelection}`}
}
//////////////////////////////////////////////////////////

///////////////////Game Loop///////////////////////////
function game(){ //Runs  5 times

    let playerScore=0;
    let compScore=0;
    for (let i=0; i<5; i++){

    //Global variables for functions for each iteration
    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();
    console.log(`Player Selection is ${playerSelection} & Comp Selection is ${computerSelection}`);

        console.log(playRound(playerSelection, computerSelection));

        if(game_winner(playerSelection,computerSelection) == "Player"){
            playerScore++;
        }

        if(game_winner(playerSelection, computerSelection) == "Computer"){
            compScore++;
        }
        console.log("End of round" + i);
    }

    if (playerScore > compScore){return console.log("Player Wins By Knockout!")}
    else {return console.log("Computer Wins!....Fatality!")}
}

game();
////////////////////////////////////////////////////////
