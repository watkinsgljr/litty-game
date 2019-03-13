

// Establishing variables 
var words = ["KOBE", "MAGIC", "STAPLES", "FISHER", "SHAQ", "PHIL"];
var word = words[Math.floor(Math.random() * words.length)];
// words[1] = "love";
console.log(words);

let lettersRemaining = word.length;
let attemptsRemaining = (word.length * 2);
console.log(lettersRemaining)
console.log(attemptsRemaining)

//The answer bank at initial assignment of random word
let answerBank = [];
for (var i = 0; i < word.length; i++) {
    answerBank[i] = "_";
}
console.log(answerBank);




//Event listener that captures user input
let userGuess = document.getElementById("user-guess");
let answerBankDiv = document.getElementById("answer-bank");
answerBankDiv.innerHTML = answerBank.join(' ');
let attemptsRemainingDiv = document.getElementById("attempts-remaining-holder");
attemptsRemainingDiv.innerHTML = attemptsRemaining;
let lettersRemainingDiv = document.getElementById("letters-remaining-holder");
lettersRemainingDiv.innerHTML = lettersRemaining;

console.log(userGuess.textContent);
document.onkeyup = function (event) {
    console.log(event);
    userGuess.textContent = event.key.toUpperCase();
    console.log(userGuess.textContent);

    //Check user status

    // }  else if (userGuess.textContent === /^[a-zA-z]/) {
    //     alert("You may only select letters. Try again!");
        attemptsRemaining--;
        attemptsRemainingDiv.innerHTML = attemptsRemaining;
        for (var j = 0; j < word.length; j++) {
            if (word[j] === userGuess.textContent) {
                answerBank[j] = userGuess.textContent;
                lettersRemaining--;
                answerBankDiv.innerHTML = answerBank.join(' ');
                lettersRemainingDiv.innerHTML = lettersRemaining;
            } if (lettersRemaining && attemptsRemaining === 0) {
                alert("Clutch shot! Kobe at the buzzer for the win!");
                //press button to start new game or cancel to end game.    
            } else if (attemptsRemaining >= word.length && lettersRemaining === 0) {
             alert("Great win! It's a blowout victory for the Lakers!");
                //Press button to try again or cancel to end game.
            } else if (attemptsRemaining > 0 && lettersRemaining === 0) {
                alert("Lakers win! Great team victory!");
            } else if (attemptsRemaining === 0 && lettersRemaining > 1) {
                alert("You lose. Don't quit, try again!")
            }
        }
    } 






// Gamplay continuation requirements
// while (lettersRemaining > 0 && attemptsRemaining > 0)

//     console.log(answerBank.join(" "));



//Guesses replace _ in answer bank
if (userGuess.textContent > 1) {
    alert("Please press only one character at a time");
} else {
    for (var j = 0; j < word.length; j++) {
        if (word[j] === userGuess.textContent) {
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

//  var fruits = ["Banana", "Pear", "Strawberry"];
//  var energy = fruits.join(" ");
//  console.log(energy);
//  console.log(energy.split());
//  console.log(energy.charAt(0));

//  console.log(word.split('').join(','));

//  console.log(word.split());
 



