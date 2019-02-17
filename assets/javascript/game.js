// set my starter values
var randoNum = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var loses = 0;
var guesses = 9;
var yoGuesses = [];


document.onkeyup = function(event) {
    var youPressed = event.key;
    var computerGuess = randoNum[Math.floor(Math.random() * randoNum.length)];

console.log('You pressed:' + youPressed);
console.log('The computer guessed:' + computerGuess);

        if (youPressed === computerGuess) {
            wins++;
            guesses = 9;
            yoGuesses = [];
            // This shit below isn't connecting to my HTML & I can't figure out why, but that's what I think my next step is.
            // document.getElementById("Wins:").innerHTML = "Wins: " + wins;
        }
        else if (youPressed !== computerGuess) {
            guesses--;
            yoGuesses.push(yoGuesses);
            if (guesses < 1) {
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