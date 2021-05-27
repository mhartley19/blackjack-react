import React, {useState, useEffect} from 'react'
import '../css/basic.css'
import cardImages from './cardImages/index.js'
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




// let playerCount = 0

let playerTurn = true

export const GameFunction = () => {

    const[playerCount, setPlayerCount] = useState(0)
    const[dealerCount, setDealerCount] = useState(0)
    const[hitCardCount, setHitCardCount] = useState(0)

    
    const cardRandomizer = (deckCount) => {
        let card = []
        let randomNum = Math.round(Math.random() * deckCount)
        let keys = Object.keys(deck)
        let selectedKey = keys[randomNum]
        card.push(selectedKey)
        card.push(randomNum)

        return card
    }
    const imageHelper = (playerCard, id) => {

        let cardId = document.getElementById(id)
        let cardImgElement = document.createElement('img')
        cardImgElement.src = cardImages[playerCard[1]]
        cardId.append(cardImgElement)

    }
        
    

    const dealCards = () => {
        let pCount = 0
        let dCount = 0
        let deckCount = Object.keys(deck).length

        // CARD 1

       
        let card = cardRandomizer(deckCount)
        imageHelper(card, "pc1")
        
        
        if(deck[card[0]] === 1 && playerCount <= 10){
            console.log("ace detected")
            pCount += 10
            console.log("Player count after ace", playerCount)
        }

        pCount += deck[card[0]]
        cardImages.splice(card[1],1)
        delete deck[card[0]]
        
        // CARD 2
        
        deckCount = Object.keys(deck).length
        card = cardRandomizer(deckCount)
        imageHelper(card, "dc1")
        
        if(deck[card[0]] === 1 && dealerCount <= 10){
            console.log("ace detected")
            dCount += 10
            console.log("Dealer count after ace", dealerCount)

        }
        dCount += deck[card[0]]
        
        cardImages.splice(card[1],1)
        delete deck[card[0]]
        deckCount = Object.keys(deck).length

        //CARD 3

        card = cardRandomizer(deckCount)
        imageHelper(card, "pc2")
    
    
        if(deck[card[0]] === 1 && playerCount <= 10){
            console.log("ace detected")
            pCount += 10
            console.log("Player count after ace", playerCount)

        }
        pCount += deck[card[0]]
       
        // console.log('Player count after card two',playerCount)
        cardImages.splice(card[1],1)
        delete deck[card[0]]
        deckCount = Object.keys(deck).length

        //card4

        card = cardRandomizer(deckCount)
        imageHelper(card, "dc2")
        
    
        
        if(deck[card[0]] === 1 && dealerCount <= 10){
            console.log("ace detected")
            dCount += 10
            console.log('Delaer count after card ace',dealerCount)
            

        }
        dCount += deck[card[0]]
        cardImages.splice(card[1],1)
        delete deck[card[0]]
        
        setPlayerCount(c => c + pCount)
        setDealerCount(c => c + dCount)
       
    }

    const hitHandler = () => {
        let deckCount = Object.keys(deck).length
        let card = cardRandomizer(deckCount)
        imageHelper(card, "hitcards")
        let pCount = playerCount
    
        if(deck[card[0]] === 1 && playerCount <= 10){
            console.log("ace detected")
            pCount += 10
            
            

        }
        console.log("Hit card", card)
        pCount += deck[card[0]]
        console.log('player count', playerCount)
        delete deck[card]

        if(pCount > 21){
            console.log(pCount)
            console.log('Player busts, dealer wins')
            
        }

        setHitCardCount(h => h + 1)
        setPlayerCount(pCount)
    }
    const stayHandler = () => {
        let pCount = playerCount
        let dCount = dealerCount
        console.log(dCount)
        // console.log('dealer count', dealerCount)
        let deckCount = Object.keys(deck).length
        while(dCount < 17){
        let dealerHitCard = cardRandomizer(deckCount)
        console.log('dealer hit card', dealerHitCard)
        if(deck[dealerHitCard[0]] === 1 && dCount <= 10){
            console.log("ace detected")
            // setDealerCount(dealerCount+ 10)
            console.log('dealer count after ace', dCount)

        }



        console.log('card value', deck[dealerHitCard[0]])
        console.log('dealer count',dealerCount)
        dCount += deck[dealerHitCard[0]]
        console.log('dcount', dCount)
        delete deck[dealerHitCard[0]]
        deckCount = Object.keys(deck).length
        console.log("deck count", deckCount)

        
        }

        if(dCount > 21){
            console.log('Dealer Busts, Player Wins')
        }

        if(pCount < 22 && pCount > dCount){
            console.log('player wins')
        }

        if(pCount === dCount && pCount <= 21){
            console.log("Push")
        }

        if(dCount <= 21 && dCount > pCount){
            console.log('dealer wins')
        }
        

        setPlayerCount(pCount)
        setDealerCount(dCount)
        

    


    }
    console.log(playerCount, dealerCount)
return(
    <div id='game-container'>

{/* <div class='drawnCards'>{playerCards.map(m => <div>{m}</div>)}cards</div> */}
<button id="Random Card Func" onClick={cardRandomizer}>Random Card func</button>
<button id="Deal-Cards" onClick={dealCards}>Deal Cards</button>
<button id="Draw-Button" class='playerbutton' onClick={hitHandler}>Hit</button>
<button id="Stay-Button" class='playerbutton' onClick={stayHandler}>Stay</button>


<div id='gameboard'>
<div id='section' class='dealer-card-section'>
        <div id='dc1' class='board-card-holder'></div>      
        <div id='dc2' class='board-card-holder'></div>
        <div id='dealer'>Dealer: {dealerCount} </div> 
    </div>
    <div id='section' class='player-card-section'>
        <div id='pc1' class='board-card-holder'> </div>
        <div id='pc2' class='board-card-holder'></div>
        <div id='hitcards' class='board-card-holder'></div>
        <div id='p1' class='player'>Player: {playerCount}</div>
    </div>
     
    
</div>



</div>

)}