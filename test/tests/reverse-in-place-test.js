const { deliver, describe, it } = new (require('./../util/report-card'));
const expect = require('expect.js');
let reverseInPlace;
try {
  reverseInPlace = require('../../challenges/reverse-in-place.js');
} catch (e) {
  console.log('reverse-in-place could not be tested');
}
module.exports = deliver((report) => {
  if (typeof reverseInPlace === 'function') {
    describe('Reverse-In-Place Tests', function() {

      it ('should work for arrays with even length', function() {
        const evenString = 'I have even length'
        const evenArray = evenString.split('');
        const copy = evenArray.slice();
        reverseInPlace(evenArray);
        copy.reverse();

        expect(evenArray).to.eql(copy);
      }, ['arrays', 'iteration', 'in place']);

      it ('should work for arrays with odd length', function() {
        const oddString = 'I have odd length';
        const oddArray = oddString.split('');
        const copy = oddArray.slice();
        reverseInPlace(oddArray);
        copy.reverse()

        expect(oddArray).to.eql(copy);
      }, ['arrays', 'iteration', 'in place']);

      it ('should return empty array if given empty array', function() {
        const empty = [];
        reverseInPlace(empty);


        expect(empty).to.eql([]);
      }, ['empty']);

      // tests actual swapping, as opposed to copying of value
      it ('BONUS: should work for non-primitive elements', function() {
        var immortal = {
          name : 'Tom Bombadil',
          age : Infinity
        }
        const mixedArray = ['hi', 42, immortal];
        const shallowCopy = mixedArray.slice();
        reverseInPlace(mixedArray);
        shallowCopy.reverse();

        expect(mixedArray).to.eql(shallowCopy);
      }, ['arrays', 'iteration', 'in place']);

      after(() => {
        report();
        console.log("tests complete")
      });
    });
  } else {
    console.log(typeof reverseInPlace);
    console.log('reverseInPlace was not exported properly');
  }
});
