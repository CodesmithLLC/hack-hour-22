const { deliver, describe, it } = new (require('./../util/report-card'));
const expect = require('expect.js');
let twoSum;

try {
  twoSum = require('../../challenges/two-sum.js');
} catch(error) {
  console.log('two-sum could not be tested');
}

module.exports = deliver((report) => {
  if(typeof twoSum === 'function') {
    describe('two-sum test', function () {
      it('should return true if two nums sum to n', function() {
        expect(twoSum([1,4,6,12,9], 10)).to.eql(true);
        expect(twoSum([1,4,6,12,9],16)).to.eql(true);
        expect(twoSum([1,4,7,2,9,0], 7)).to.equal(true);
      }, ['arrays', 'iteration', 'recursion']);

      it('should return false if two nums dont sum to n', function() {
        expect(twoSum([1,4,6,12,9], 2)).to.eql(false);
        expect(twoSum([1,4,7,2,9], 7)).to.eql(false);
      }, ['arrays', 'iteration', 'recursion']);

      it('should work with negative numbers', function() {
        expect(twoSum([-1,4,6,12,9],8)).eql(true);
      }, ['arrays', 'iteration', 'recursion']);

      after(() => report());
    });

  } else {
    console.log('two-sum was not exported properly');
  }
});
