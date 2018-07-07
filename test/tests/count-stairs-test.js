const { deliver, describe, it } = new (require('./../util/report-card'));
const expect = require('expect.js');
let countStairs;
try {
  countStairs = require('../../challenges/count-stairs.js');
} catch (e) {
  console.log('countStairs could not be tested');
}

module.exports = deliver((report) => {
  if (typeof countStairs === 'function') {
    describe('Count Stairs Test', function() {
      it('should return 1 if there are no steps', function() {
        expect(countStairs(0)).to.eql(1);
      }, ['empty']);

      it('should return 1 if there is only 1 step', function() {
        expect(countStairs(1)).to.eql(1);
      });

      it('should return the number of ways to go up > 1 step', function() {
        expect(countStairs(2)).to.eql(2);
        expect(countStairs(4)).to.eql(5);
        expect(countStairs(8)).to.eql(34);
        expect(countStairs(10)).to.eql(89);
      }, ['recursion']);

      after(() => {
        report();
      });
    });
  } else {
    console.log('countStairs was not exported properly');
  }
});
