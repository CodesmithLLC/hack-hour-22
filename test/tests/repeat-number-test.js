const { deliver, describe, it } = new (require('./../util/report-card'));
const expect = require('expect.js');
let repeatNumbers;
try {
  repeatNumbers = require('../../challenges/repeat-number.js');
} catch (e) {
  console.log('repeat-number could not be tested');
}

module.exports = deliver((report) => {
  if (typeof repeatNumbers === 'function') {
    describe('Repeat-Number Tests', function() {
      it('repeated number in small array', function() {
        const array = [1, 2, 3, 2, 4];
        const repeated = repeatNumbers(array);
        expect(repeated).to.eql(2);
      }, ['arrays', 'repeat values']);

      it('repeated number in a big array', function() {
        const array = [];
        for(let i = 1; i < 101; i++){
          array.push(i);
        }
        array.push(69);
        const repeated = repeatNumbers(array);
        expect(repeated).to.eql(69);
      }, ['arrays', 'repeat values', 'large input']);

      after(() => {
        report();
      });
    });
  } else {
    console.log('repeatNumbers was not exported properly');
  }
});
