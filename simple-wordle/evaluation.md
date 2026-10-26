# Wordle Game - Evaluation and Review

1. Critical Evaluation of the Project

The main aim of my project was to create a web-based Wordle game using HTML, CSS and JavaScript. The game needed to allow players to guess a hidden five-letter word within six attempts while receiving feedback on whether their letters were correct. I also needed to implement at least one additional feature beyond the basic requirements. Overall, I think the project has been successful in meeting its main objectives. The game includes a guessing system, a six-attempt limit, coloured letter feedback, win and lose messages, and a restart button. I also included a timer as my additional feature, which allows players to see how long they take to complete the game.

Strengths
One of the main strengths of my game is that it is simple and easy to understand. The instructions explain how to play, and the green, yellow and grey colours help players identify which letters are correct. This makes the game suitable for people who have not played Wordle before.

Another strength is the input validation. The JavaScript checks that players enter exactly five letters before accepting their guess. This prevents incorrect inputs from affecting the number of attempts and helps the game work more reliably. The timer is another useful feature because it adds an extra challenge. Players can try to complete the game faster, making it more interesting than simply guessing the correct word.
I also think using separate HTML, CSS and JavaScript files was a good decision because it made the project easier to organise. For example, I could change the appearance of the game without changing the JavaScript functions.

Limitations
Although the game meets its main requirements, there are still some limitations. One limitation is that players can enter any combination of five letters, even if it is not a real English word. This makes the game less challenging compared to the original Wordle because players can enter random letters. In the future, I would improve this by adding a dictionary or list of valid words. Another limitation is the small selection of possible hidden words. As the player continues restarting the game, they may eventually recognise words that have appeared previously. A larger word list would improve replayability.
The game also does not save previous results or the player's fastest completion time. This means the timer is useful during gameplay but does not allow players to compare their results across different sessions.

2. Reflection on the Development Process
During the development of my Wordle game, I had to make decisions about the design, functionality and organisation of the project. I decided to use three separate files: index.html, style.css and script.js. This made it easier to understand what each part of the project was responsible for. HTML created the structure of the game, CSS controlled its appearance, and JavaScript handled the game logic and interactions. I also used GitHub to manage the project files and record changes through commits. This was useful because it provided a history of the development work and allowed me to keep track of changes to the code.
What I Learned This experience helped me understand the importance of organising files correctly and checking that HTML can access external CSS and JavaScript files. It also showed me why testing is important. Even when the code appears correct, problems can still occur because of how the project files are stored or opened.

Another lesson was the importance of understanding the JavaScript functions rather than only checking whether the game appears to work. For example, the guessing system must correctly update the number of attempts, apply letter colours and determine when the game should end.

What I Would Do Differently
If I completed a similar project again, I would test each part of the application more carefully as it was being developed.
I would also create a clearer development plan at the beginning, identifying which features needed to be completed first.

I think this would make the project easier to manage and reduce the time spent finding problems later.

3. Development Approach
For my Wordle project, I used a prototyping-based approach. This approach involves creating an initial version of the application and improving it based on testing and feedback.

Prototyping was suitable because Wordle has a relatively simple concept, allowing the basic interface and functionality to be developed before improving the design and adding more features.
For example, the basic structure of the game could be created using HTML, followed by the CSS styling and JavaScript functionality. The timer could then be added as an additional feature.

Advantages of Prototyping
One advantage is that it allows problems to be identified earlier because the application can be viewed and tested before all features are completed.
Another advantage is flexibility. If part of the design is unsuitable or confusing, it can be changed without having to redesign the entire application.

Prototyping also makes it easier to focus on essential features first, which is useful for a project with a limited development period.
Disadvantages of Prototyping

A disadvantage is that repeatedly changing the design or code can become time-consuming. It can also create problems if new features are added without considering how they affect existing functionality.
Another disadvantage is that developers may concentrate too much on making the interface look good while overlooking other important requirements, such as input validation or testing.

Comparison with Other Development Approaches
An alternative approach would be the Waterfall model, which follows more clearly defined stages such as requirements, design, implementation and testing.

Waterfall can be useful when requirements are fixed and unlikely to change. However, it would be less suitable for my Wordle project because I needed the flexibility to make improvements while developing and testing the game.
Iterative development is another similar approach. It involves improving a system through repeated development cycles. The main difference is that prototyping particularly focuses on creating an early working version to explore requirements and user interaction.
I think prototyping was the most appropriate approach for this project because it allowed the game to be developed in manageable stages. However, a more structured testing plan would have helped make the process more organised.

4. Technology Review and Comparison

I used HTML5, CSS and JavaScript to develop my Wordle game.
HTML5
HTML was used to create the structure of the webpage, including the game title, instructions, input field, buttons and areas displaying the results.
An advantage of HTML is that it is supported by modern web browsers and is relatively easy to understand.
However, HTML cannot provide the game logic on its own, which is why JavaScript was required.

CSS
CSS was used to control the visual appearance of the game, including the colours, spacing, buttons and letter tiles.
One advantage of CSS is that it separates the design from the HTML structure, making changes to the appearance easier.
A limitation is that responsive layouts can require additional styling to work well on different screen sizes.
JavaScript
JavaScript was used to implement the main game functionality, including selecting random words, checking guesses, updating letter colours, controlling attempts and running the timer.
JavaScript was particularly suitable because it can update webpage elements without requiring the page to reload.
However, JavaScript can become harder to manage as an application becomes larger, especially when multiple functions depend on shared variables.

Professional Development – JavaScript Learning
Instead of using freeCodeCamp, I used the YouTube tutorial JavaScript Full Course for Free (2024) by Bro Code to help improve my understanding of JavaScript.
The sections on variables and arrays helped me understand how to store the list of possible words and keep track of the player's attempts. The section on functions helped me understand how startGame() and checkGuess() work.
I also found the lessons on if statements, loops and DOM manipulation useful. These helped me understand how my Wordle game checks guesses, changes the letter colours and updates messages on the webpage.
Overall, the tutorial helped me understand how JavaScript interacts with HTML to make a website interactive. I found the practical examples easier to follow than just reading about the code.
Learning resource:

Bro Code (2024) JavaScript Full Course for Free (2024). YouTube. Available at: https://www.youtube.com/watch?v=lfmg-EJ8gm4 (Accessed: 26 October 2026).
