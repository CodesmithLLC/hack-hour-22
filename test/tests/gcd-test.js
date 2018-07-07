const { deliver, describe, it } = new (require('./../util/report-card'));
const runspawn = require('../util/runspawn');
const expect = require('expect.js');
let reverseInPlace;
try {
  gcd = require('../../challenges/gcd.js');
} catch (e) {
  console.log('gcd could not be tested');
}

module.exports = deliver((report) => {
  if (typeof gcd === 'function') {
    describe('gcd Tests', function() {
      it('should find greatest common denominator of 44 and 8', function() {
        expect(gcd(44, 8)).to.be(4);
        expect(gcd(8, 44)).to.be(4);
      }, ['math', 'numbers']);

      it('should find the gcd of 24 and 6', function() {
        expect(gcd(24, 6)).to.be(6);
      }, ['math', 'numbers']);

      it('should return 1 if there is no gcd', function() {
        expect(gcd(137, 154)).to.be(1);
      }, ['math', 'numbers']);

      it('should work for very large inputs like (100000000000002, 100000000000004)', function(done) {
        const prom = new Promise((resolve, reject) => {
          runspawn("test/tests/gcd-spawn.js", resolve, reject);
          console.log('promise created');
        });

        prom
          .then(done)
          .catch((err) => done(err));
      }, ['large input', 'math trick']);

      after(() => report());
    });
  } else {
    console.log('gcd was not exported properly');
  }
});
