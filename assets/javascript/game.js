

// Establishing variables 
var words = [""]
var word = words[Math.floor(Math.random() * words.length)];


//The answer bank at initial assignment of random word
let answerBank = [];
for (var i = 0; i < word.length; i++) {
    answerBank[i] = "_";
}

let lettersRemaining = word.length;
let attemptsRemaining = (word.length * 2);

// Keeps the game rolling until all letters are guessed or until player runs out of allowed guesses
 while (lettersRemaining > 0 && attemptsRemaining > 0) {
// game happens
//reveal progress of player
//use event listeners/keyup to take player guesses
//update answer bank, remaining letters and attempts remaining
 }

 var fruits = ["Banana"];
 var energy = fruits.join(" ");
 console.log(energy);

