const { deliver, describe, it } = new (require('./../util/report-card'));
const expect = require('expect.js');
let knapsackProblem;

try {
  knapsackProblem = require('../../challenges/knapsack-problem.js');
} catch (e) {
  console.log('knapsack-problem could not be tested');
}

module.exports = deliver((report) => {
  if (typeof knapsackProblem === 'function') {
    describe ('Knapsack Problem', function () {
      it ('should work for small input arrays', function() {
        const items = [{weight: 1, value : 3}, {weight: 2, value : 4}, {weight: 3, value : 5}];
        expect(knapsackProblem(items, 1)).to.eql(3);
        expect(knapsackProblem(items, 2)).to.eql(4);
        expect(knapsackProblem(items, 3)).to.eql(7);
        expect(knapsackProblem(items, 4)).to.eql(8);
        expect(knapsackProblem(items, 5)).to.eql(9);
        expect(knapsackProblem(items, 6)).to.eql(12);
      }, ['arrays', 'recursion']);
      it ('should work with edge cases', function () {
        const items = [{weight: 1, value : 3}, {weight: 2, value : 4}, {weight: 3, value : 5}];
        expect(knapsackProblem(items, 0)).to.eql(0);
        expect(knapsackProblem(items, 7)).to.eql(12);
        expect(knapsackProblem([],1)).to.eql(0);
      }, ['arrays', 'recursion', 'edge cases']);
      it ('should work for large input arrays', function() {
        let weightSeed = 20;
        function randomWeight() {
            const x = Math.sin(weightSeed++) * 10000;
            return Math.floor((x - Math.floor(x)) * 100);
        }
        let valueSeed = 41;
        function randomValue() {
            const x = Math.sin(valueSeed++) * 10000;
            return Math.floor((x - Math.floor(x)) * 100);
        }

        const manyItems = [];
        for (let i = 0; i < 150; i++) {
          const newItem = {};
          newItem.weight = randomWeight();
          newItem.value = randomValue();
          manyItems.push(newItem);
        }
        expect(knapsackProblem(manyItems, 0)).to.eql(0);
        expect(knapsackProblem(manyItems, 21)).to.eql(461);
        expect(knapsackProblem(manyItems, 100)).to.eql(941);
        expect(knapsackProblem(manyItems, 1000)).to.eql(3142);
        expect(knapsackProblem(manyItems, 5000)).to.eql(6956);
        expect(knapsackProblem(manyItems, 7500)).to.eql(7575);
        expect(knapsackProblem(manyItems, 10000)).to.eql(7575);
      }, ['large input']);

      after(() => report());
    });

  } else {
    console.log('knapsackProblem was not exported properly');
  }
});
