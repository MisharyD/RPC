document.addEventListener("DOMContentLoaded",() =>
{
    document.querySelector(".play").addEventListener("click",start)
})

function start()
{
    let container = document.querySelector(".container");
    container.innerHTML = `
    <div> Choose: </div>
    <div class = "button-container">
        <div> 
            <img class = "button rock" src = "rock.png" alt = "rock">
            <div> Rock </div> 
        </div>
        <div>
            <img class = "button paper" src = "paper.png" alt = "paper">
            <div> Paper </div> 
        </div>
        <div>
            <img class = "button scissors" src = "scissors.png" alt = "scissors">
            <div> Scissors </div> 
        </div>
    </div>
    `

    Array.from(document.querySelectorAll(".button")).forEach(function(button){
    button.addEventListener("click",showResult);
    })
}

//show player and computer choice and show who won. also generate a button to play again
function showResult(e)
{
    let plrChoice = e.target.getAttribute("src")
    plrChoice = plrChoice.substring(0,plrChoice.indexOf("."));
    
    let cmpChoice = getComputerChoice();
    let result = playRound(plrChoice,cmpChoice);

    let resultSentence;
    if(result == 1)
        resultSentence = `You Won! ${plrChoice} beats ${cmpChoice}.`
    else if (result == 2)
        resultSentence = `You Lost! ${cmpChoice} beats ${plrChoice}.`
    else
        resultSentence = "Draw!"

    let container = document.querySelector(".container");
    container.innerHTML = `
    <div class = "choices-container">
        <div class = "player-choice">
            <div>Your choice:</div>
            <img class = "${plrChoice}" src = "${plrChoice}.png" alt = "${plrChoice}">
        </div>

        <div class = "cmp-choice">
            <div> Computer choice: </div>
            <img class = "${cmpChoice}" src = "${cmpChoice}.png" alt = "${cmpChoice}">
        </div>
    </div>
    <div class = "result">
        <div>${resultSentence}</div>
    </div>
    <button class = "play"> Play agian </button>
    `
    document.querySelector(".play").addEventListener("click",start);
}





function getComputerChoice()
{
    let rng = Math.floor(1 + Math.random() * 3);
    switch(rng)
    {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}

//returns 1 if player wins, 2 if computer wins and 0 if draw.
function playRound(plrChoice, cmpChoice)
{
    //player wins
    if(plrChoice == "rock" && cmpChoice == "scissors" ||
    plrChoice == "scissors" && cmpChoice == "paper" ||
    plrChoice == "paper" && cmpChoice == "rock")
        return 1;
    //draw
    else if (plrChoice == cmpChoice)
        return 0;
    //computer wins
    else
        return 2;
}

function playGame()
{
    console.log("You are going to play 5 rounds of rock paper and scissors");

    //keep track of scores
    let plrScore = 0;
    let cmpScore = 0;

    //play 5 rounds
    for(let i = 0; i<5; i++)
    {
        let plrChoice = window.prompt("Choose rock,paper or scissors: ").toLowerCase().trim();
        let cmpChoice = getComputerChoice();
        let result = playRound(plrChoice,cmpChoice);

        if(result == 1)
        {
            console.log("You win this round! " + plrChoice + " beats " + cmpChoice);
            plrScore++;
        }
        else if (result == 2)
        {
            console.log("You lost this round! " + cmpChoice + " beats " + plrChoice);
            cmpScore++;
        }        
        else
            console.log("Draw!");
    }

    if(plrScore >  cmpScore)
        console.log("Congrats! You won the game.");
    else if (cmpScore > plrScore)
        console.log("You lost the game!");
    else
        console.log("The game is tied!");
}

