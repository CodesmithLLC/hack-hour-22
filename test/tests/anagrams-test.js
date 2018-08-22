const { deliver, describe, it } = new (require('./../util/report-card'));
const expect = require('expect.js');
let anagrams;
try {
  anagrams = require('../../challenges/anagrams.js');
} catch (e) {
  console.log('anagrams could not be tested');
}

module.exports = deliver((report) => {
  if (typeof anagrams === 'function') {
    describe('Anagrams Test', function() {
      it('should return array with empty string for empty string', function() {
        expect(anagrams('')).to.eql(['']);
      }, ['strings', 'empty']);

      it('should find all anagrams', function() {
        expect(anagrams('a')).to.eql(['a']);
        expect(anagrams('ab').sort()).to.eql(['ab','ba'].sort());
        expect(anagrams('abc').sort()).to.eql(['abc','acb','bac','bca','cab','cba'].sort());
      }, ['strings', 'permutations', 'recursion']);

      it('should not return duplicate anagrams', function() {
        expect(anagrams('aa')).to.eql(['aa']);
        expect(anagrams('aab').sort()).to.eql(['aab','baa','aba'].sort());
        expect(anagrams('aabb').sort()).to.eql(['aabb','bbaa','abba','baba','abab','baab'].sort());
      }, ['strings', 'permutations', 'recursion', 'deduplication']);

      after(() => {
        report();
      });
    });
  } else {
    console.log('anagrams was not exported properly');
  }
})
