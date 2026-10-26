# Wordle Game

## Project overview

This is a small Wordle-style game made with HTML, CSS and JavaScript. The player has six chances to guess a five-letter word. Green means a letter is in the right place, yellow means it is in the word but in the wrong place, and grey means it is not in the word.

**Extra feature:** A timer counts how many seconds the player takes. It stops when the player wins or loses.

## Target audience and user profile

The game is for people who like short, simple word games and want to play on a computer or phone.

Example user profile: Alex is a university student who wants a quick game to play during a break. Alex wants instructions that are easy to understand and clear feedback after every guess.

## Requirements

| ID | Requirement | Type |
|---|---|---|
| F1 | The player can start a new game | Functional |
| F2 | The player can enter a five-letter guess | Functional |
| F3 | The game shows green, yellow and grey feedback | Functional |
| F4 | The player gets six attempts | Functional |
| F5 | The game shows a win or lose message | Functional |
| F6 | A timer tracks time and stops at the end | Functional (extra) |
| N1 | The page should be easy to understand | Non-functional |
| N2 | The player should be able to use the Enter key | Non-functional |
| N3 | The layout should work on a small screen | Non-functional |

## Design

I kept the layout simple so the main part of the page is the guessing grid.

Initial layout sketch:

```text
          WORDLE GAME
         Time: 0 seconds
          Guesses: 0/6

         [ ][ ][ ][ ][ ]
         [ ][ ][ ][ ][ ]
         [ ][ ][ ][ ][ ]
         [ ][ ][ ][ ][ ]
         [ ][ ][ ][ ][ ]
         [ ][ ][ ][ ][ ]

      Your guess: [_____] [Guess]
            [Start Game]

         Colour instructions
```

Game flow:

```mermaid
flowchart TD
    A[Open the game] --> B[Click Start Game]
    B --> C[Enter a 5-letter guess]
    C --> D{Is the input valid?}
    D -- No --> C
    D -- Yes --> E[Show colour feedback]
    E --> F{Is the word correct?}
    F -- Yes --> G[Win]
    F -- No --> H{Have 6 guesses been used?}
    H -- Yes --> I[Lose]
    H -- No --> C
    G --> J[New Game button]
    I --> J
    J --> B
```


## Pseudocode

```text
WHEN Start Game is clicked
    Pick a random word
    Set guesses to 0
    Start the timer
    Clear the grid

WHEN the player submits a guess
    IF it is not exactly 5 letters
        Show an error message
    ELSE
        Check letters in the correct position
        Check remaining letters in the wrong position
        Show the colours in the grid
        Add 1 to guesses
        IF guess is correct
            Show win message and stop timer
        ELSE IF guesses = 6
            Show lose message and stop timer
        END IF
    END IF
```

## How the Worlde game  was built and what i included

- `index.html` contains the headings, buttons, input box and game area.
- `style.css` makes the word grid and adds the colours.
- `script.js` chooses a word, checks guesses, updates the screen and runs the timer.

The game uses simple functions and JavaScript DOM methods such as `getElementById`, `createElement`, `textContent` and `addEventListener`.

I used an iterative/prototyping approach: make a small working version, test it, then improve one feature at a time. **Add your own dates, commit examples and screenshots of these stages before submission.**

## Testing plan and evidence

After you run each test yourself, fill in the **Actual result** and **Status** columns. Do not submit planned tests as if they have already passed.

| Test | Expected result | Actual result | Status |
|---|---|---|---|
| Start game | Empty grid appears, input is enabled | To complete | Not tested |
| Enter fewer than 5 letters | Error message; attempt not used | To complete | Not tested |
| Enter numbers | Error message; attempt not used | To complete | Not tested |
| Guess correct word | Green letters, win message, timer stops | To complete | Not tested |
| Use all 6 attempts | Lose message with correct word | To complete | Not tested |
| Click New Game | Grid, guesses and timer reset | To complete | Not tested |
| Press Enter | Submits a guess | To complete | Not tested |

## Technical challenge

Repeated letters are an important part of the game logic. For example, if a guess has two of the same letter but the answer only has one, both should not automatically become yellow. The code first checks green matches, and then checks whether each other letter is still available.

**Add an actual problem you encountered while making or testing the game:** what went wrong, possible fixes, what you changed, and what happened after testing.

## Limitations and possible improvements

- The game uses a short built-in list of possible answers.
- It accepts any five letters as a guess, even if they do not form a real word.
- It does not save scores between visits.

A future version could use a bigger word list and a keyboard on screen.

## Run the game

Open `index.html` in a browser. All three code files need to stay in the same folder.

For GitHub Pages, go to **Settings > Pages**, choose **Deploy from a branch**, select `main` and `/ (root)`, and save. The published link will appear on that page.

**Live link:** Add this after publishing.

## Learning and sources

**Before submission:** Add the JavaScript lessons you actually completed (for example, on freeCodeCamp), what you learned and how it helped. Add genuine screenshots or certificates if available. Add Harvard-style references for any sources you used, including any external help.
