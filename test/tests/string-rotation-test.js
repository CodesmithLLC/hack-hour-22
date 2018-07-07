const { deliver, describe, it } = new (require('./../util/report-card'));
const expect = require('expect.js');
let stringRotation;
try {
  stringRotation = require('../../challenges/string-rotation.js').stringRotation;
} catch (e) {
  console.log('string-rotation could not be tested');
}

module.exports = deliver((report) => {
  if (typeof stringRotation === 'function') {
    describe('String Rotation Test', function() {

      it('should work for no rotation', function() {
        expect(stringRotation("hello", "hello")).to.eql(true);
      }, ['strings']);

      it('should work for rotations', function() {
        expect(stringRotation("hello", "llohe")).to.eql(true);
      }, ['strings', 'rotations']);

      it('should return false if second string is not a rotation', function() {
        expect(stringRotation("hello","orang utan")).to.eql(false);
        expect(stringRotation("hello", "he")).to.eql(false);
      }, ['strings', 'rotations']);

      it('works on short strings', function() {
        expect(stringRotation("h", "h")).to.eql(true);
        expect(stringRotation("hi", "ih")).to.eql(true);
      }, ['strings', 'rotations']);

      it('does not think anagram is rotation', function() {
        expect(stringRotation('hello', 'loelh')).to.eql(false);
        expect(stringRotation('hello', 'elolh')).to.eql(false);
      }, ['strings', 'rotations']);

      after(() => {
        report();
      });
    });
  } else {
      console.log('stringRotation was not exported properly');
  }
})
