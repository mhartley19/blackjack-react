import React, {useState, useEffect} from 'react'
import '../css/basic.css'
import {Deck} from './deckvalues'


let deck = {
    ace_of_clubs: 1,
    two_of_clubs: 2,
    three_of_clubs:3,
    four_of_clubs:4,
    five_of_clubs:5,
    six_of_clubs:6,
    seven_of_clubs:7,
    eight_of_clubs:8,
    nine_of_clubs:9,
    ten_of_clubs:10,
    jack_of_clubs:10,
    queen_of_clubs: 10,
    king_of_clubs: 10,
    ace_of_diamonds: 1,
    two_of_diamonds: 2,
    three_of_diamonds:3,
    four_of_diamonds:4,
    five_of_diamonds:5,
    six_of_diamonds:6,
    seven_of_diamonds:7,
    eight_of_diamonds:8,
    nine_of_diamonds:9,
    ten_of_diamonds:10,
    jack_of_diamonds:10,
    queen_of_diamonds: 10,
    king_of_diamonds: 10,
    ace_of_hearts: 1,
    two_of_hearts: 2,
    three_of_hearts:3,
    four_of_hearts:4,
    five_of_hearts:5,
    six_of_hearts:6,
    seven_of_hearts:7,
    eight_of_hearts:8,
    nine_of_hearts:9,
    ten_of_hearts:10,
    jack_of_hearts:10,
    queen_of_hearts: 10,
    king_of_hearts: 10,
    ace_of_spades: 1,
    two_of_spades: 2,
    three_of_spades:3,
    four_of_spades:4,
    five_of_spades:5,
    six_of_spades:6,
    seven_of_spades:7,
    eight_of_spades:8,
    nine_of_spades:9,
    ten_of_spades:10,
    jack_of_spades:10,
    queen_of_spades: 10,
    king_of_spades: 10,
    

}

let playerCount = 0
let dealerCount = 0

export function GameFunction(){

    

    const cardRandomizer = (deckCount) => {
        let randomNum = Math.round(Math.random() * deckCount)
        let keys = Object.keys(deck)
        return keys[randomNum]
        
    }

    const dealCards = () => {
        let deckCount = Object.keys(deck).length
        let playerCardOne = cardRandomizer(deckCount)
        playerCount += deck[playerCardOne]
        delete deck[playerCardOne]
        
        deckCount = Object.keys(deck).length
        let dealerCardOne = cardRandomizer(deckCount)
        dealerCount += deck[dealerCardOne]
        delete deck[dealerCardOne]
        
        deckCount = Object.keys(deck).length
        let playerCardTwo = cardRandomizer(deckCount)
        playerCount += deck[playerCardTwo]
        console.log(playerCardTwo , 'player count',playerCount)
        delete deck[playerCardTwo]
        
        deckCount = Object.keys(deck).length
        let dealerCardTwo = cardRandomizer(deckCount)
        dealerCount += deck[dealerCardTwo]
        console.log(dealerCardTwo , 'dealer count', dealerCount)
        delete deck[dealerCardTwo]
        
        
        
       
    }

    const hitHandler = () => {
        let deckCount = Object.keys(deck).length
        console.log(deckCount)
        let hitCard = cardRandomizer(deckCount)
        console.log(hitCard)
        playerCount += deck[hitCard]
        console.log('player count', playerCount)
        delete deck[hitCard]
        if(playerCount > 21){
            console.log('Player busts, dealer wins')
            dealerCount = 0
            playerCount = 0
        }
    }
    const stayHandler = () => {
        console.log(dealerCount)
        let deckCount = Object.keys(deck).length
        if(dealerCount < 17){
        let dealerHitCard = cardRandomizer(deckCount)
        console.log(dealerHitCard)
        dealerCount += deck[dealerHitCard]
        console.log(dealerCount)
        delete deck[dealerHitCard]
        }
        else if(dealerCount > 21){
            console.log('Dealer Busts, Player Wins')
        }
        else if(playerCount > dealerCount){
            console.log('player wins')
        }

        else if(dealerCount > playerCount){
            console.lof('dealer wins')
        }

        else{
            console.log('dealer wins')
        }

        dealerCount = 0
        playerCount = 0

    }
    

return(
    <div id='game-container'>
<div id='p1' class='player'>Player
{/* <div class='drawnCards'>{playerCards.map(m => <div>{m}</div>)}cards</div> */}
<button id="Random Card Func" onClick={cardRandomizer}>Random Card func</button>
<button id="Deal-Cards" onClick={dealCards}>Deal Cards</button>
<button id="Draw-Button" class='playerbutton' onClick={hitHandler}>Hit</button>
<button id="Stay-Button" class='playerbutton' onClick={stayHandler}>Stay</button>
</div>

<div id='dealer'>Dealer</div>

</div>

)}