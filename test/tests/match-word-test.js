const { deliver, describe, it } = new (require('./../util/report-card'));
const expect = require('expect.js');
let matchWord;
try {
  matchWord = require('../../challenges/match-word.js');
} catch (e) {
  console.log('match-word could not be tested');
}

module.exports = deliver((report) => {
  if (typeof matchWord === 'function') {
    describe('matchWord Tests', function() {
      it('should work for one word', function() {
        expect(matchWord('__END_DNE-----')).to.be(true);
      }, ['strings', 'regex', 'iteration']);
      it('should not be fooled by palindromes', function() {
        expect(matchWord('__ENDDNE__')).to.be(false);
      });
      it('should be case-insensitive', function() {
        expect(matchWord('IF()()fi[]')).to.be(true);
      });
      it('should validate the order of the closing words', function() {
        expect(matchWord('for__if__rof__fi')).to.be(false);
      }, ['strings', 'regex', 'iteration']);
      it('should handle nesting', function() {
        expect(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw')).to.be(true);
      }, ['strings', 'regex', 'iteration']);
      it('should handle the empty string', function() {
        expect(matchWord('')).to.be(true);
      }, ['edge cases']);
    });
  } else {
    console.log('matchWord was not exported properly');
  }
});
