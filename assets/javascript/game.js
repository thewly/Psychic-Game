// set my starter values
var randoNum = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var loses = 0;
var guesses = 9;
var yoGuesses = [];


document.onkeyup = function (event) {
    var youPressed = event.key;
    var computerGuess = randoNum[Math.floor(Math.random() * randoNum.length)];

    console.log('You pressed:' + youPressed);
    console.log('The computer guessed:' + computerGuess);

    if (youPressed === computerGuess) {
        wins++;
        guesses = 9;
        yoGuesses = [];
        document.getElementById("wins").innerHTML = "Wins: " + wins;
    }
    else if (youPressed !== computerGuess) {
        // Reduce guess count
        guesses--;
        yoGuesses.push(" " + youPressed); // abc, d
        // Determine the value of guess
        // If 0, then do stuff
        if (guesses === 0) {
            // Reset guesses, reset guess to 9, display info
            yoGuesses = [];
            guesses = 9;
            loses++;
        }
        console.log('yoGuesses: ' + yoGuesses);
        document.getElementById("guesses").innerHTML = "Guesses left: " + guesses;
        document.getElementById("yourFailures").innerHTML = "Your guesses so far: " + yoGuesses;
        document.getElementById("losses").innerHTML = "Losses: " + loses;
    }
    // Display
}