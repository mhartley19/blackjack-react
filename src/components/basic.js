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




let playerCount = 0
let dealerCount = 0
let playerTurn = true

export function GameFunction(){

    

    const cardRandomizer = (deckCount) => {
        let card = []
        let randomNum = Math.round(Math.random() * deckCount)
        let keys = Object.keys(deck)
        let selectedKey = keys[randomNum]
        card.push(selectedKey)
        card.push(randomNum)
        console.log("Card Images length", cardImages.length)
        console.log('random num', randomNum)
        console.log(card)
        return card
        
    }

    const dealCards = () => {
        let deckCount = Object.keys(deck).length

        // CARD 1

        //Image handling
        let playerCardOne = cardRandomizer(deckCount)
        console.log(playerCardOne)
        let playerCardOneId = document.getElementById("pc1")
        let playerCardOneImg = document.createElement('img')
        
        
        console.log("deck count",deckCount)
        playerCardOneImg.src = cardImages[playerCardOne[1]]
        console.log(playerCardOneImg.src)
        playerCardOneId.append(playerCardOneImg)
        
        

        // logic and value handling
        if(deck[playerCardOne[0]] === 1 && playerCount <= 10){
            console.log("ace detected")
            playerCount += 10
            console.log("Player count after ace", playerCount)

        }
        console.log('player card one', playerCardOne[0])
        playerCount += deck[playerCardOne[0]]
        cardImages.splice(playerCardOne[1],1)
        delete deck[playerCardOne[0]]
        deckCount = Object.keys(deck).length

        // CARD 2

        let dealerCardOne = cardRandomizer(deckCount)
        console.log(dealerCardOne)
        let dealerCardOneId = document.getElementById("dc1")
        let dealerCardOneImg = document.createElement('img')
        console.log("deck count",deckCount)
        dealerCardOneImg.src = cardImages[dealerCardOne[1]]
        console.log(dealerCardOneImg.src)
        dealerCardOneId.append(dealerCardOneImg)
        


        console.log('dealer card one', dealerCardOne[0])
        dealerCount += deck[dealerCardOne[0]]
        if(deck[dealerCardOne[0]] === 1 && dealerCount <= 10){
            console.log("ace detected")
            dealerCount += 10
            console.log("Dealer count after ace", dealerCount)

        }
        cardImages.splice(dealerCardOne[1],1)
        delete deck[dealerCardOne[0]]
        deckCount = Object.keys(deck).length

        //CARD 3
    
        let playerCardTwo = cardRandomizer(deckCount)
        console.log(playerCardTwo)
        let playerCardTwoId = document.getElementById("pc2")
        let playerCardTwoImg = document.createElement('img')
        console.log("deck count",deckCount)
        playerCardTwoImg.src = cardImages[playerCardTwo[1]]
        console.log(playerCardTwoImg.src)
        playerCardTwoId.append(playerCardTwoImg)
        


        if(deck[playerCardTwo[0]] === 1 && playerCount <= 10){
            console.log("ace detected")
            playerCount += 10
            console.log("Dealer count after ace", playerCount)

        }
        playerCount += deck[playerCardTwo[0]]
        console.log(playerCardTwo[0] , 'player count',playerCount)
        cardImages.splice(playerCardTwo[1],1)
        delete deck[playerCardTwo[0]]
        deckCount = Object.keys(deck).length

        //card4
        
        let dealerCardTwo = cardRandomizer(deckCount)
        console.log(dealerCardTwo)
        let dealerCardTwoId = document.getElementById("dc2")
        let dealerCardTwoImg = document.createElement('img')
        console.log("deck count",deckCount)
        dealerCardTwoImg.src = cardImages[dealerCardTwo[1]]
        console.log(dealerCardTwoImg.src)
        dealerCardTwoId.append(dealerCardTwoImg)
        
        if(deck[dealerCardTwo[0]] === 1 && dealerCount <= 10){
            console.log("ace detected")
            dealerCount += 10
            console.log("Dealer count after ace", dealerCount)

        }
        dealerCount += deck[dealerCardTwo[0]]
        console.log(dealerCardTwo[0] , 'dealer count',dealerCount)
        cardImages.splice(dealerCardTwo[1],1)
        delete deck[dealerCardTwo[0]]
        
        // console.log('deck count after dc2' ,deckCount)
        
        
        
       
    }

    const hitHandler = () => {
        let deckCount = Object.keys(deck).length
        console.log('Deck Count', deckCount)
        let hitCard = cardRandomizer(deckCount)
        if(deck[hitCard[0]] === 1 && playerCount <= 10){
            console.log("ace detected")
            playerCount += 10
            console.log("Player count after ace", playerCount)

        }
        console.log("Hit cards", hitCard[0])
        playerCount += deck[hitCard[0]]
        console.log('player count', playerCount)
        delete deck[hitCard]

        

        if(playerCount > 21){
            console.log('Player busts, dealer wins')
            dealerCount = 0
            playerCount = 0
        }
    }
    const stayHandler = () => {
        console.log('dealer count', dealerCount)
        let deckCount = Object.keys(deck).length
        while(dealerCount < 17){
        let dealerHitCard = cardRandomizer(deckCount)
        console.log('dealer hit card', dealerHitCard)
        if(deck[dealerHitCard[0]] === 1 && dealerCount <= 10){
            console.log("ace detected")
            dealerCount += 10
            console.log('dealer count after ace', dealerCount)

        }
        dealerCount += deck[dealerHitCard[0]]
        console.log('card value', deck[dealerHitCard[0]])
        console.log('dealer count',dealerCount)
        delete deck[dealerHitCard[0]]
        deckCount = Object.keys(deck).length
        console.log("deck count", deckCount)

        
        }

        if(dealerCount > 21){
            console.log('Dealer Busts, Player Wins')
        }

        if(playerCount > dealerCount){
            console.log('player wins')
        }

        if(playerCount === dealerCount && playerCount <= 21){
            console.log("Push")
        }

        if(dealerCount <= 21 && dealerCount > playerCount){
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
<div id='gameboard'>
<div id='pc1' class='board-card-holder'> </div>
<div id='pc2' class='board-card-holder'>pc2</div>
<div id='dc1' class='board-card-holder'>dc1</div>
<div id='dc2' class='board-card-holder'>dc2</div>
</div>

<div id='dealer'>Dealer</div>

</div>

)}