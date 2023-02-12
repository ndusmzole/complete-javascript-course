'use strict';


/*
console.log(document.querySelector('.left'));

document.querySelector(".number").textContent=13;
document.querySelector(".score").textContent=31;
document.querySelector(".guess").value = 13;
//console.log( document.querySelector(".message").textContent='newwewrww naeje 😋');
*/

let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highscore = 0;

const displayMessage = function(message){
    document.querySelector(".message").textContent=message;
}

 //document.querySelector(".number").textContent=secretNumber;

document.querySelector(".check").addEventListener('click', function(){
    const guess = Number(document.querySelector(".guess").value);

    // console.log(typeof guess, guess);
    // when the player doesn't input any number
    if(!guess){
        displayMessage("⛔ No number!");

    //when the player guesses correctly
    } else if(guess === secretNumber){

        //Setting the highscore
        if(score>highscore){
            highscore= score;
            document.querySelector(".highscore").textContent=highscore;
        }

        displayMessage("🎉 Correct Number!")
        document.querySelector(".number").textContent=secretNumber;
        document.querySelector('body').style.backgroundColor="#60b347";
        document.querySelector(".number").style.width="30rem";

    //when the player guesses wrong
    }else if(guess !== secretNumber){
        if(score>1){
            // when the guess is either too high or too low
            displayMessage(guess > secretNumber ? "☝ Too High!" : "👇 Too low!");

            score--;

        } else {
            displayMessage("🤡 You lost the game!")
           score=0;
        }

    }
    
    document.querySelector(".score").textContent=score;
});


// Replay functionality

document.querySelector(".again").addEventListener('click', function(){
    //reseting the message
    displayMessage("Start guessing...")
    //resetting the score
    score=20;
    //resetting the score and guess input field in the DOM
    document.querySelector(".score").textContent=score;
    document.querySelector(".guess").value='';

    //generating a new secret number
    secretNumber = Math.trunc(Math.random()*20)+1;
    document.querySelector(".number").textContent="?";

    //resettig styles
    document.querySelector("body").style.backgroundColor="#222";
    document.querySelector(".number").style.width="15rem";




})

