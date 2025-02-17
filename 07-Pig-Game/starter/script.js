'use strict';

// Selecting elements
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");


let scores, currentScore, activePlayer, playing;

const init = ()=>{
    currentScore = 0;
    activePlayer = 0;
    playing = true;
    scores = [0, 0];
    score0El.textContent=0;
    score1El.textContent=0;
    current0El.textContent=0;
    current1El.textContent=0;
    document.querySelector(".player--0").classList.remove("player--winner");
    document.querySelector(".player--1").classList.remove("player--winner");
    document.querySelector(".player--0").classList.add("player--active");
}
init();

const switchPlayer = function(){
        currentScore = 0;
        document.getElementById(`current--${activePlayer}`).textContent = 0;
   
        activePlayer = activePlayer === 0 ? 1 : 0;

        player0El.classList.toggle("player--active");
        player1El.classList.toggle("player--active");  

};

//starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

//Roll functionality
btnRoll.addEventListener("click", function(){
    if(playing){
        //1. roll dice, generate random 1-6
        const dice = Math.trunc(Math.random() * 6) + 1;

        //2. Display dice
        diceEl.classList.remove("hidden");
        diceEl.src = `dice-${dice}.png`;

        //3. Check for rolled 1: if true, switch to next player
        if(dice !== 1){
            //add dice to current score
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else{
            // Switch to next Player]
            switchPlayer();
            
        }
    }
})


// Hold functionality

btnHold.addEventListener("click", function(){
    if(playing){

        // 1. Add current score to active player's score
        scores[activePlayer] += currentScore;

        document.getElementById(`score--${activePlayer}`).textContent= scores[activePlayer];
        


        //2. check if player's score is >= 100
        if(scores[activePlayer]>=100){
            playing = false;
            diceEl.classList.add("hidden");
            document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
            document.querySelector(`.player--${activePlayer}`).classList.remove("player--active");
        } else {
            switchPlayer();
        }
    }

});

btnNew.addEventListener("click", init)



