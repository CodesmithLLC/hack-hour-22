const { deliver, describe, it } = new (require('./../util/report-card'));
const expect = require('expect.js');
let numToWords;

try {
  numToWords = require('../../challenges/num-to-words.js');
} catch (e) {
  console.log('numToWords could not be tested');
}

module.exports = deliver((report) => {
  if (typeof numToWords === 'function') {

    describe('numToWords test', function() {

      it('should work for single digit numbers', function() {
        expect(numToWords(5)).to.be('Five');
        expect(numToWords(6)).to.be('Six');
      }, ['strings', 'math', 'conditionals', 'dictionary']);

      it('should work for two digit numbers', function() {
        expect(numToWords(43)).to.be('FortyThree');
        expect(numToWords(99)).to.be('NinetyNine');
      });

      it('should work for three digit numbers', function() {
        expect(numToWords(143)).to.be('OneHundredFortyThree');
        expect(numToWords(999)).to.be('NineHundredNinetyNine');
      });

      it('should work for four digit numbers', function() {
        expect(numToWords(2999)).to.be('TwoThousandNineHundredNinetyNine');
      }, ['strings', 'math', 'conditionals', 'dictionary']);

      it('should work for 2-digit "teens"', function() {
        expect(numToWords(15)).to.be('Fifteen');
        expect(numToWords(12)).to.be('Twelve');
      });

      it('should work for larger "teens"', function() {
        expect(numToWords(2913)).to.be('TwoThousandNineHundredThirteen');
      }, ['strings', 'math', 'conditionals', 'dictionary']);

      it('should work for very large numbers including quadrillions', function() {
        expect(numToWords(2483579422)).to.be('TwoBillionFourHundredEightyThreeMillionFiveHundredSeventyNineThousandFourHundredTwentyTwo');
        expect(numToWords(300525151340440)).to.be('ThreeHundredTrillionFiveHundredTwentyFiveBillionOneHundredFiftyOneMillionThreeHundredFortyThousandFourHundredForty');
        expect(numToWords(92120000000000000)).to.be('NinetyTwoQuadrillionOneHundredTwentyTrillion');
      }, ['large input']);

      it('should work for zero', function() {
        expect(numToWords(0)).to.be('Zero');//Checks whether input is an array.
      });

      after(() => report());
    });
  }
});

if (typeof numToWords() !== 'number'){
  console.log('Inproper input.')
} else {
  console.log('numToWords was not exported properly');
}
