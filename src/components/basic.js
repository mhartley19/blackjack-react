import React, {useState} from 'react'
import '../css/basic.css'
import {Clubs, Diamonds, Hearts, Spades} from './deckvalues'






export function GameFunction(){
    

    const [playerCardCount, setPlayerCardCount] = useState(0)
    const [dealerCardCount, setDealerCardCount] = useState(0)
    const [turn, setTurn] = useState('')

    const selectedClubs= []
    const selectedDiamonds = []
    const selectedHearts = []
    const selectedSpades = []

    
    
    
    
    

    const cardRandomizer = (deckCount) => {
        let randomNumber = Math.floor(Math.random() * 4)
        
        while(randomNumber === 1){
            let keys = Object.keys(Clubs)
            let cardNumber = Math.floor(Math.random() * keys.length)
            let selectedCard = keys[cardNumber]
            if(selectedClubs.includes(selectedCard) === false){
                let cardValue = Clubs[keys[cardNumber]]
                selectedClubs.push(selectedCard)
                
                console.log("Clubs", selectedClubs)
                randomNumber = 0
                console.log("card value", cardValue)
                return cardValue
                }
            else{
                cardNumber = Math.floor(Math.random() * keys.length)
                selectedCard = keys[cardNumber]
                
            }
        }

        while(randomNumber === 2){
            let keys = Object.keys(Diamonds)
            let cardNumber = Math.floor(Math.random() * keys.length)
            let selectedCard = keys[cardNumber]
            if(selectedDiamonds.includes(selectedCard) === false){
                let cardValue = Diamonds[keys[cardNumber]]
                selectedDiamonds.push(selectedCard)
                
                console.log("Diamonds", selectedDiamonds)
                randomNumber = 0
                console.log("card value", cardValue)
                return cardValue
                }
            else{
                cardNumber = Math.floor(Math.random() * keys.length)
                selectedCard = keys[cardNumber]
                
            }
        }
            
        while(randomNumber === 3){
            let keys = Object.keys(Hearts)
            let cardNumber = Math.floor(Math.random() * keys.length)
            let selectedCard = keys[cardNumber]
            if(selectedHearts.includes(selectedCard) === false){
                let cardValue = Hearts[keys[cardNumber]]
                selectedHearts.push(selectedCard)
                
                console.log("Hearts", selectedHearts)
                randomNumber = 0
                console.log("card value", cardValue)
                return cardValue
                }
            else{
                cardNumber = Math.floor(Math.random() * keys.length)
                selectedCard = keys[cardNumber]
                
            }
        }  
        
        while(randomNumber === 4){
            let keys = Object.keys(Spades)
            let cardNumber = Math.floor(Math.random() * keys.length)
            let selectedCard = keys[cardNumber]
            if(selectedSpades.includes(selectedCard) === false){
                let cardValue = Spades[keys[cardNumber]]
                selectedSpades.push(selectedCard)
                console.log(cardValue)
                console.log("Spades", selectedSpades)
                randomNumber = 0
                console.log("card value", cardValue)
                return cardValue
                }
            else{
                cardNumber = Math.floor(Math.random() * keys.length)
                selectedCard = keys[cardNumber]
                
            }
        }   
            
    }        
            
            // delete Spades[selected]
            

       

        
        
        // console.log(Spades)
    
    


    const dealCards = () => {
        
        let playerCardOne = setInterval(cardRandomizer(), 1000)
        
        let dealerCardOne = setInterval(cardRandomizer(), 1000)
        
        let playerCardTwo = setInterval(cardRandomizer(), 1000)
        
        let dealerCardTwo = setInterval(cardRandomizer(), 1000)

        console.log(playerCardOne)
        console.log(playerCardTwo)
        console.log(dealerCardOne)
        console.log(dealerCardTwo)
        
        
        
        
        

    }
    
    const hitHandler = () => {
        let deckCount = 52
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