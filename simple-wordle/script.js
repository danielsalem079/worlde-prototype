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
