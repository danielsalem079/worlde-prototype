const words = ["APPLE", "BREAD", "CHAIR", "CLOUD", "DREAM", "FRUIT",
    "GRAPE", "HOUSE", "LEMON", "MONEY", "MOUSE", "PLANT",
    "RIVER", "STONE", "TABLE", "TRAIN", "WATER", "WORLD"];

const board = document.getElementById("board");
const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");
const startButton = document.getElementById("startButton");
const message = document.getElementById("message");
const timer = document.getElementById("timer");
const attemptsText = document.getElementById("attempts");

let answer = "";
let attempts = 0;
let seconds = 0;
let clock;
let gameOver = true;

function makeBoard() {
    board.innerHTML = "";

    for (let i = 0; i < 6; i++) {
        const row = document.createElement("div");
        row.className = "row";

        for (let j = 0; j < 5; j++) {
            const tile = document.createElement("div");
            tile.className = "tile";
            row.appendChild(tile);
        }

        board.appendChild(row);
    }
}

makeBoard();
function startGame() {
    answer = words[Math.floor(Math.random() * words.length)];
    attempts = 0;
    gameOver = false;

    attemptsText.textContent = attempts;
    message.textContent = "Enter your first guess.";
    startButton.textContent = "New Game";

    guessInput.value = "";
    guessInput.disabled = false;
    guessButton.disabled = false;

    makeBoard();
    guessInput.focus();
}

startButton.addEventListener("click", startGame);
function endGame() {
    gameOver = true;
    guessInput.disabled = true;
    guessButton.disabled = true;
}

function checkGuess() {
    if (gameOver) {
        return;
    }

    const guess = guessInput.value.trim().toUpperCase();

    if (!/^[A-Z]{5}$/.test(guess)) {
        message.textContent = "Please enter exactly 5 letters.";
        return;
    }

    const row = board.children[attempts];

    for (let i = 0; i < 5; i++) {
        row.children[i].textContent = guess[i];
    }

    attempts++;
    attemptsText.textContent = attempts;
    guessInput.value = "";

    if (guess === answer) {
        message.textContent = "Well done! You won in " + attempts + " guesses.";
        endGame();
    } else if (attempts === 6) {
        message.textContent = "Game over! The word was " + answer + ".";
        endGame();
    } else {
        message.textContent = "Try another word.";
        guessInput.focus();
    }
}
