/*
  You have a knapsack with a weight limit.
  You are presented with an array of objects, each with its own weight and value.
  Find the maximum value you can fit into your knapsack, given the weight constraint.

  e.g.
  items = [{weight: 1, value : 3}, {weight: 2, value : 4}, {weight: 3, value : 5}];
  solveKnapsack(items, 3); // returns 7 (from items[0] and items[1])
  solveKnapsack(items, 5); // returns 9 (from items[1] and items[2])
*/

function yank(array, i) {
  return [...array.slice(0, i), ...array.slice(i + 1)];
}

function solveKnapsack(items, weightAvailable) {
  if (!Array.isArray(items) || items.length === 0) return 0;
  if (items.length === 1) {
    const [final] = items;
    return weightAvailable >= final.weight ? final.value : 0;
  }

  return Math.max(
    ...items.map((item, i) => {
      if (weightAvailable >= item.weight) {
        const possibility = solveKnapsack(
          yank(items, i),
          weightAvailable - item.weight
        );
        return possibility + item.value;
      }
      return -Infinity;
    }),
    0
  );
}

module.exports = solveKnapsack;
