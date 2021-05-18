import React, {useState} from 'react'
import '../css/basic.css'
import {clubs, diamonds, hearts, spades} from './deckimages.js'
import {values} from './deckvalues.js'





export function GameFunction(){
    

    const [playerCardCount, setPlayerCardCount] = useState(0)
    const [dealerCardCount, setDealerCardCount] = useState(0)
    const [turn, setTurn] = useState('')

    const cardRandomizer = (deckCount) => {
        let randomNumber = Math.floor(Math.random() * deckCount)
        let cardValue = values[randomNumber]
        if(cardValue === 'ace'){
            if(playerCardCount | dealerCardCount < 11){
            cardValue = 11
            }
            else{cardValue=1}
        }
        values.splice(randomNumber,1)
        
        console.log(deckCount)
        return cardValue
        
        
    
    }

    const dealCards = () => {
        let playerCardOne = setTimeout(cardRandomizer(),400)
        console.log(playerCardOne, deckCount)
        let dealerCardOne = setTimeout(cardRandomizer(),400)
        console.log(dealerCardOne, deckCount)
        let playerCardTwo = setTimeout(cardRandomizer(),400)
        console.log(playerCardTwo, deckCount)
        let dealerCardTwo = setTimeout(cardRandomizer(),400)
        console.log(dealerCardTwo, deckCount)
        
        
        
        

    }
    
    const hitHandler = () => {
    
        let selectedCard = Math.floor(Math.random() * deckCount)
        console.log(deckCount)
        console.log(selectedCard)
    
    }
    
    const stayHandler = () =>{
        
    }
    
    const newGame = () => {
    
    }
   
   const cardValue = (number, playerCardCount, dealerCardCount) => {
        if(number === 1|2|3|4){
            if(playerCardCount > 11){
                return 11}

            else{return 1}
                
        }
        
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