/*
 * Build a poker checking function that takes in two arrays of five elements,
 * where each array represents a player's hand and
 * each element represents a card from a standard deck of cards:
 * 52 cards, 2 - Ace, NO suits. (Jack = 11, Queen = 12, King = 13, Ace = 14)
 *
 * The function should return either "Player 1 wins",
 * "Player 2 wins", or "Draw" using the following ranking system:
 *
 * 4-of-a-kind > full house > straight > 3-of-a-kind > 2-pair > 1-pair > high card
 * Example: poker([3,5,5,5,2], [4,6,7,8,8]) -> "Player 1 wins"
 *
 * If two players have the same rank, then player with the highest card wins.
 * Example: [4, 4, 4, 2, 14] beats [8, 8, 8, 4, 5] because the first hand has the highest card.
 *
 * Clearly real-world poker has more complex rules for tied ranks, but we want you
 * to focus on overall architecture rather than edge cases. Have fun!
 *
 * BONUS: Account for suits and add in Flush & Straight Flush/Royal Flush.
 * BONUS2: Create a deck of cards function that generates two random hands for you.
 */

function countCards(hand) {
  const count = {};
  hand.forEach((card) => {
    count[card] = count[card] + 1 || 1;
  });
  return count;
}

const ranks = [
  count => Object.values(count).includes(4),
  count => Object.entries(count).length === 2,
  (count) => {
    const cards = Object.keys(count).sort();
    return (
      cards[4] - cards[3] === 1 &&
      cards[3] - cards[2] === 1 &&
      cards[2] - cards[1] === 1 &&
      cards[1] - cards[0] === 1
    );
  },
  count => Object.values(count).includes(3),
  count => Object.values(count).filter(num => num === 2).length === 2,
  count => Object.values(count).includes(2),
];

function until(array, item) {
  for (let i = 0; i < array.length; i += 1) {
    if (array[i](item)) return i;
  }
  return array.length;
}

function poker(...hands) {
  const [oneRank, twoRank] = hands
    .map(countCards)
    .map(count => until(ranks, count));
  if (oneRank !== twoRank) {
    return oneRank < twoRank
      ? 'Player 1 wins'
      : 'Player 2 wins';
  }

  const [oneHigh, twoHigh] = hands.map(hand => Math.max(...hand));
  if (oneHigh !== twoHigh) {
    return oneHigh > twoHigh
      ? 'Player 1 wins'
      : 'Player 2 wins';
  }

  return 'Draw';
}

function Deck() {
  this.size = 52;
  this.deck = Array(52).fill(null).map((val, idx) => {
    return Math.floor((idx / 4) + 2);
  });
}

Deck.prototype.deal = function deal() {
  const hand = [];
  for (let i = 0; i < 5; i += 1) {
    const card = Math.random() * this.size;
    hand.push(...this.deck.splice(card, 1));
    this.size -= 1;
  }
  return hand.sort((a, b) => a - b);
};

module.exports = poker;
