
//let playerSelect = "";

function getComputerChoice(){
    let choices = [
        'Rock',
        'Paper',
        'Scissors'
    ];
    let computerChoice = Math.floor(Math.random()*choices.length);
    let randomChoice = choices[computerChoice];
    return randomChoice;
};

function playRound(playerSelection, computerSelection){
    
    
    let playerChoice = playerSelection;
    let computerChoice = computerSelection;

    if(computerChoice === 'Rock'){
        if(playerChoice === 'rock'){
            return "It's a tie";
        } else if(playerChoice === 'paper'){
            return "You win! Paper beats rock";
        }  else if(playerChoice === 'scissors'){
            return "You lose! Rock beats scissors";
        }else{
            return "Invalid Choice";
        }
    } else if (computerChoice === 'Paper'){
        if(playerChoice === 'rock'){
            return "You lose! paper  beats rock";
        } else if(playerChoice === 'paper'){
            return "It's a tie";
        }  else if(playerChoice === 'scissors'){
            return "You win! scissors beats paper";
        }else{
            return "Invalid Choice";
        }
    } else if (computerChoice === 'Scissors'){
        if(playerChoice === 'rock'){
            return "You win! rock beats scissors";
        } else if(playerChoice === 'paper'){
            return "You lose! scissors beats paper";
        }  else if(playerChoice === 'scissors'){
            return "You Tie!";
        } else{
            return "Invalid Choice";
        }
    }
    
}






function game(){
    let computerScore = 0;
    let userScore = 0;
    for(let i = 0; i < 5; i++){
        let userChoice = prompt("Enter between Rock, Paper or scissors");
        let computerChoice = getComputerChoice();
        playRound(userChoice, computerChoice);
        if(playRound(userChoice, computerChoice).charAt(4) === 'w'){
            userScore++;
        }else if(playRound(userChoice, computerChoice).charAt(4) === 'l'){
            computerScore++;
        } /*else{
            computerScore++;
            userScore++;
        }*/
        console.log("Your choice is "  + userChoice + ". Computer Choice is " + computerChoice);
        console.log(playRound(userChoice, computerChoice));
    }
    
    if(userScore > computerScore){
        return "Congratulations, You Win " + userScore + " To " + computerScore;
    } else {
        return "You Lose " + userScore + " To " + computerScore;
    }
}


console.log(game());
