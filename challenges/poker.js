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
function poker(hand1, hand2) {
  // sort hands
  hand1 = hand1.sort((a, b) => a - b);
  hand2 = hand2.sort((a, b) => a - b);
  console.log(hand1, hand2);
  // keep track of points
  let player1highestHand = 0;
  let player2highestHand = 0;
  // go through winning hands and compare points
  function countDupes(hand) {
    let counts = {};
    hand.forEach(x => (counts[x] = (counts[x] || 0) + 1));
    return counts;
  }
  let p1Counts = countDupes(hand1);
  let p2Counts = countDupes(hand2);
  // 4-of-a-kind > full house > straight > 3-of-a-kind > 2-pair > 1-pair > high card
  function score(hand, counts) {
    if (Object.values(counts).indexOf(4) in counts) {
      return 7;
    }
    if (
      Object.values(counts).indexOf(3) in counts &&
      Object.values(counts).indexOf(2) in counts
    ) {
      return 6;
    }
    let fullHouse = hand.reduce((acc, val, index) => {
      if (val - val[index - 1] != 1) acc = false;
      return acc;
    }, true);

    if (fullHouse) {
      return 5;
    }
    if (Object.values(counts).indexOf(3) in counts) {
      return 4;
    }

    let pairs = 0;
    for (let e in counts) {
      if (e === 2) pairs += 1;
    }
    if (pairs === 2) {
      return 3;
    }
    if (Object.values(counts).indexOf(2) in counts) {
      return 2;
    }
  }

  player1highestHand = score(hand1, p1Counts);
  player2highestHand = score(hand2, p2Counts);

  if (player1highestHand === 0 && player2highestHand === 0) {
    console.log(hand1[hand1.length - 1]);
    player1highestHand = hand1[hand1.length - 1];
    player2highestHand = hand2[hand2.length - 1];
  }

  // return "Player 1 wins", "Player 2 wins", or "Draw"
  if (player1highestHand > player2highestHand) {
    return "Player 1 wins";
  } else if (player1highestHand < player2highestHand) {
    return "Player 1 wins";
  } else {
    console.log(player1highestHand, player2highestHand);
    return "Draw";
  }
}

// Tests
console.log(poker([4, 4, 4, 2, 14], [8, 8, 8, 4, 5]));
module.exports = poker;
