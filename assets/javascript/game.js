//wait to execute until page is loaded
document.addEventListener("DOMContentLoaded", function() {
  //console.log("Game Start")


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
//let showToGuess = "";
let lettersOfShow = [];
let letterBlanks = "";
let guesses = "";
let displayBlanks = "";

let wins = 0;
let remainingGuesses = 10;
let guessedLetters = [];
let correctLettersGuessed = [];
//displayShowToGuess();
//resetGame();

//start game

document.onkeyup = function (event) {
  let guesses = String.fromCharCode(event.keyCode);
 console.log(guesses);
}

//pick random show

let randomShow = shows[Math.floor(Math.random() * shows.length)];
//console.log(randomShow);
//let showToGuess = shows[randomShow];
//console.log(showToGuess);

//generate number of blank letters for player to guess

