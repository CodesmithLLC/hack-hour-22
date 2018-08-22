const { deliver, describe, it } = new (require('./../util/report-card'));
const expect = require('expect.js');
const runspawn = require('../util/runspawn');
let countTwos;

try {
  countTwos = require('../../challenges/count-twos.js');
} catch (e) {
  console.log('count-twos could not be tested');
}

module.exports = deliver((report) => {
  if (typeof countTwos === 'function') {
    describe('count twos', function() {
      it('should work for numbers without 2s', function() {
        expect(countTwos(13)).to.eql(2);
        expect(countTwos(54)).to.eql(16);
        expect(countTwos(1000)).to.eql(300);
      }, ['numbers', 'iteration']);

      it('should work for numbers with 2s', function() {
        expect(countTwos(234)).to.eql(89);
        expect(countTwos(32314)).to.eql(23077);
      }, ['numbers', 'iteration']);

      it('should work for large inputs like 107653400376320956', function(done) {
        runspawn("test/tests/count-twos-spawn.js", done);
      }, ['large input']);

      after(() => report());
    });
  } else {
    console.log('countTwos was not exported properly');
  }
});
