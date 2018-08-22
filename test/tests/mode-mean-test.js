const { deliver, describe, it } = new (require('./../util/report-card'));
const expect = require('expect.js');
let modeMean;

try {
  modeMean = require('../../challenges/mode-mean.js');
} catch (e) {
  console.log('modeMean could not be tested');
}

module.exports = deliver((report) => {
  if (typeof modeMean === 'function') {
    describe('modeMean test', function() {
      it('should work with an array of only one number (repeated)', function() {
        expect(modeMean([2,2,2,2])).to.be(true);
        expect(modeMean([-20,-20,-20,-20])).to.be(true);
      }, ['arrays', 'math']);
      it('should work with different numbers but one obvious mode', function() {
        expect(modeMean([1,6,7,5,8,0,10,6,6,11])).to.be(true);
      }, ['arrays', 'math']);
      it('should take the max of the possible modes', function() {
        expect(modeMean([12,5,32])).to.be(false);
      }, ['arrays', 'math']);
      after(() => {
        report();
      });

    });
  } else {
    console.log('modeMean was not exported properly');
  }
});
