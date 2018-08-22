var expect = require('expect.js');
var pow;
try {
  pow = require('../../challenges/pow.js');
} catch (e) {
  console.log('pow could not be tested');
}

if (typeof pow === 'function') {
  describe('Pow Test', function() {
    it('should return correct computation', function() {
      expect(pow(1, 2)).to.eql(1);
      expect(pow(2, 2)).to.eql(4);
      expect(pow(3, 4)).to.eql(81);
      expect(pow(5, 5)).to.eql(3125);
      expect(pow(0, 10)).to.eql(0);
      expect(pow(10, 0)).to.eql(1);
    });
    it('should work with negative bases', function() {
      expect(pow(-2, 2)).to.eql(4);
      expect(pow(-5, 3)).to.eql(-125);
    });

  });
} else {
  console.log('pow was not exported properly');
}
