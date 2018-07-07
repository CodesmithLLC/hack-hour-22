const { deliver, describe, it } = new (require('./../util/report-card'));
const expect = require('expect.js');
let missingNum;

try {
  missingNum = require('../../challenges/missing-number.js');
} catch (e) {
  console.log('missing-number could not be tested');
}

module.exports = deliver((report) => {
  if (typeof missingNum === 'function') {
    describe('missingNum test', function() {
      it('should return the number missing in the array', function() {
        expect(missingNum([1,2])).to.be(3);
        expect(missingNum([5,4,1,2])).to.be(3);
        expect(missingNum([7,6,5,1,2,3])).to.be(4);
      }, ['arrays', 'math']);

      it('should work with large array', function() {
        expect(missingNum([6,10,7,2,4,1,11,3,9,5])).to.be(8);
      }, ['arrays', 'math']);

      after(() => report());
    });
  } else {
    console.log('missing-number was not exported properly');
  }
});
