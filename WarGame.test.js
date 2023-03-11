import { expect } from "chai";
import CardDeck from "./Week6 Project Assignment.js";

describe ('Deck', () => {
    it ('create a deck of 52 cards', () => {
        const warGame = new CardDeck ();
        warGame.createDeck();
        console.log('warGame.deck', warGame.deck.length);
        expect (warGame.deck.length).to.equal(52)
    });
});