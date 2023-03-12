//class to define each available/types of cards (set the value/suit to equal each other so they're associated with each other)
class PlayingCard {
    constructor(suit, value, rank) {
        this.value = suit;
        this.suit = value;
        this.rank = rank;
    }
}

//class to define players, players' hands, & scores
class Player {
    constructor(name, hand, score) {
        this.name = name;
        this.hand = hand;
        this.score = score;
    }
}

//class to define the deck of cards
class CardDeck {
    constructor() {
        //creates a new array to hold all the cards
        this.deck = [];
    }

     //iterates through each cardSuits, cardRanks, and cardValues and creates a new array of cards.
     createDeck() {
        //4 different suits
        const cardSuits = ['clubs \u2663', 'diamonds \u2666', 'hearts \u2665', 'spades \u2660'];
        //13 ranks
        const cardRanks = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
        //Therefore 13 values
        const cardValues = [1,2,3,4,5,6,7,8,9,10,11,12,13];
        //For in loop through each suit (x4)
        for (let i = 0; i < cardSuits.length; i++){
            for (let x = 0; x < cardValues.length; x++){
                const card = new PlayingCard (x + 1, cardValues[x], cardSuits[i]);
                this.deck.push(card);
            }
        }
     }

  //shuffle method defined using a function to randomize the deck
  shuffle(){
    const shuffledDeck = this.deck;

    //using the 'i--' to decrement as it draws from a total of 52 cards. using 'floor' to start index # at 0, using the 'Math' addition
    function shuffleCards(){
        for (let i = shuffledDeck.length -1; i > 0; i--){
            const x = Math.floor(Math.random() * (i + 1));
            const tempoary = shuffledDeck[i];
            shuffledDeck[i] = shuffledDeck[x];
            shuffledDeck[x] = tempoary;
        }
    } shuffleCards();
  }
}

//new class to initiate the game later on
class WarGame{
    constructor(){
    }

    //a new method with a 'deck' as an object of the CardDeck class (in order to create a new deck of cards and shuffle them)
    playGame(){
        const deck = new CardDeck();
        deck.createDeck();
        deck.shuffle();

        //creating 2 players in order to split the deck in half
        const player1 = new Player('player 1', deck.deck.splice(0,26), 0);
        const player2 = new Player('player 2', deck.deck.splice(0,26), 0);

        //for loop to iterate through every single card to add points to the player with the higher card value & display the winner and points
        for (let i = 0; i < player1.hand.length; i++){

            if (player1.hand[i].value > player2.hand[i].value){
                player1.score = player1.score + 1;
                console.log('Player 1 is the winner!');
                console.log('Player 1 score = ' + player1.score + ' vs Player 2 score = ' + player2.score);
            } else if (player2.hand[i].value > player1.hand[i].value){
                player2.score = player2.score + 1;
                console.log('Player 2 is the winner!');
                console.log('Player 1 score =' + player1.score + ' vs Player 2 score = ' + player2.score);
            } else {
                console.log("It's a tie game! Both players earned 0 points");
                console.log('Player 1 score is = ' + player1.score + ' vs Player 2 score is = ' + player2.score);
            }
        }

        //after all the cards have been drawn/iterated, the player with the higher total points is announced as the winner
        if (player1.score > player2.score){
            console.log('Player 1 wins the game!');   
        } else if (player2.score > player1.score){
            console.log('Player 2 wins the game!');
        } else {
            console.log("It's a tie game! Play again?");
        }
    }
}

//creating an object called game from the class WarGame to initiatialize the war game
const game = new WarGame();
game.playGame();

//new object created from CardDeck class to create a new deck of cards that is shuffled
const deck = new CardDeck();
deck.createDeck();
deck.shuffle();