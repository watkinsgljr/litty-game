

// Establishing variables 
var words = ["test", "greg", "wonderful", "head", "slurp"];
var word = words[Math.floor(Math.random() * words.length)];

//Event listener that captures user input
let userGuess = document.getElementById("user-guess");
 console.log(userGuess.textContent);
 document.onkeyup = function(event) {
     console.log(event);
     userGuess.textContent = event.key.toLowerCase();
     console.log(userGuess.textContent);
 }


//The answer bank at initial assignment of random word
let answerBank = [];
for (var i = 0; i < word.length; i++) {
    answerBank[i] = "_";
}
console.log(answerBank);

let lettersRemaining = word.length;
let attemptsRemaining = (word.length * 2);
console.log(lettersRemaining)
console.log(attemptsRemaining)

// Gamplay continuation requirements
// while (lettersRemaining > 0 && attemptsRemaining > 0)

//     console.log(answerBank.join(" "));



//Guesses replace _ in answer bank
if (userGuess.textContent !== 1) {
    alert("Please press only one characterat a time");
} else {
    for (var j = 0; j < word.length; j++) {
        if (word[j] == userGuess.textContent) {
            answerBank[j] = userGuess.textContent;
            lettersRemaining--;
            console.log(answerBank);
        }
    }
} 

// Keeps the game rolling until all letters are guessed or until player runs out of allowed guesses
//  while (lettersRemaining > 0 && attemptsRemaining > 0) {
// // game happens
// //reveal progress of player
// //use event listeners/keyup to take player guesses
// //update answer bank, remaining letters and attempts remaining
//  }

 var fruits = ["Banana"];
 var energy = fruits.join(" ");
 console.log(energy);



