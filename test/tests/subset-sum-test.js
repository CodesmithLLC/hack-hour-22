const { deliver, describe, it } = new (require('./../util/report-card'));
const expect = require('expect.js');
let subsetSum;
try {
  subsetSum = require('../../challenges/subset-sum.js');
} catch (e) {
  console.log('subset-sum could not be tested');
}

module.exports = deliver((report) => {
  if (typeof subsetSum === 'function') {
    describe('Subset Sum Test', function() {
      it('should return false if array is empty', function() {
        expect(subsetSum([], 1)).to.eql(false);
      });

      it('should work for arrays of length 1', function() {
        expect(subsetSum([1], 1)).to.eql(true);
        expect(subsetSum([1], 2)).to.eql(false);
      });

      it('should return false if no set exists', function() {
        expect(subsetSum([1, 6, 3], 5)).to.eql(false);
        expect(subsetSum([2, 4, 1, 8], 16)).to.eql(false);
        expect(subsetSum([-1, 5, -2, 6], 1)).to.eql(false);
      }, ['arrays', 'recursion', 'math']);

      it('should return true when contiguous set exists', function() {
        expect(subsetSum([1, 6, 3], 10)).to.eql(true);
        expect(subsetSum([2, 4, 1, 8], 9)).to.eql(true);
      }, ['arrays', 'recursion', 'math']);

      it('should return true when non-contiguous set exists', function() {
        expect(subsetSum([5, 11, 21, 13], 18)).to.eql(true);
        expect(subsetSum([5, 3, 1, 7, 11], 15)).to.eql(true);
        expect(subsetSum([8, 1, 4, 2], 11)).to.eql(true);
      }, ['arrays', 'recursion', 'math']);

      it('should return true when contiguous set with negative number(s) exists', function() {
        expect(subsetSum([1, -6, 3], -2)).to.eql(true);
        expect(subsetSum([2, -4, 5, -8], 3)).to.eql(true);
      }, ['edge cases', 'negatives']);

      it('should return true when non-contiguous set with negative number(s) exists', function() {
        expect(subsetSum([11, 4, -4, 2, -3], 9)).to.eql(true);
        expect(subsetSum([1, -5, 11, 2, -1], -3)).to.eql(true);
        expect(subsetSum([5, 11, 21, -13], -11)).to.eql(false);
      });

      after(() => {
        report();
      });
    });

  } else {
    console.log('subsetSum was not exported properly');
  }
});
