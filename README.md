# Pre-work - _Memory Game_

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: Shivani Ahuja

Time spent: 5 hours spent in total

Link to project: (insert your link here, should start with https://glitch.com/edit/#!/shivani-memory-light-sound-game?path=README.md+copy%3A42%3A2)

## Required Functionality

The following **required** functionality is complete:

- [Y] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
- [Y] "Start" button toggles between "Start" and "Stop" when clicked.
- [Y] Game buttons each light up and play a sound when clicked.
- [Y] Computer plays back sequence of clues including sound and visual cue for each button
- [Y] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
- [Y] User wins the game after guessing a complete pattern
- [Y] User loses the game after an incorrect guess

The following **optional** features are implemented:

- [Y] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
- [Y] Buttons use a pitch (frequency) other than the ones in the tutorial
- [Y] More than 4 functional game buttons
- [Y] Playback speeds up on each turn
- [ ] Computer picks a different pattern each time the game is played
- [Y] Player only loses after 3 mistakes (instead of on the first mistake)
- [ ] Game button appearance change goes beyond color (e.g. add an image)
- [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
- [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![![](https://i.imgur.com/3OsjFni.gif)

## Reflection Questions

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.
   [I used the following links to help me complete my submission:

- https://www.w3schools.com/howto/howto_css_rounded_images.asp
- https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/#:~:text=var%20declarations%20are%20globally%20scoped%20or%20function%20scoped%20while%20let,be%20updated%20nor%20re%2Ddeclared
- https://www.w3schools.com/js/js_syntax.asp

- https://www.w3schools.com/graphics/game_score.asp (I talk about this website in question #4)]

I used these websites to help me with syntax, create the rounded images, and find out the difference between var, let, and constant. Personally, I belive that the most important skill a Computer Scientist can have is the ability to Google and troubleshoot to fix specific problems!

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)

I encountered a very small bug that prevented me from completing the project in a more timely manner. Specifically, "numOfMistakes", one of the variables I had created was a "constant" instead of a "var". As a result, I was unable to play the game. However, I reverted back to my original code and carefully combed through the variables and additional "if statements" I contributed. After reviewing all of my code, I looked up the difference between a "var" and a "constant" and realized that I could not mutate the constant, which explained the reason why I was unable to play the game. After fixing the bug, I was able to play the game once again!

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)

- How do HTML and CSS work together to create a web page? Specifically, we wrote no code that connected the HTML file and the CSS file together, and yet the two files combined create a webpage.
- How to reduce complexity and redundancy during the coding process?
- How do I display a current score that updates on a website? (Using JavaScript - relates to question #4)

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)

If I had a few more hours to work on this project, I would spend them making this website more aesthetically pleasing and cleaning up code. Specifically, I would add a feature that would inform the user of the number of mistakes that have already occured (user clicks on the wrong button). This would encourage the user to play a bit more carefully and thoroughly. After googling the following: "how to display a current score in javascript", I found a really helpful article
that would aid me in the process of displaying the number of mistakes made.

In addition, I think some of the code written is a bit redundant. I would definitely refactor and clean up the code, so it is clear and concise. It is important for my code to be very readable, so I would spend a but of time creating different classes for these buttons and their common attributes, so that little to no code is repeated.

## License

    Copyright Shivani Ahuja

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
