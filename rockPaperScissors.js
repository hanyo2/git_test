function game() {

    let playerScore = 0
    let cpuScore = 0 

    for (let i=0;i<5;i++)
    {
        let cpuChoice = getCPUChoice()
        let playerChoice = prompt("Please enter your choice")
        playerChoice = playerChoice.toLowerCase()

        let roundOutcome 

        playerChoice = stringToNum(playerChoice)

        roundOutcome = decideWinner(playerChoice, cpuChoice)

        cpuChoice = numToString(cpuChoice)


        if (roundOutcome == 1){
            playerScore = playerScore+1
            alert(`CPU chose ${cpuChoice}, round won\nYour Score: ${playerScore}\nCPU Score: ${cpuScore}`)
        }
        else if (roundOutcome == 0){
            cpuScore = cpuScore +1
            alert(`CPU chose ${cpuChoice}, round lost\nYour Score: ${playerScore}\nCPU Score: ${cpuScore}`)
        }
        else if (roundOutcome == -1){
            alert(`CPU chose ${cpuChoice}, round draw\nYour Score: ${playerScore}\nCPU Score: ${cpuScore}`)
        }
    }

    if (playerScore > cpuScore){
        alert(`Game done, you wins\nYour Score: ${playerScore}\nCPU Score: ${cpuScore}`)
    }
    else if (cpuScore > playerScore){
        alert(`Game done, you lose\nYour Score: ${playerScore}\nCPU Score: ${cpuScore}`)
    }
    else{
        alert(`Game done, draw\nYour Score: ${playerScore}\nCPU Score: ${cpuScore}`) 
    }

}

function getCPUChoice(){
    min = Math.ceil(1);
    max = Math.floor(3);
    return Math.floor(Math.random() * (3 - 1 + 1)) + 1;
}


function decideWinner(playerChoice, cpuChoice){

    if(cpuChoice == 1 && playerChoice == 3 || cpuChoice == 2 && playerChoice == 1 || cpuChoice == 3 && playerChoice == 2){
        return 0
        
    }
    else if (playerChoice == 1 && cpuChoice == 3 || playerChoice == 2 && cpuChoice == 1 || playerChoice == 3 && cpuChoice == 2){
        return 1
    }
    else if (playerChoice == cpuChoice){
        return -1
    }
}

function stringToNum(string){
    if(string == 'rock'){
        return 1 
    }
    else if(string == 'paper'){
        return 2
    }
    else if(string == 'scissors'){
        return 3
    }
}

function numToString(num){
    if (num == 1){
        return 'rock'
    }
    else if (num == 2){
        return 'paper'
    }
    else if (num == 3){
        return 'scissors'
    }
}
