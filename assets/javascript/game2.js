$(document).ready(function() {
  //console.log("Ready!");

  //create shows to guess array
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
   console.log(shows);

  //global variables
 let wordToGuess ="";
 let lettersToGuess=[];
 let letterBlanks = 0;
 let wordDisplay = [];
 let wrongGuesses = [];


  let wins = 0;
  let losses = 0;
  let remainingGuesses = 10;
  let guessedLetters = [];

  function gameStart(){
      wordToGuess = shows[Math.floor(Math.random() * shows.length)];
      //console.log(wordToGuess);
      lettersToGuess = wordToGuess.split("");
      //console.log(lettersToGuess);
      letterBlanks = lettersToGuess.length;

      remainingGuesses = 10;
      wrongGuesses= [];
      wordDisplay = [];

      for (i = 0; i < letterBlanks; i++){
          wordDisplay.push("_");
          //console.log(wordDisplay);
          
      }
      document.getElementById("currentWord").innerHTML = wordDisplay.join(" ");
      document.getElementById("remainingGuesses").innerHTML = remainingGuesses;
      document.getElementById("wins").innerHTML = wins;
      document.getElementById("losses").innerHTML = losses;
      

      
  }
  
function getUserInput (letter){
    if (event.keyCode >= 65 && event.keyCode <= 90){
        let correctGuess= false;
        for (let i = 0; i < letterBlanks; i++){
            if(wordToGuess[i] == letter){
                correctGuess= true;
            }
        }
        if(correctGuess){
            for (let i = 0; i < letterBlanks; i++){
                if (wordToGuess[i] == letter) {
                    wordDisplay[i] = letter;
                }
            }
        }
        else{
            wrongGuesses.push(letter);
            remainingGuesses --;
        }

    } else{
        //alert user
    }
}
  
});
