const choices = ["rock", "paper","scissors"]
const winners = [] //Empty array to house winners of each round
  
function game() {
    //play the hame 
    //Play 5 rounds
    //console based
    for (let i=0; i< 5; i++){
        playRound(i) //i = round [0] , 1 ...
    }
    logWins()
}

function playRound(round_num){
    
    const computerSelection =  computerChoice()
    const playerSelection = playerChoice()
    const winner = checkWinner(playerSelection, computerSelection)
   // console.log(winner)
    winners.push(winner) //Put winner for each round in winners array.
    
    logRound(playerChoice, computerChoice, winner, round_num)
}

function playerChoice(){
    let user = prompt("Type Rock, Paper, or Scissors");
   while (user == null) {
      user = prompt("Type Rock, Paper, or Scissors");
    } 
    user = user.toLowerCase();
    let check = validateUser(user);
    while (check == false) { //Wrong input
      user = prompt(
        "Type Rock, Paper, or Scissors. Spelling needs to be exact, but capitilization doesnt matter"
      );
      while (user == null) { //At steady state
        user = prompt("Type Rock, Paper, or Scissors");
      }
      user = user.toLowerCase();
      check = validateUser(user);
    }
    return user;
} 

function computerChoice(){

//Math.random()*choices.length  = (0 to <1) x choices.length = 0 to < 3
//Math.Floor => rounds down to a whole number
// Math.floor(Math.random()*choices.length))
// return choices[#] .... The # = [0], [1] or [2]
    return choices[Math.floor(Math.random()*choices.length)]
}

/*
//Function to validate player's selection
function validateUser(choice){
    if (choices.includes(choice)){
        //array.includes(<insert object>) Means if the object is in the array, do this.
        return true; //null(its value = NULL), true(1) & false(0) are objects with value
    }else {return false;}
}
*/
//Optimized Validator
function validateUser(choice){ return choices.includes(choice);}

function checkWinner(choiceP, choiceC){
    if(choiceP == choiceC){
       {return "Tie";} 
    }else if( //Player Wins!
    (choiceP == "rock" && choiceC == "scissors") || 
    (choiceP == "paper" && choiceC == "rock") ||
    (choiceP == "scissors" && choiceC == "paper"))
       {return "Player" }
    else {return "Computer"}
    
}

function logWins(){//Filters for winner in each round & return Player,Computer or Tie
    let playerWins = winners.filter((round_winner) => round_winner == "Player").length  //Gets the # of times player is in winners array
    let computerWins = winners.filter((round_winner) => round_winner == "Computer").length
    let ties = winners.filter((round_winner) => round_winner == "Tie").length

    console.log("END OF FIGHT!")
    console.log("Total Player Wins: "+ playerWins)
    console.log("Total Computer Wins: "+ computerWins)
    console.log("Total Ties: "+ ties)
}

function logRound(playerChoice, computerChoice, winner, round_num){
   // console.log("Round :" , round_num)
    console.log("Player Chose :"+ playerChoice())
    console.log("Computer Chose :"+ computerChoice())
    console.log("Round Winner is :", winner)

    console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxx")
}


game()