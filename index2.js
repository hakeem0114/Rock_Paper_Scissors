const choices = ["rock", "paper", "scissors"];
let winners = [];

function resetGame(){
  //reset game
}
function game() {

  //play game will player/comp score =5
  let imgs = document.querySelectorAll("img") //Gets all images as a nodelist
  imgs.forEach((img) => //For each image
    img.addEventListener(("click"),()=> {
      if(img.id){ //If the image has an id
        playRound(img.id) //Use player image pressed as input
      }
    } )
  )
}

function playRound(playerChoice) { //img.id = player choice

  let total_wins = checkWins()
  if (total_wins > 5){ return}

  const computerSelection = computerChoice();
  const winner = checkWinner(playerChoice, computerSelection);
  winners.push(winner);

  tallyWins()
  displayRound(playerChoice, computerChoice, winner)

  wins = checkWins()
  if (wins == 5){
    displayEnd()
  }

}

function displayEnd(){
  let playerWins = winners.filter((item) => item == "Player").length

  if (playerWins == 5){
    document.querySelector(".winner").textContent = "You won 5 games! Congrats."
  }else {document.querySelector(".winner").textContent = "Comp won 5 times"}

  document.querySelector(".reset").style.display = "flex"
}

function displayRound(playerChoice, computerChoice, winner){
  document.querySelector(".playerChoice").textContent=`Player chose: ${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)}`
  document.querySelector(".computerChoice").textContent=`Computer chose: ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}`

  document.querySelector(".winner").textContent = `Round Winner: ${winner}`
}

function tallyWins(){

  let playerWins = winners.filter((item) => item == "Player").length;
  let computerWins = winners.filter((item) => item == "Computer").length;
  let ties = winners.filter((item) => item == "Tie").length;
  
  document.querySelector(".playerScore").textContent = `Score : ${playerWins}`
  document.querySelector(".computerScore").textContent = `Score : ${computerWins}`
  document.querySelector(".ties").textContent = `Score : ${ties}`

}

function checkWins(){ //Check if player/comp has a score > 5
  let playerWins = winners.filter((item) => item == "Player").length;
  let computerWins = winners.filter((item) => item == "Computer").length;
 
  return Math.max(playerWins, computerWins) //Return the max of the 2
}
 

function computerChoice() {
  //Update DOM with comp selectection
  return choices[Math.floor(Math.random() * choices.length)];
}

function validateInput(choice) {
  return choices.includes(choice);
}

function checkWinner(choiceP, choiceC) {
  if (choiceP === choiceC) {
    return "Tie";
  } else if (
    (choiceP === "rock" && choiceC == "scissors") ||
    (choiceP === "paper" && choiceC == "rock") ||
    (choiceP === "scissors" && choiceC == "paper")
  ) {
    return "Player";
  } else {
    return "Computer";
  }
}

function logWins() {
  let playerWins = winners.filter((item) => item == "Player").length;
  let computerWins = winners.filter((item) => item == "Computer").length;
  let ties = winners.filter((item) => item == "Tie").length;
}

game()