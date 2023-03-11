class playingCard {
    constructor() {
        this.cardSuits = [
            'clubs \u2663',
            'diamonds \u2666',
            'hearts \u2665',
            'spades \u2660',
        ];
        this.cardRanks = [
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            '10',
            'J',
            'Q',
            'K',
            'A',
        ];
        this.cardValues = [1,2,3,4,5,6,7,8,9,10,11,12,13];
    }

    createCards() {
        let cardDeck = [];
        console.log("These are my cards: ", cardDeck);
        for (let cardSuit in this.cardSuits) {
            console.log(cardSuit, "the card suit is: ", this.cardSuits[cardSuit]);
        

        for (let cardRank in this.cardRanks) {
            console.log(cardRank, "the card rank is: ", this.cardRanks[cardRank]);
        
        cardDeck.push({
            cardValue: this.cardValues[cardRank],
            faceValue: this.cardRanks[cardRank] + " of " + this.cardSuits[cardSuit],
        });
      }
    }
    console.log('cardDeck in createCards method:', cardDeck);
    return cardDeck;
  }
}