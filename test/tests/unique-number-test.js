const { deliver, describe, it } = new (require('./../util/report-card'));
const expect = require('expect.js');
let uniqueNumber;
try {
  uniqueNumber = require('../../challenges/unique-number.js');
} catch (e) {
  console.log('unique-number could not be tested');
}

module.exports = deliver((report) => {
  if (typeof uniqueNumber === 'function') {
    describe('Unique-Number Tests', function() {

      it('unique number in small array', function() {
        const array = [1, 2, 1, 3, 3];
        const unique = uniqueNumber(array);
        expect(unique).to.eql(2);
      }, ['arrays', 'unique']);

      it('unique number in a big array', function() {
        const array = [];

        for(let i = 1; i < 101; i++){
          if(i !== 69)
            array.push(i);
        }

        for(let i = 100; i > 0; i--){
          array.push(i);
        }

        const unique = uniqueNumber(array);
        expect(unique).to.eql(69);
      }, ['arrays', 'unique', 'large input']);

      after(() => {
        report();
      });

    });

  } else {
    console.log('uniqueNumber was not exported properly');
  }
});
