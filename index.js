
const choice = ["rock","paper","scissors"];


///////////////////Computer///////////////////////////
function getComputerChoice(choice){
    //math.floor = rounds down to the nearest whole number
    //math.random = random number between 0 & <1
    //choice.length = length of the variable
    //whole line give a random # btwn 0 and the length of the variable
   
    let random_val= Math.floor(Math.random()*choice.length);

    let random_choice= choice[random_val]; 
    // random_choice = choice[0] or [1] or [2] at random

    return random_choice;
}

console.log(getComputerChoice(choice));
let comp_choice = Number(getComputerChoice(choice));
///////////////////////////////////////////////////////////


///////////////Player Choice Selection///////////////////
let player1_choice = prompt("Enter either: Rock, Paper or Scissors");
console.log(player1_choice);
let player_choice = Number(player1_choice);
/////////////////////////////////////////////////////////

//////////////GAME START/////////////////////////////
let _draw= "DRAW!";
let win_comp = "COMPUTER WINS";
let win_play= "PLAYER WINS";

function playRound(comp_choice, player_choice){ let count=0;
    if(comp_choice == player_choice) 
        { console.log("DRAW!");count =0; } 
    if(comp_choice =="ROCK" && player_choice=="SCISSORS")
        { console.log("COMPUTER WINS!"); count =1;}
     if(comp_choice =="ROCK" && player_choice =="PAPER")
        { console.log("PLAYER WINS!"); count =2; }
    if(comp_choice =="SCISSORS" && player_choice=="ROCK")
        { console.log("PLAYER WINS!"); count =2; }
    if(comp_choice =="PAPER" && player_choice =="ROCK")
        { console.log("COMPUTER WINS!"); count =1;}
        
    return count;
}   
playRound();
//if(playRound()==0){console.log(_draw)};
//if(playRound()==1){console.log(win_comp)};
//if(playRound()==2){console.log(win_play)};
///////////////////////////////////////////////////////////

///////////////////LOOP #/////////////////////////