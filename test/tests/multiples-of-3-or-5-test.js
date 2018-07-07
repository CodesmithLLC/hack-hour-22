'use strict';
const { deliver, describe, it } = new (require('./../util/report-card'));
const expect = require('expect.js');
let threeOrFive;
let sumMultiplesXOrYBelowZ;
let sumMultiples3Or5Below1000;

try {
  threeOrFive = require('./../../challenges/multiples-of-3-or-5.js');
  sumMultiples3Or5Below1000 = threeOrFive.sumMultiples3Or5Below1000;
  sumMultiplesXOrYBelowZ = threeOrFive.sumMultiplesXOrYBelowZ;
} catch (e) {
  console.log('multiples of 3 or 5 could not be tested');
}

module.exports = deliver((report) => {
  if (typeof sumMultiples3Or5Below1000 === 'function'
      && typeof sumMultiplesXOrYBelowZ === 'function') {
    describe('Multiples-of-3-or-5 Test', () => {
      it('sumMultiples3Or5Below1000 returns correct result', () => {
        expect(sumMultiples3Or5Below1000()).to.eql(233168);
      }, ['math', 'numbers']);

      it('sumMultiplesXOrYBelowZ returns correct result', () => {
        expect(sumMultiplesXOrYBelowZ(4, 5, 10)).to.eql(17);
        expect(sumMultiplesXOrYBelowZ(5, 9, 1293)).to.eql(241449);
      }, ['math', 'numbers']);

      after(() => report());
    });
  } else {
    console.log('multiples-of-3-or-5 was not exported properly');
  }
});
