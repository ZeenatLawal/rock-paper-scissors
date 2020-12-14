//Declarations
let playerScore = 0;
let computerScore = 0;
const btns = document.querySelectorAll('input');
const playAgain = document.getElementById('playAgain');

//Disable Buttons
function disable() {
    btns.forEach(btn => {
        btn.disabled = true
    });
}

//Computer Selection
function computerPlay(){
    let select = ["", "rock", "paper", "scissors"];
    return select[Math.floor(Math.random() * 3)+1];
}

//Game Round
function playRound(playerSelection){
    let computerSelection = computerPlay();
    let choice = "";
    let score = "";
    let result = "";

    if ((playerSelection == "rock" && computerSelection == "scissors") || 
        (playerSelection == "paper" && computerSelection == "rock") || 
        (playerSelection == "scissors" && computerSelection == "paper")){
            
            playerScore += 1;
            choice = `You win! ${playerSelection} beats ${computerSelection}`;
            score = `<br> Player score <br> ${playerScore} <br><br> Computer score <br> ${computerScore}`;
            
            if (playerScore == 5){
                result = "You won the game!!!";
                choice = "";
                disable();
                playAgain.style.visibility = 'visible';
            }

    }else if(playerSelection == computerSelection){
           
        choice = "It's a tie";
        score = `<br> Player score <br> ${playerScore} <br><br> Computer score <br> ${computerScore}`;
    
    }else{

        computerScore += 1;
        choice = `You lose! ${computerSelection} beats ${playerSelection}`;
        score = `<br> Player score <br> ${playerScore} <br><br> Computer score <br> ${computerScore}`;

        if (computerScore == 5){
            result = "You lost the game!!!";
            choice = "";
            disable();
            playAgain.style.visibility = 'visible';
        }
    }
    document.getElementById('choice').innerHTML = choice;
    document.getElementById('score').innerHTML = score;
    document.getElementById('result').innerHTML = result;
    return;
}

//Player Selection
btns.forEach(btn =>{
    btn.addEventListener('click', function(){
        playRound(btn.value.toLowerCase())
    });
})