// These are the words the game can pick from.
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

// Make 6 rows with 5 empty boxes in each row.
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

function startGame() {
    answer = words[Math.floor(Math.random() * words.length)];
    attempts = 0;
    seconds = 0;
    gameOver = false;

    clearInterval(clock);
    timer.textContent = seconds;
    attemptsText.textContent = attempts;
    message.textContent = "Enter your first guess.";
    startButton.textContent = "New Game";
    guessInput.value = "";
    guessInput.disabled = false;
    guessButton.disabled = false;
    makeBoard();
    guessInput.focus();

    clock = setInterval(function () {
        seconds++;
        timer.textContent = seconds;
    }, 1000);
}

function endGame() {
    gameOver = true;
    clearInterval(clock);
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
    const remainingLetters = answer.split("");
    const colours = ["absent", "absent", "absent", "absent", "absent"];

    // Check letters in the correct place first.
    for (let i = 0; i < 5; i++) {
        if (guess[i] === answer[i]) {
            colours[i] = "correct";
            remainingLetters[i] = "";
        }
    }

    // Then check letters that are in the wrong place.
    for (let i = 0; i < 5; i++) {
        if (colours[i] !== "correct") {
            const position = remainingLetters.indexOf(guess[i]);
            if (position !== -1) {
                colours[i] = "present";
                remainingLetters[position] = "";
            }
        }
    }

    for (let i = 0; i < 5; i++) {
        row.children[i].textContent = guess[i];
        row.children[i].classList.add(colours[i]);
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

startButton.addEventListener("click", startGame);
guessButton.addEventListener("click", checkGuess);

guessInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        checkGuess();
    }
});

makeBoard();
