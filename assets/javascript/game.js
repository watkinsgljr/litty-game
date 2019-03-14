

// Establishing variables 
var words = ["KOBE", "MAGIC", "STAPLES", "FISHER", "SHAQ", "PHIL", "BASKETBALL", "HARDWOOD", "LAKESHOW", "WORTHY", "FINALS", "CHAMPIONSHIPS", "PURPLE", "GOLD"];
var word = words[Math.floor(Math.random() * words.length)];
var alphaArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

let lettersRemaining = word.length;
let attemptsRemaining = (word.length * 2);


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
let letterChoseBank = document.getElementById("letters-chose");
letterChoseBank.innerHTML = alphaArray.join(" ");

console.log(userGuess.textContent);
document.onkeyup = function (event) {
    console.log(event);
    userGuess.textContent = event.key.toUpperCase();
    console.log(userGuess.textContent);
    const regex = new RegExp(/^[a-zA-z]/);
    if (!regex.test(userGuess.textContent)) {
        alert("You may only select letters. Try again!");
        return;
    }

    let alphaArrayIndex = alphaArray.indexOf(userGuess.textContent);
    if (alphaArrayIndex === -1) {
        alert("You already selected the letter " + userGuess.textContent.toUpperCase() + ". Please select another letter.");

    } else {
        alphaArray[alphaArrayIndex] = "*";
        letterChoseBank.innerHTML = alphaArray.join(" "); {

            //Check user status

            // }  else if (userGuess.textContent === /^[a-zA-z]/) {a
            //     alert("You may only select letters. Try again!");
            attemptsRemaining--;
            attemptsRemainingDiv.innerHTML = attemptsRemaining;
            for (var j = 0; j < word.length; j++) {
                if (word[j] === userGuess.textContent) {
                    answerBank[j] = userGuess.textContent;
                    lettersRemaining--;
                    answerBankDiv.innerHTML = answerBank.join(' ');
                    lettersRemainingDiv.innerHTML = lettersRemaining;
                }
                if (lettersRemaining === 0 && attemptsRemaining === 0) {
                    answerBankDiv.innerHTML = answerBank.join(' ');
                    setTimeout(function() { if(!alert("Clutch shot! Kobe at the buzzer for the win!")) {
                        window.location.reload();
                    }; }, 500);
                    break;

                } else if (attemptsRemaining >= word.length && lettersRemaining === 0) {
                    answerBankDiv.innerHTML = answerBank.join(' ');
                    setTimeout(function() { if(!alert("Great win! It's a blowout victory for the Lakers!")) {
                        window.location.reload();
                    }; }, 500);
                    break;

                } else if (attemptsRemaining > 0 && lettersRemaining === 0) {
                    answerBankDiv.innerHTML = answerBank.join(' ');
                    setTimeout(function() { if(!alert("Lakers win! Great team victory!")) {
                        window.location.reload();
                    }; }, 500);
                    break;

                } else if ((attemptsRemaining === 0 && lettersRemaining > 0) || (lettersRemaining > attemptsRemaining)) {
                    setTimeout(function() { if(!alert("You lose. Don't quit, try again!")) {
                        window.location.reload();
                    }; }, 500);
                    break;
                }
            }
        }
    }
}








