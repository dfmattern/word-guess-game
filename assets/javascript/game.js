//wait to execute until page is loaded
document.addEventListener("DOMContentLoaded"),
    function() {

    };





//create show to guess array
var shows = ["dynasty", "growing pains", "the a team", "alf", "knight rider", "cheers", "the cosby show", "miami vice", "mash", "family ties", "night court", "macgyver", "moonlighting", "full house"]





//global variables
var randomShow = "";
var guessedLetters = [];
var wordToGuess = []
var letterBlanks = 0;
var numGuesses


//constant
const maxGuess = 10

//counters
var wins = 0;
var remainingGuesses = 10;

//initiate play
document.onkeyup = function(event) {
    if (isAlpha(event.key) && !pauseGame) {
        checkForLetter(event.key.toUpperCase())
    }
}

//pick random show
var show = shows[Math.floor(Math.random() * shows.length)];
console.log(show);

//answer
var answerArray = [];
for (var i = 0; i < show.length; i++); {
    answerArray[i] = "_";
}
console.log(answerArray);


//HTML wires
function updateStats() {
    document.getElementById("wins").innerText =
        document.getElementById("currentWord").innerText = wordToGuess.join("")
    document.getElementById("remainingGuesses").innerText = numGuesses
    document.getElementById("already-guessed").innerText = guessedLetters.join("")
}
})