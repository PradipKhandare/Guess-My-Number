'use strict';


// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = "Correct Number!";

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let score = 20;
let highScore = 0;
let number = Math.trunc(Math.random() * 20) + 1;
console.log(number);

document.querySelector('.check').addEventListener('click', function () {
    let guess = document.querySelector('.guess').value;
    console.log(guess);

    document.querySelector('.message').textContent = "Start Guessing!!";

    if (!guess) {
        document.querySelector('.message').textContent = "No number";
        console.log(document.querySelector('.message').textContent = "No number");
    } else if (guess == number) {


        document.querySelector('.message').textContent = "Correct Number!!";
        document.querySelector('.number').textContent = number;
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        console.log(document.querySelector('.message').textContent = "Correct Number!!");
    } else if (guess > number) {

        if (score > 0) {
            document.querySelector('.message').textContent = "Too high!!";
            score--;
            document.querySelector('.score').textContent = score;
            console.log(document.querySelector('.message').textContent = "Too high!!");
        }
        if (score == 0) {
            document.querySelector('.message').textContent = "You Lost The game!!";
        }
    } else if (guess < number) {
        if (score > 0) {
            document.querySelector('.message').textContent = "Too low!!";
            score--;
            document.querySelector('.score').textContent = score;
            console.log(document.querySelector('.message').textContent = "Too low!!");
        }
        if (score == 0) {
            document.querySelector('.message').textContent = "You Lost The game!!";
        }
    }
});

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    number = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('.message').textContent = "Start Guessing!!";
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});






