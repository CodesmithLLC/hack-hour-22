var expect = require('expect.js');

var countTwos;
try {
  countTwos = require('../../challenges/count-twos.js');
} catch (e) {
  console.log('count-twos could not be tested');
}

if (typeof countTwos === 'function') {
  describe('count twos big number', function() {

    it('should work for large inputs like 107653400376320956', function() {
      expect(countTwos(107653400376320956)).to.eql(182520140403859170);
    });

  });

} else {
  console.log('countTwos was not exported properly');
}
