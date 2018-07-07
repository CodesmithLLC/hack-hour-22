const { deliver, describe, it } = new (require('./../util/report-card'));
const expect = require('expect.js');
let maxSubarray;

try {
  maxSubarray = require('../../challenges/max-subarray.js');
} catch (e) {
  console.log('maxSubarray could not be tested');
}

module.exports = deliver((report) => {
  if (typeof maxSubarray === 'function') {

    describe('maxSubarray test', function() {

      it('should work when all numbers are positive', function() {
        expect(maxSubarray([3, 7, 8, 1, 8])).to.be(27);
      }, ['arrays', 'recursion', 'iterating']);

      it('should work when the max subarray is the whole array but still has negatives', function() {
        expect(maxSubarray([15,20,-5,10])).to.be(40);
      }, ['arrays', 'recursion', 'iterating']);

      it('maximum sum of subarrays', function() {
        expect(maxSubarray([1,-2,3,10,-4,7,2,-5])).to.be(18);
        expect(maxSubarray([-100,-4,-5,1,2,-6,-7,-15])).to.be(3);
      }, ['arrays', 'recursion', 'iterating']);

      it('should work when the subarray is only one number', function() {
        expect(maxSubarray([-100,1000,-9000,5,30])).to.be(1000);
      });

      it('should work when all numbers are negative', function() {
        expect(maxSubarray([-100,-1000,-9000,-5,-30])).to.be(-5);
      }, ['arrays', 'negatives']);

      after(() => {
        report();
      });
    });
  } else {
    console.log('maxSubarray was not exported properly');
  }
})
