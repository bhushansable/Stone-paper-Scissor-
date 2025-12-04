const choices = document.querySelectorAll("#choice .element");

let userScore = 0;
let comScore = 0;

// Correct element selections
const userScoreBox = document.querySelector("#u-");
const comScoreBox = document.querySelector("#c-");
const Meg = document.querySelector("#meg");

// Random choice
const gameChoices = () => {
    const arr = ["stone", "paper", "scissors"];
    const ran = Math.floor(Math.random() * 3);
    return arr[ran];
};


// Show result
const showWinner = (userWin, userChoice, comChoice) => {
    if (userWin) {
        userScore++;
        userScoreBox.innerText = userScore;
        Meg.innerText = `Your ${userChoice} beats ${comChoice}`;
        Meg.style.backgroundColor = "green";
    } else {
        comScore++;
        comScoreBox.innerText = comScore;
        Meg.innerText = `Com ${comChoice} beats your ${userChoice}`;
        Meg.style.backgroundColor = "red";
    }
};


// Game logic
const palyGame = (userChoice) => {
    const comChoice = gameChoices();

    if (userChoice === comChoice) {
        Meg.innerText = "Draw!";
        Meg.style.backgroundColor = "yellow";
    } else {
        let userWin = true;

        if (userChoice === "stone") {
            userWin = comChoice === "paper" ? false : true;
        } 
        else if (userChoice === "paper") {
            userWin = comChoice === "scissors" ? false : true;
        }
        else {
            userWin = comChoice === "stone" ? false : true;
        }

        showWinner(userWin, userChoice, comChoice);
    }
};


// Click events
choices.forEach(choice => {
    choice.addEventListener("click", () => {
        const userChoice = choice.id.toLowerCase();  // REQUIRED FIX
        palyGame(userChoice);
    });
});
