const { deliver, describe, it } = new (require('./../util/report-card'));
var expect = require('expect.js');
var bubbleSort;
try {
    bubbleSort = require('../../challenges/bubble-sort.js');
} catch (e) {
    console.log('bubbleSort could not be tested');
}

module.exports = deliver((report) => {

  if (typeof bubbleSort === 'function') {
    describe('Bubble Sort Test', function() {
      it('should work for unsorted arrays', function() {
        expect(bubbleSort([5,4,3,2,1])).to.eql([1,2,3,4,5]);
        expect(bubbleSort([7,8,3,9,2])).to.eql([2,3,7,8,9]);
        expect(bubbleSort([9,7,8,7,8,0,2])).to.eql([0,2,7,7,8,8,9]);
      });
      it('should work for sorted arrays', function() {
        expect(bubbleSort([1,2,3,4,5])).to.eql([1,2,3,4,5]);
        expect(bubbleSort([1,1,1,2,2])).to.eql([1,1,1,2,2]);
      });
      it('should return empty array if given empty array', function() {
        expect(bubbleSort([])).to.eql([]);
      });

      after(() => {
        report();
      })
    });
  } else {
    console.log('bubbleSort was not exported properly');
  }
})
