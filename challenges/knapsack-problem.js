/*
  You have a knapsack with a weight limit.
  You are presented with an array of objects, each with its own weight and value.
  Find the maximum value you can fit into your knapsack, given the weight constraint.

  e.g.
  items = [{weight: 1, value : 3}, {weight: 2, value : 4}, {weight: 3, value : 5}];
  solveKnapsack(items, 3); // returns 7 (from items[0] and items[1])
  solveKnapsack(items, 5); // returns 9 (from items[1] and items[2])
*/

function solveKnapsack(items, weightAvailable) {
  // handle edge case if items/weight is nothing
  if (items === 0 || weightAvailable === 0) return 0;
  // if first item is too heavy
  if (items[0] > weightAvailable) {
    return solveKnapsack(items.slice(1), weightAvailable);
  }
  // if first item fits
  else {
    let left = items.slice(1);
    let item = item[0].value + solveKnapsack(left, weightAvailable - item[0].weight);
    let otherItem = solveKnapsack(left, weightAvailable);
    return (item > otherItem) ? item : otherItem;
  }
};

module.exports = solveKnapsack;
