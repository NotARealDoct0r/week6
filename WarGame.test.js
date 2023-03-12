const expect = chai.expect; // Imports the chai expect method

describe ('createDeck', function() {
    describe('#create a new deck of cards', function() {
        it ('create a deck of 52 cards', function() {
            const warGame = new CardDeck();
            warGame.createDeck();
            expect (warGame.deck.length).to.equal(52);
        });
        it ('should throw an error if the number of cards is not 52', function() {
            expect (function() {
                createDeck(warGame.deck.length > 52 || warGame.deck.length < 52);
            }).to.throw(Error);
        });
    });
});