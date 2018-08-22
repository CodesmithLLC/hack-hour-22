var expect = require('expect.js');
try {
  gcd = require('../../challenges/gcd.js');
} catch (e) {
  console.log('gcd could not be tested');
}

if (typeof gcd === 'function') {
  describe('gcd Tests', function() {

    it('should work for very large inputs like (100000000000002, 100000000000004)', function() {
      expect(gcd(100000000000002, 100000000000004)).to.be(2);
    });

  });
} else {
  console.log('gcd was not exported properly');
}