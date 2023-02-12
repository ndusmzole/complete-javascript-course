'use strict';

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

// the open/close model functions

const openModal = function(){
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
};

const hideModal = function(){
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
};

// console.log(btnsOpenModal);

//Add an event listener for each of the buttons

for(let i=0; i<btnsOpenModal.length; i++)
    btnsOpenModal[i].addEventListener("click", openModal);

//implementing the logic of the close button
btnCloseModal.addEventListener("click",hideModal);

//implementing logic of clicking on the overlay area
overlay.addEventListener("click", hideModal);

//Global listener
// document.addEventListener('keydown', function(e){ another valid implementation
    
// });

document.addEventListener('keydown', (e)=>{
    //console.log(e);
    if(e.key==="Escape" && !modal.classList.contains("hidden")){
    
        hideModal(); 
    
    }
    
    
});


