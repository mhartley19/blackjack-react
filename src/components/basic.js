import React, {useState, useEffect} from 'react'
import '../css/basic.css'
import cardImages from './cardImages/index.js'





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



export const GameFunction = () => {


    

    const[playerCount, setPlayerCount] = useState(0)
    const[dealerCount, setDealerCount] = useState(0)
    const[playerTurn, setPlayerTurn] = useState(true)
    const[newGame, setNewGame] = useState(true)
    const[endGame, setEndGame] = useState(false)
    const[playerAceCount, setPlayerAceCount] = useState(0)
    const[dealerAceCount, setDealerAceCount] = useState(0)
    const[playerBlackJack, setPlayerBlackJack] = useState(false)
    const[dealerBlackJack, setDealerBlackJack] = useState(false)
    const[playerAceBust, setPlayerAceBust] = useState(false)
    const[playerChips, setPlayerChips] = useState(1000)
    const[betAmount, setBetAmount] = useState(0)
    const[betMade, setBetMade] = useState(false)
    const[doubleDown, setDoubleDown] = useState(false)
    console.log(playerChips)

    useEffect(() => {
        const currentChips = window.localStorage.getItem('playerChips')
        setPlayerChips(currentChips)
        console.log(currentChips)
        console.log(playerChips)

        return console.log('clean up')

    },[])
    

    useEffect( () => {
        
        window.localStorage.setItem('playerChips', playerChips)
        console.log(playerChips)

        return console.log('clean up')

    })

  

   


    

    console.log(playerChips)

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
        let winnings = 0
        let end = false
        let pTurn = true
        let dealerBJ = false
        let playerBJ = false
        let deckCount = Object.keys(deck).length

        // CARD 1

        let card = cardRandomizer(deckCount)
        imageHelper(card, "pc1")
        
        
        if(deck[card[0]] === 11){
            PACount += 1
        }

        pCount += deck[card[0]]
        cardImages.splice(card[1],1)
        delete deck[card[0]]
        
        // CARD 2

        deckCount = Object.keys(deck).length
        card = cardRandomizer(deckCount)
        imageHelper(card, "dc1")
        
        if(deck[card[0]] === 11){
            DACount += 1
        }
        dCount += deck[card[0]]
        
        cardImages.splice(card[1],1)
        delete deck[card[0]]
        deckCount = Object.keys(deck).length

        //CARD 3

        card = cardRandomizer(deckCount)
        imageHelper(card, "pc2")
    
    
        if(deck[card[0]] === 11){
            PACount += 1
        }
        pCount += deck[card[0]]
   
        cardImages.splice(card[1],1)
        delete deck[card[0]]
        deckCount = Object.keys(deck).length

        //card4

        card = cardRandomizer(deckCount)
        imageHelper(card, "dc2")
        
    
        
        if(deck[card[0]] === 11){
            DACount += 1

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

        if(dCount === 21 && pCount < 21){
            dealerBJ = true
            pTurn = false
            end = true


        }

        if(pCount === 21 && dCount < 21){
            playerBJ = true
            pTurn = false
            winnings += betAmount * 2.5
            end = true
        }
        
        console.log(playerBJ, dealerBJ)
        setPlayerCount(c => c + pCount)
        setDealerCount(c => c + dCount)
        setPlayerAceCount(PACount)
        setDealerAceCount(DACount)
        setDealerBlackJack(dealerBJ)
        setPlayerBlackJack(playerBJ)
        setPlayerTurn(pTurn)
        setPlayerChips(c => c += winnings)
        setNewGame(false)
        setEndGame(end)


        
    }

    // console.log('ace counts', playerAceCount, dealerAceCount)

    const hitHandler = () => {
        let deckCount = Object.keys(deck).length
        console.log('hit handler deck count', deckCount)
        let card = cardRandomizer(deckCount)
        imageHelper(card, "playerhitcards")
        let pTurn = true
        let pCount = playerCount
        let PACount = playerAceCount
        let hitCard = deck[card[0]]
        pCount += hitCard
        let aceBust = ''
        cardImages.splice(card[1],1)
        delete deck[card[0]]

        if(playerAceBust){
            aceBust = true
        }
        else {
            aceBust = false
        }
        
        

        console.log( PACount, hitCard, pCount, aceBust)

        if(hitCard === 11){
            PACount += 1
            console.log(PACount)
            if(pCount > 21){
                aceBust = true
            }
        }
    
        if(!aceBust && pCount > 21 && PACount > 0){
            pCount -= 10
            aceBust = true
            console.log(pCount, aceBust)
        }

        if(aceBust && hitCard === 11){
            pCount -=10
        }

       
       
        

        if(pCount > 21){
            console.log(pCount)
            console.log('Player busts, dealer wins')
            pTurn = false
            setEndGame(true)
            
        }

        if(pCount === 21){
            pTurn = false
        }

        
        setPlayerCount(pCount)
        setPlayerTurn(pTurn)
        setPlayerAceCount(PACount)
        setPlayerAceBust(aceBust)

       
        console.log('playercount', playerCount)
       
    }

    const stayHandler = () => {
        
        let deckCount = Object.keys(deck).length
        let pCount = playerCount
        console.log('player count',playerCount)
        let dCount = dealerCount
        let DACount = dealerAceCount
        let aceBust = false
        let winnings = 0
       
        
        
        while(dCount < 17 && !playerBlackJack){
        let card = cardRandomizer(deckCount)
        let hitCard = deck[card[0]]
        dCount += hitCard
        
        if(hitCard === 11){
            DACount += 1
            console.log(DACount)
            if(dCount > 21){
                aceBust = true
            }
        }
    
        if(!aceBust && dCount > 21 && DACount > 0){
            dCount -= 10
            aceBust = true
            console.log(dCount, aceBust)
        }

        if(aceBust && hitCard === 11){
            dCount -=10
        }


        imageHelper(card,'dealerhitcards')

        cardImages.splice(card[1],1)
        delete deck[card[0]]
        deckCount = Object.keys(deck).length
        setPlayerTurn(false)

        
        }

        if(pCount > dCount | dCount > 21 && pCount <= 21){
            winnings += betAmount * 2
            console.log('winnings', winnings)

        }

        if(pCount === dCount && dCount <= 21 && pCount <= 21){
            winnings += betAmount * 1
            console.log("Push winnings", winnings)
        }
        setPlayerTurn(false)
        setPlayerCount(pCount)
        setDealerCount(dCount)
        setPlayerChips(c => c + winnings)
        console.log(playerChips)
        // setBetMade(false)
        setEndGame(true)
       
        


    }
    const placeBet = () => {
        console.log(betAmount)
        console.log(playerChips)
        if(betAmount > playerChips){
            console.log("place bet if")
            alert("Not Enough Chips")
            return 
        }
        if(betAmount === 0){
            console.log(betAmount)   
            alert('Please enter a bet')
            return 
        }
        else{
        console.log('place bet else')
        setPlayerChips(c => c - betAmount)
        console.log(playerChips)
        
        
        
        }
        setBetMade(true)
        
    }

   function doubleDownHandler(){
       setBetAmount(b => b * 2)
       hitHandler()
       setDoubleDown(true)
   }

   const startNewGame = () => {
       setEndGame(false)
       window.location.reload()
   }

   const resetChipsHandler = () => {
       setPlayerChips(1000)
       console.log(playerChips)
   }

   const dollarClick = () => {
       if(!betMade){
       setBetAmount(b => b + 1)
       return 
       }
       else return 
       
   }

   const fiveDollarClick = () => {
        if(!betMade){
        setBetAmount(b => b + 5)
        }
        else return 
   }

   const twentyFiveDollarClick = () => {
        if(!betMade){
        setBetAmount(b => b + 25)
        return 
        }
        else return 
   }

   const hundredDollarClick = () => {
        if(!betMade){
        setBetAmount(b => b + 100)
        return 
        }
        else return 
    }

   const resetBet = () => {
       if(!betMade){
       setBetAmount(0)
       return
        }
       else return 
   }
    // console.log(playerCount, dealerCount, playerTurn, newGame, hitCardCount, playerBlackJack, dealerBlackJack)
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
        <div id='playerhitcards' class='board-card-holder'></div>
        </div>
    </div>
        <div>Player: {playerCount}</div>
        {/* Win or loss display */}
        {/* {playerCount > 21 ? 
            <h1>Player Busts!</h1> : <h1>Hit or Stay</h1>}
        {!playerTurn && (playerCount > dealerCount) && dealerCount >= 17 && playerCount <= 21 ? 
            <h1>Player Wins!</h1> : <h1>Hit or Stay</h1>} */}
        {dealerCount > 21 ? 
            <h1>Dealer Busts, Player Wins!</h1>: <div></div>}
        {!playerTurn && dealerCount > playerCount && dealerCount <= 21 ? 
            <h1>Dealer Wins!</h1>: <div></div>}
        {dealerBlackJack ? 
            <h1>BlackJack!</h1>: <div></div>}
        {playerBlackJack ? 
            <h1>BlackJack! Player Wins</h1>: <div></div>}
        {playerBlackJack && dealerBlackJack ? 
            <h1>Push</h1>: null}
        {!playerTurn && playerCount === dealerCount && playerCount >= 17 && dealerCount >= 17 ? 
            <h1>Push</h1> : null}
        
        <div id="chip-total">Total Chips:{playerChips}</div>
        
            <div id='wager-amount'>Wager Amount:{betAmount}</div>  


    <div class='game-buttons'>
        <div>
    {betMade ? 
         <button disabled onClick={placeBet}>Place Bet</button>: <button onClick={placeBet}>Place Bet</button>}
    {newGame && betMade ? 
        <button id="Deal-Cards" class='playerbutton'onClick={dealCards}>Deal Cards</button>: 
        <button disabled id="Deal-Cards" class='playerbutton'onClick={dealCards}>Deal Cards</button>}
    {endGame ? 
        <button onClick={startNewGame}>New Game</button> : 
        <button disabled onClick={startNewGame}>New Game</button> }
        </div>
        
        <div>
    {!newGame && playerCount < 21 && !dealerBlackJack && !endGame ? 
        <button id="Draw-Button" class='playerbutton' onClick={hitHandler}>Hit</button>:
        <button disabled id="Draw-Button" class='playerbutton' onClick={hitHandler}>Hit</button>}
    {!newGame && playerCount <= 21 && !playerBlackJack && !dealerBlackJack && !endGame? 
        <button id="Stay-Button" class='playerbutton' onClick={stayHandler}>Stay</button>: 
        <button disabled id="Stay-Button" class='playerbutton' onClick={stayHandler}>Stay</button>}
        </div>
    {doubleDown && !newGame ?  <button disabled onClick={doubleDownHandler}>Double Down</button>:
                    <button onClick={doubleDownHandler}>Double Down</button>}
    
    </div>
    <div class='chip-container'>
    <div class='chip one-dollar' onClick={dollarClick}>$1</div>
    <div class='chip five-dollar' onClick={fiveDollarClick}>$5</div>
    <div class='chip twentyfive-dollar' onClick={twentyFiveDollarClick}>$25</div>
    <div class='chip hundred-dollar' onClick={hundredDollarClick}>$100</div>
    </div>
    {betMade ? <button disabled onClick={resetBet}>Reset Bet</button>:
                <button onClick={resetBet}>Reset Bet</button>}
    {newGame ? <button onClick={resetChipsHandler}>Reset Chips</button>:
    <button disabled onClick={resetChipsHandler}>Reset Chips</button>}

</div>
</div>

)}