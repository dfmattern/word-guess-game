//wait to execute until page is loaded
//$(document).ready(function() {




//create show to guess array
var showsToGuess = ["dynasty", "growing pains", "the a team", "alf", "knight rider", "cheers", "the cosby show", "miami vice", "mash", "family ties", "night court", "macgyver", "moonlighting", "full house"]

//global variables
var randomShow = "";
var letterBlanks = 0;
var guessedLetters = []
var numGuesses
var show

//counters
var wins = 0;
var remainingGuesses = 10;

//constant
const maxGuess = 10



function generate() {
    //pick random show
    var randomShow = showsToGuess[Math.floor(Math.random() * showsToGuess.length)];

    guessedLetters = randomShow;

    answerBlanks = guessedLetters.length;



    //create answer array
    for (var i = 0; i < showsToGuess.length; i++); {
        answerBlanks[i] = "_";
    }

    document.getElementById("currentWord").innerHTML = " " + answerBlanks.join("_");
}

//check if letter matches letter in randomShow
function letterMatch(letter) {
    var letterInRandomShow = false;
    for (var i = 0; i < answerBlanks; i++) {
        if (randomShow[i] == letter) {
            letterInRandomShow = true;
        }
    }

    if (letterInRandomShow) {
        for (var i = 0; i < answerBlanks; i++) {
            if (randomShow[i] == letter) {
                answerBlanks[i] = letter;
            }
        }
    } else {
        remainingGuesses--;
    }
    console.log(answerBlanks);
}