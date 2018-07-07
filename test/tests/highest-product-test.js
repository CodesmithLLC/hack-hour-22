const { deliver, describe, it } = new (require('./../util/report-card'));
const expect = require('expect.js');
let highestProduct;
try {
  highestProduct = require('../../challenges/highest-product.js');
} catch (e) {
  console.log('highest-product could not be tested');
}

module.exports = deliver((report) => {
  if (typeof highestProduct === 'function') {

    describe('Highest Product', function() {
      it('should return 0 if there are less than 3 elements in the array', function() {
        expect(highestProduct(null)).to.eql(0);
        expect(highestProduct([])).to.eql(0);
        expect(highestProduct([1])).to.eql(0);
        expect(highestProduct([1,2])).to.eql(0);
      }, ['edge cases']);

      it('should return 0 if the input is not an array', function() {
        expect(highestProduct(null)).to.eql(0);
        expect(highestProduct('string')).to.eql(0);
        expect(highestProduct(127)).to.eql(0);
      }, ['valid input']);

      it('should return highest product of three elements in the array', function() {
        expect(highestProduct([1, 2, 3])).to.eql(6);
        expect(highestProduct([5, 11, 0])).to.eql(0);
        expect(highestProduct([5, 6, 7, 0, 7, 8, 9])).to.eql(504);
        expect(highestProduct([4, 5, 2, 5, 5])).to.eql(125);
      }, ['arryas', 'recursion', 'iteration']);

      it('should handle negative numbers', function() {
        expect(highestProduct([-1, 2, 3])).to.eql(-6);
        expect(highestProduct([-5, 11, -1, 1])).to.eql(55);
        expect(highestProduct([-5, 11, -1, -10])).to.eql(550);
        expect(highestProduct([-5, 0, -1, -10])).to.eql(0);
        expect(highestProduct([-5, 0, 5, 10])).to.eql(0);
      }, ['arryas', 'recursion', 'iteration', 'negatives']);

      after(() => {
        report();
      });
    });
  } else {
    console.log('highestProduct was not exported properly');
  }
});
