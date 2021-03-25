// global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence


//Global Variables
var pattern = [2, 2, 4, 5, 3, 4];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var guessCounter = 0; // counts number of guesses - up to 3 strikes
var numOfMistakes = 0;
var clueHoldTime = 1000;


function startGame(){
    //initialize game variables
    progress = 0;
    gamePlaying = true;
    numOfMistakes = 0;
  
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  
  playClueSequence()
}

function stopGame(){
    //initialize game variables
    gamePlaying = false;
  
  // swap the Stop and Start buttons
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}

function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

// If the game is playing, light up the specific button, play its tone
function playSingleClue(btn){
  if(gamePlaying){  
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

// play the specific sequence that is next, use for loop to iterate through the progress array
function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    clueHoldTime = clueHoldTime - 30;
    delay += clueHoldTime; 
    delay += cluePauseTime;
  }
}


// function stops game and creates an alert
function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

// function starts game and creates an alert
function winGame(){
  stopGame();
  alert("Game Over. You won!");
}


// 1. function first checks if game is playing
// 2. checks if the game is won
// 3. updates progress and plays the next clue
// 4. updates the number of guesses
// 5. creates a threshold for number of mistakes
// 6. increments number of mistakes variable until it reaches 3 and continues to play sequence
// 7. If mistakes threshold is reached, then the alert is displayed

function guess(btn){
  console.log("user guessed: " + btn);

  if(!gamePlaying){
    return;
  }

  if(pattern[guessCounter] == btn){ // checks if the correct button is pressed
    if(guessCounter == progress){
      if(progress == pattern.length - 1){
        winGame(); // the game is won
      }else{
        progress = progress + 1; // update progress by one and play the next clue sequence
        playClueSequence();
      }
    }else{
      guessCounter = guessCounter + 1; // update the guess counter
    }
  }else{
    numOfMistakes++;
    if (numOfMistakes == 3) { // first increment the number of mistakes until they reach 3, then lose game
      loseGame();
    }   
    progress = progress + 1; // if numofMistakes is not 3, continue playing game
        playClueSequence();
  }
}    


// Sound Synthesis Functions
const freqMap = {
  1: 100,
  2: 200,
  3: 300,
  4: 400,
  5: 500
}


// plays the tone
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}

// starts the tone
function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}

// stops the tone
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)


