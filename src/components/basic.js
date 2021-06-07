import React, {useState, useEffect} from 'react'
import '../css/basic.css'
import cardImages from './cardImages/index.js'
import {Deck} from './deckvalues'



let deck = {
    ace_of_clubs: 11,
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
    ace_of_diamonds: 11,
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
    ace_of_hearts: 11,
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
    ace_of_spades: 11,
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



export const GameFunction = () => {

    const[playerCount, setPlayerCount] = useState(0)
    const[dealerCount, setDealerCount] = useState(0)
    const[hitCardCount, setHitCardCount] = useState(0)
    const[playerTurn, setPlayerTurn] = useState(true)
    const[newGame, setNewGame] = useState(true)
    const[playerAceCount, setPlayerAceCount] = useState(0)
    const[dealerAceCount, setDealerAceCount] = useState(0)
    const[playerAce, setPlayerAce] = useState(false)
    const[dealerAce, setDealerAce] = useState(false)

    
    const cardRandomizer = (deckCount) => {
        let card = []
        let randomNum = Math.floor(Math.random() * deckCount)
        let keys = Object.keys(deck)
        let selectedKey = keys[randomNum]
        card.push(selectedKey)
        card.push(randomNum)
        console.log('deck count' ,deckCount)
        console.log("random num", randomNum)
        console.log("card",card)

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
        let PACount = 0
        let DACount = 0
        let deckCount = Object.keys(deck).length

        // CARD 1

       
        let card = cardRandomizer(deckCount)
        imageHelper(card, "pc1")
        
        
        if(deck[card[0]] === 11){
            console.log("ace detected")
            PACount += 1
            console.log("Player count after ace", playerCount)
        }

        pCount += deck[card[0]]
        cardImages.splice(card[1],1)
        delete deck[card[0]]
        
        // CARD 2

        deckCount = Object.keys(deck).length
        card = cardRandomizer(deckCount)
        imageHelper(card, "dc1")
        
        if(deck[card[0]] === 11){
            console.log("ace detected")
            DACount += 1
            console.log("Dealer count after ace", dealerCount)

        }
        dCount += deck[card[0]]
        // let dealerCardOne = dCount
        
        cardImages.splice(card[1],1)
        delete deck[card[0]]
        deckCount = Object.keys(deck).length

        //CARD 3

        card = cardRandomizer(deckCount)
        imageHelper(card, "pc2")
    
    
        if(deck[card[0]] === 11){
            console.log("ace detected")
            PACount += 1
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
        
    
        
        if(deck[card[0]] === 11){
            console.log("ace detected")
            DACount +=1
            
        }
        dCount += deck[card[0]]
        cardImages.splice(card[1],1)
        delete deck[card[0]]

        if(DACount === 2){
            dCount -= 10
        }

        if(PACount === 2){
            pCount -= 10
        }
        
        setPlayerCount(c => c + pCount)
        setDealerCount(c => c + dCount)
        setPlayerAceCount(a => a + PACount)
        setDealerAceCount(a => a + DACount)
        setNewGame(false)
    }

    const hitHandler = () => {
        let deckCount = Object.keys(deck).length
        let card = cardRandomizer(deckCount)
        imageHelper(card, "playerhitcards")
        let pCount = playerCount
        let PACount = playerAceCount
        let DACount = dealerAceCount
    
        if(PACount > 0 && card[0] + pCount > 21){
            console.log("ace detected")
            pCount -= 10

        }

        if(PACount === 0 && card[0] === 11 && pCount > 10){
            pCount -= 10
            PACount += 1
        }
        pCount += deck[card[0]]
        delete deck[card]

        if(pCount > 21){
            console.log(pCount)
            console.log('Player busts, dealer wins')
            setPlayerTurn(false)
            
        }

        setHitCardCount(h => h + 1)
        setPlayerCount(pCount)

       
    }
    const stayHandler = () => {
        
        let pCount = playerCount
        let dCount = dealerCount
        let deckCount = Object.keys(deck).length
        
        while(dCount < 17){
        let card = cardRandomizer(deckCount)
        
        if(deck[card[0]] === 1 && dCount <= 10){
            console.log("ace detected")
            // setDealerCount(dealerCount+ 10)
            console.log('dealer count after ace', dCount)

        }

        imageHelper(card,'dealerhitcards')

        dCount += deck[card[0]]
        delete deck[card[0]]
        deckCount = Object.keys(deck).length
        setPlayerTurn(false)

        
        }
        
        setPlayerTurn(false)
        setPlayerCount(pCount)
        setDealerCount(dCount)
        


    }
    console.log(playerCount, dealerCount, playerTurn, newGame, hitCardCount)
return(
    <div id='game-container'>







<div id='gameboard'>
<div id='section' class='dealer-card-section'>
        <div class='dealerCards'>
        {playerTurn ? <div id='dc1' class="hidden-first-card"></div>:
            <div id='dc1' class='board-card-holder'></div>}
        <div id='dc2' class='board-card-holder'></div>
        <div id='dealerhitcards' class='board-card-holder'></div>
        </div>
        
    </div>
        {playerTurn ? null: 
            <div id='dealer'>Dealer: {dealerCount} </div> }
    <div id='section' class='player-card-section'>
        <div class='playerCards'>
        <div id='pc1' class='board-card-holder'> </div>
        <div id='pc2' class='board-card-holder'></div>
        <div id='playerhitcards' class='board-card-holder'></div>}
        </div>
    </div>
        <div id='p1' class='player'>Player: {playerCount}</div>
    {newGame ? <button id="Deal-Cards" onClick={dealCards}>Deal Cards</button>: null}
    {!newGame & playerCount < 21 ? <button id="Draw-Button" class='playerbutton' onClick={hitHandler}>Hit</button>: null}
    {!newGame & playerCount <= 21 ? <button id="Stay-Button" class='playerbutton' onClick={stayHandler}>Stay</button>: null}
    {playerCount > 21 ? <h1>Player Busts!</h1>:null}
    {playerCount > dealerCount & dealerCount >= 17 & playerCount <= 21 ? <h1>Player Wins!</h1>: null}
    {dealerCount > 21 ? <h1>Dealer Busts, Player Wins!</h1>: null}
    {dealerCount > playerCount & dealerCount <= 21 ? <h1>Dealer Wins!</h1>: null}
     
    
</div>



</div>

)}