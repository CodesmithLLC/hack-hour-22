const { deliver, describe, it } = new (require('./../util/report-card'));
const expect = require('expect.js');
let poker;
try {
  poker = require('../../challenges/poker.js');
} catch (e) {
  console.log('Poker could not be tested');
}

module.exports = deliver((report) => {
  if (typeof poker === 'function') {
    describe('Poker Test', function() {
      it('should return the string "Player 1 wins"', function() {
        expect(poker([3,5,5,5,2], [4,6,7,8,8])).to.eql("Player 1 wins");
        expect(poker([2,4,5,9,14],[2,4,5,9,10])).to.eql("Player 1 wins");
        expect(poker([2,2,11,13,14],[14,13,12,11,4])).to.eql("Player 1 wins");
        expect(poker([2,3,13,13,13],[4,14,5,14,7])).to.eql("Player 1 wins");
      }, ['arrays', 'conditionals', 'sorting']);

      it('should return the string "Draw"', function() {
        expect(poker([3,5,3,5,2], [5,2,3,3,5])).to.eql("Draw");
        expect(poker([3,4,5,6,7], [3,4,5,6,7])).to.eql("Draw");
      }, ['arrays', 'conditionals', 'sorting']);

      it('should return the string "Player 2 wins"', function() {
        expect(poker([10,11,11,10,11], [5,7,7,7,7])).to.eql("Player 2 wins");
        expect(poker([2,2,3,3,4], [2,2,3,3,12])).to.eql("Player 2 wins");
        expect(poker([2,4,5,9,10], [2,4,5,9,14])).to.eql("Player 2 wins");
        expect(poker([12,12,11,11,6], [7,8,9,10,11])).to.eql("Player 2 wins");
      }, ['arrays', 'conditionals', 'sorting']);

      after(() => report());

    });
  } else {
    console.log('poker was not exported properly');
  }
});
