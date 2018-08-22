const { deliver, describe, it } = new (require('./../util/report-card'));
const expect = require('expect.js');
let romanNumeral;
try {
  romanNumeral = require('../../challenges/roman-numeral.js');
} catch (e) {
  console.log('roman-numeral could not be tested');
}

module.exports = deliver((report) => {
  if (typeof romanNumeral === 'function') {
    describe('Roman Numeral Test', function() {
      it('should convert single digit numbers', function() {
        expect(romanNumeral(7)).to.eql('VII');
        expect(romanNumeral(1)).to.eql('I');
        expect(romanNumeral(2)).to.eql('II');
        expect(romanNumeral(4)).to.eql('IV');
      }, ['conditionals', 'dictionary', 'iteration']);

      it('should convert two digit numbers', function() {
        expect(romanNumeral(99)).to.eql('XCIX');
        expect(romanNumeral(39)).to.eql('XXXIX');
        expect(romanNumeral(50)).to.eql('L');
      }, ['conditionals', 'dictionary', 'iteration']);

      it('should convert three digit numbers', function() {
        expect(romanNumeral(798)).to.eql('DCCXCVIII');
        expect(romanNumeral(931)).to.eql('CMXXXI');
      });

      it('should convert four digit numbers', function() {
        expect(romanNumeral(2015)).to.eql('MMXV');
        expect(romanNumeral(1023)).to.eql('MXXIII');
        expect(romanNumeral(1700)).to.eql('MDCC');
      }, ['conditionals', 'dictionary', 'iteration']);

      after(() => {
        report();
      });
    });
  } else {
    console.log('romanNumeral was not exported properly');
  }
});
