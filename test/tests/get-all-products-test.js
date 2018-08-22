const { deliver, describe, it } = new (require('./../util/report-card'));
const expect = require('expect.js');
let getAllProducts;
try {
  getAllProducts = require('../../challenges/get-all-products.js');
} catch (e) {
  console.log('get-all-products could not be tested');
}

module.exports = deliver((report) => {
  if (typeof getAllProducts === 'function') {
    describe('Get All Products', function() {
      it('should return [0] if array is empty', function() {
        expect(getAllProducts([])).to.eql([0]);
      }, ['empty']);

      it('should return an array of possible products', function() {
        expect(getAllProducts([1]).sort()).to.eql([1]);
        expect(getAllProducts([1, 2]).sort()).to.eql([1, 2]);
        expect(getAllProducts([1, 2, 3]).sort()).to.eql([2, 3, 6]);
        expect(getAllProducts([5, 2, 2, 3, 4]).sort()).to.eql([120, 120, 48, 60, 80]);
      }, ['arrays', 'iteration', 'recursion', 'math']);

      it('should work on arrays with zeroes', function() {
        expect(getAllProducts([5, 0, 2, 3, 4]).sort()).to.eql([0, 0, 0, 0, 120]);
        expect(getAllProducts([0, 1, 2, 0]).sort()).to.eql([0, 0, 0, 0]);
      }, ['arrays', 'edge cases']);

      after(() => {
        report();
      });
    });

  } else {
    console.log('getAllProducts was not exported properly');
  }
});
