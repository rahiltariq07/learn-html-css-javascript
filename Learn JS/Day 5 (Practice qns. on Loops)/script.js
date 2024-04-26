// Qn.1:- Print all even numbers from 0 to 100

for (let i = 1; i<=100; i++) {
    if (i % 2 === 0) {      // Comment it before browsing
        console.log(i);
    }
}

// Qn.2:- Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters correct value.

let gameNum = 25;
let userNum = prompt("Guess the Game Number: ");

while (userNum != gameNum) {
    userNum = prompt("You entered wrong the number. Guess again: ");
}

console.log("Congratulations, you entered correct number")