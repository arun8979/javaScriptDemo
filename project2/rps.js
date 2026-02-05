let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePhra = document.querySelector("#user-score");
const compScorePhara = document.querySelector("#comp-score");
const newGame = document.querySelector("#newGame");




const genCompChoice = () =>{
let option = ["rock","paper","scissors"];
let randmIdx = Math.floor(Math.random() * 3);
return option[randmIdx];
};


const drawGame = () =>{
    msg.innerText = "game was draw play again!"
    msg.style.backgroundColor = "gray";  
}

newGame.addEventListener("click", () => {
    userScore = 0;
    compScore = 0;
    userScorePhra.innerText = userScore;
    compScorePhara.innerText = compScore;

    msg.innerText = "Play your move¡";
    msg.style.backgroundColor = "#081b31";
});




const showWinner  = (userWin,userChoice,compChoice) =>{
if(userWin){
    userScore++
    userScorePhra.innerText = userScore;
    msg.innerText = `you win your ${userChoice} beat ${compChoice}`;
    msg.style.backgroundColor = "green";

}else{
    console.log("you lose the game");
        msg.innerText = `you lose ${compChoice} beat your ${userChoice}`;
    msg.style.backgroundColor = "red";
    compScore++
    compScorePhara.innerText = compScore;

}
}


const playGame = (userChoice) =>{
    const compChoice = genCompChoice();
    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};


choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);
    })

});