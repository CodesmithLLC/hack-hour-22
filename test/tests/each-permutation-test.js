const { deliver, describe, it } = new (require('./../util/report-card'));
const expect = require('expect.js');
let eachPermutation;

try {
  eachPermutation = require('../../challenges/each-permutation.js');
} catch (e) {
  console.log('each-permutation could not be tested');
}

module.exports = deliver((report) => {
  if (typeof eachPermutation === 'function') {
    describe('eachPermutation Test', function() {
      it('should generate all 24 permutations of [1, 2, 3, 4]', function() {
        var ans = [
          [ 1, 2, 3, 4 ],
          [ 1, 2, 4, 3 ],
          [ 1, 3, 2, 4 ],
          [ 1, 3, 4, 2 ],
          [ 1, 4, 2, 3 ],
          [ 1, 4, 3, 2 ],
          [ 2, 1, 3, 4 ],
          [ 2, 1, 4, 3 ],
          [ 2, 3, 1, 4 ],
          [ 2, 3, 4, 1 ],
          [ 2, 4, 1, 3 ],
          [ 2, 4, 3, 1 ],
          [ 3, 1, 2, 4 ],
          [ 3, 1, 4, 2 ],
          [ 3, 2, 1, 4 ],
          [ 3, 2, 4, 1 ],
          [ 3, 4, 1, 2 ],
          [ 3, 4, 2, 1 ],
          [ 4, 1, 2, 3 ],
          [ 4, 1, 3, 2 ],
          [ 4, 2, 1, 3 ],
          [ 4, 2, 3, 1 ],
          [ 4, 3, 1, 2 ],
          [ 4, 3, 2, 1 ],
        ];
        var perms = [];
        eachPermutation([1, 2, 3, 4], function(perm) {
          perms.push(perm.slice());
        });
        perms.sort(function(a, b) {
          return JSON.stringify(a) > JSON.stringify(b) ? 1 : -1;
        });
        expect(perms).to.eql(ans);
      }, ['arrays', 'permutations', 'callbacks']);

      after(() => report());
    });
  } else {
    console.log('eachPermutation was not exported properly');
  }
});
