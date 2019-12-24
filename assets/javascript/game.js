//wait to execute until page is loaded
document.addEventListener("DOMContentLoaded", function() {
  //console.log("Game Start")
});

//create show to guess array
let shows = [
  "dynasty",
  "growing pains",
  "the a team",
  "alf",
  "knight rider",
  "cheers",
  "the cosby show",
  "miami vice",
  "mash",
  "family ties",
  "night court",
  "macgyver",
  "moonlighting",
  "full house"
];
//console.log(shows);

//global variables
let showToGuess = "";
let lettersOfShow = [];
let letterBlanks = "";

let wins = 0;
let remainingGuesses = 10;
let guessedLetters = [];
let correctLettersGuessed = [];
displayShowToGuess();
resetGame();

//start game

document.onkeyup = function(event) {
  let guesses = String.fromCharCode(event.keyCode).toLowerCase();
  //console.log(guesses);

  //pick random show

  let randomShow = shows[Math.floor(Math.random() * shows.length)];
  showToGuess = shows[randomShow];
  console.log(showToGuess);
  displayShowToGuess();

  //generate number of blanks for player to guess

  function displayShowToGuess() {
    let displayBlanks = "";
    for (let i = 0; i < showToGuess.length; i++) {
      let currentLetter = showToGuess[i];
      if (guessedLetters.includes(guesses)) {
        displayShowToGuess += guesses;
      } else {
        displayBlanks += " ";
      }
      console.log(displayShowToGuess);
    }
  }

  lettersOfShow = displayBlanks.split("");
  console.log(lettersOfShow);

  letterBlanks = lettersOfShow.join(" ");
  console.log(letterBlanks);

  document.getElementById("currentWord").innerText = displayBlanks;
  return displayShowToGuess;
};

//add letter to guessed letters

guessedLetters.push(guesses);
console.log(guessedLetters);

//update display with letters guessed

let guessesSoFar = displayShowToGuess();
document.getElementById("alreadyGuessed").innerText = guessesSoFar;

//player win

if (!displayShowToGuess.includes("_")) {
  winGame();
} else {
  ///decrement remainingGuesses

  if (!showToGuess.includes(guesses)) {
    remainingGuesses--;
  }
  document.getElementById("guessesleft").innertext = remainingGuesses;
  if (remainingGuesses <= 0) {
    loseGame();
  }
}

function winGame() {
  alert("You Won!");
}

function loseGame() {
  alert("You Lost!");
}

function resetGame() {
  showToGuess = shows[randomShow];
  remainingGuesses = 10;
  guessedLetters = [];
}
