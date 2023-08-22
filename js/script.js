'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const winSound = document.getElementById("sound");
const inputSound = document.getElementById("sound2");


const displayMessage = function (message) {
    document.querySelector('.message').innerHTML = message;
}

const borderColor = function (guess) {
    document.querySelector('.guess').style.borderColor = guess;
}

document.querySelector('.check').addEventListener("click", function () {
    const guess = Number(document.querySelector('.guess').value);
    if (!guess) {
        displayMessage("⛔ No Value...");
        inputSound.play();
        document.querySelector('.guess').style.borderColor = 'red';
    }
    else if (guess === secretNumber) {
        displayMessage("Congratulations!🏆 You guessed the number!🤞");
        winSound.play();
        document.querySelector('.number').innerHTML = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        borderColor('Green');
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    }
    else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? "📈 Number high" : "📉 Number low");
            borderColor('#eee');

            score--;
            document.querySelector('.score').innerHTML = score;
        }
        else {
            displayMessage("You lost the game...");
            document.querySelector('.score').innerHTML = 0;
        }
    }
});
document.querySelector('.again').addEventListener("click", function () {
    score = 20;
    document.querySelector('.score').innerHTML = score;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage('Start guessing...')
    document.querySelector('.number').textContent = "?";
    document.querySelector('.guess').value = '';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('body').style.backgroundColor = '#222';
    borderColor('#eee');
});