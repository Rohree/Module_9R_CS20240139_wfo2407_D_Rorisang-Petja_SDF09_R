

// Variables
let hasBlackJack = false
let isAlive = false
let message = ""
let cards = []
let sum = 0;
let player = {name : "Rory",chips : 700}


// DOM 
let plaerEl = document.getElementById("player-el")
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

plaerEl.textContent = player.name +": "+player.chips


// Functions
function renderGame() {
    sumEl.textContent = "Sum: " + sum;
    cardsEl.textContent ="Cards:  "
    for (let i=0; i < cards.length; i++){
        cardsEl.textContent += cards[i] +" ";
    }    
    if (sum < 21){
        message = "Do you want to draw a card?"
    }else if(sum === 21){
        message = "You've got Blackjack!"
        hasBlackJack = true
    }else {
        message = "You're out the game?"
        isAlive = false
    } 
    messageEl.textContent = message;
}

function newCard(){
   if (isAlive && !hasBlackJack){
    let card = getRandomCard();
    sum += card;
    cards.push(card)
    renderGame();
   }
}

function startGame(){
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame();
}

function getRandomCard(){
    let randomNumer = Math.floor( Math.random()*13 ) + 1
    if (randomNumer > 10) {
        return 10
    } else if (randomNumer === 1) {
        return 11
    } else {
        return randomNumer
    }
}