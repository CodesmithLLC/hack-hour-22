const { deliver, describe, it } = new (require('./../util/report-card'));
const expect = require('expect.js');
let findInOrderedSet;
try {
  findInOrderedSet = require('../../challenges/find-in-ordered-set.js');
} catch (e) {
  console.log('find-in-ordered-set could not be tested');
}

const arr = [1, 4, 6, 7, 9, 17, 45, 65, 83];

module.exports = deliver((report) => {
  if (typeof findInOrderedSet === 'function') {
    describe('findInOrderedSet Tests', function() {
      it('should find an element in the middle', function() {
        expect(findInOrderedSet(arr, 9)).to.be(true);
      }, ['arrays', 'recursion']);

      it('should find an element to the left', function() {
        expect(findInOrderedSet(arr, 4)).to.be(true);
      });

      it('should find an element if it is the first element', function() {
        expect(findInOrderedSet(arr, 1)).to.be(true);
      }, ['arrays', 'recursion']);

      it('should find an element to the right', function() {
        expect(findInOrderedSet(arr, 45)).to.be(true);
      });

      it('should find an element if it is the last element', function() {
        expect(findInOrderedSet(arr, 83)).to.be(true);
      }, ['arrays', 'recursion']);

      it('should return false if it isnt in the array (but would be in the middle)', function() {
        expect(findInOrderedSet(arr, 100)).to.be(false);
        expect(findInOrderedSet(arr, 10)).to.be(false);
      }, ['arrays', 'recursion']);

      it('should return false if value is less than smallest value in the array', function() {
        expect(findInOrderedSet(arr, 0)).to.be(false);
      });

      it('should return false if value is more than largest value in the array', function() {
        expect(findInOrderedSet(arr, 100000)).to.be(false);
      });

      after(() => {
        report();
      });

    });
  } else {
    console.log('findInOrderedSet was not exported properly');
  }
});
