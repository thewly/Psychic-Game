// set my starter values
var randoNum = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var loses = 0;
var guesses = 9;
var yoGuesses = [];


document.onkeyup = function (event) {
    var youPressed = event.key;
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

    if (letters.indexOf(youPressed) > -1) {
        if (youPressed === computerGuess) {
            wins++;
            // clear your guess counter & reset guesses
            guesses = 9;
            yoGuesses = [];
        }
        if (youPressed !== computerGuess) {
            guesses--;
            yoGuesses.unshift(yoGuesses);
        }
        if (guesses < -1) {
            loses++;
            yoGuesses = [];
        }
    }
}

// generate a random letter
// prompt user to have them guess the letter
// check to see if it is correct
// check to see if letter is correct
// if letter is wrong, allow user to try again. Repeat until they win, or are out of attempts
// start over once someone wins or loses