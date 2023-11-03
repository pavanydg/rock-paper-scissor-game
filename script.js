let computerScore = 0;
let userScore = 0;

function getComputerChoice(){
let ran = Math.floor((Math.random()*3));
if(ran == 0){
    return "rock";
}
else if(ran == 1){
    return "paper";
}
else{
    return "scissor";
}
}

let computerChoice = getComputerChoice();
console.log(computerChoice)
let inputchoice = prompt("Choose rock, paper or scissors: ")
userChoice = inputchoice.toLowerCase()
console.log(userChoice)
function playRound(computerChoice,userChoice){
if(computerChoice == "rock" && userChoice == "scissor"){
    console.log("Rock beats scissor! Computer wins");
}
else if(computerChoice == "scissor" && userChoice == "rock"){
    console.log("Rock beats scissor! You win");
}

else if(computerChoice == "paper" && userChoice == "scissor"){
    console.log("Scissor beats paper! Computer wins");
}
else if(computerChoice == "scissor" && userChoice == "paper"){
    console.log("Scissor beats paper! You win");
}

else if(computerChoice == "paper" && userChoice == "rock"){
    console.log("Paper beats rock! Computer wins");
}
else if(computerChoice == "rock" && userChoice == "paper"){
    console.log("Paper beats rock! You win");
}
else{
    console.log("its a draw. No one wins")
}
}
playRound(computerChoice,userChoice);