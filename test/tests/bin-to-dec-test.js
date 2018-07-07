const { deliver, describe, it } = new (require('./../util/report-card'));
const expect = require('expect.js');
let binToDec;
try {
  binToDec = require('../../challenges/bin-to-dec.js');
} catch (e) {
  console.log('bin-to-dec could not be tested');
}

module.exports = deliver((report) => {
  if (typeof binToDec === 'function') {
    describe('Binary to Decimal Test', function() {
      it('should return correct conversion', function() {
        expect(binToDec('0')).to.eql(0);
        expect(binToDec('11')).to.eql(3);
        expect(binToDec('100')).to.eql(4);
        expect(binToDec('101')).to.eql(5);
      }, ['strings', 'math', 'conditionals']);

      it('should ignore leading zeroes', function() {
        expect(binToDec('0')).to.eql(0);
        expect(binToDec('011')).to.eql(3);
        expect(binToDec('00100')).to.eql(4);
        expect(binToDec('000101')).to.eql(5);
      }, ['strings', 'math', 'conditionals']);

      after(() => {
        report();
      });
    });
  } else {
    console.log('binToDec was not exported properly');
  }
});
