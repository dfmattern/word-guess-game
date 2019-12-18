//create show to guess array
var shows = ["knight rider", "cheers", "the cosby show", "miami vice", "mash", "family ties", "night court", "macgyver", "moonlighting", "full house"]


//pick random show
var show = shows[Math.floor(Math.random() * shows.length)];
console.log(show);

//answer
var answerArray = [];
for (var i = 0; i < show.length; i++); {
    answerArray[i] = "_";
}
console.log(answerArray);


//global variables
var randomShow = "";
var lettersToGuess = []
var letterBlanks = 0;





//counters
var wins = 0;
var losses = 0;
var = remainingGuesses = 10;




//pick random word

//show player theri progress
//get players guess


//if the player wants to quit
//quit game

//else if guess is not single letter 
//tell player to pick single letter

//else if guess is in the word
//update palyer progress