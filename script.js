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

