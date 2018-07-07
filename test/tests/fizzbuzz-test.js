const { deliver, describe, it } = new (require('./../util/report-card'));
const expect = require('expect.js');
let fizzbuzz;

try {
  fizzbuzz = require('../../challenges/fizzbuzz.js');
} catch (e) {
  console.log('fizzbuzz could not be tested');
}

module.exports = deliver((report) => {
  if (typeof fizzbuzz === 'function') {

    const ans = answer(31);
    const arr = fizzbuzz(31);

    describe('fizzbuzz test', function() {
      it('should work for multiples of 3', function() {
        expect(arr[2]).to.be('fizz');
        expect(arr[5]).to.be('fizz');
        expect(arr[8]).to.be('fizz');
      });

      it('should work for multiples of 5', function() {
        expect(arr[4]).to.be('buzz');
        expect(arr[9]).to.be('buzz');
      });

      it('should work for multiples of 3 and 5', function() {
        expect(arr).to.eql(ans);
      }, ['arrays', 'math', 'conditionals']);

      after(() => {
        report();
      })
    });
  } else {
    console.log('fizzbuzz was not exported properly');
  }
});

function answer(n) {
  const nums = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0)
      nums.push('fizzbuzz');
    else if (i % 5 === 0)
      nums.push('buzz');
    else if (i % 3 === 0)
      nums.push('fizz');
    else
      nums.push(i);
  }
  return nums;
}
