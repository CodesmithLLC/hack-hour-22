const { deliver, describe, it } = new (require('./../util/report-card'));
const expect = require('expect.js');
let bestProfit;

try {
  bestProfit = require('../../challenges/apple-stocks.js');
} catch (e) {
  console.log('apple-stocks could not be tested');
}

module.exports = deliver((report) => {
  if (typeof bestProfit === 'function') {

    describe('apple-stocks test', function() {

      it('should be highest profit gain', function() {
        expect(bestProfit([5,4,8,9,2])).to.be(5);
        expect(bestProfit([1,6,15,4,9,3,22])).to.be(21);
        expect(bestProfit([8,5,4,3,2,9,2])).to.be(7);
      }, ['arrays', 'looping', 'tracking']);

      it('should return 0 if no profit is possible', function() {
        expect(bestProfit([40,35,30,25,20,15,10,5])).to.be(0);
      }, ['arrays', 'looping', 'tracking']);

      it('should return 0 if no profit is possible OR input is invalid', function() {
        expect(bestProfit([])).to.be(0);
        expect(bestProfit()).to.be(0);
      }, ['edge cases']);

      after(() => report());

    });
  } else {
    console.log('apple-stocks was not exported properly');
  }
});
