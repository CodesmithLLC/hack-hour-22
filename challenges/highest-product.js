/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array, maxProduct) {
  if (!(array instanceof Array) || array.length < 3) {
    return maxProduct || 0;
  }
  // Solution 1
  let product;
  const firstMultiplier = array[0];
  for (let index = 1; index < array.length; index += 1) {
    const secondMultiplier = array[index];
    for (let jdex = index + 1; jdex < array.length; jdex += 1) {
      const thirdMultiplier = array[jdex];
      const newProduct = (firstMultiplier * secondMultiplier * thirdMultiplier);
      product = maxProduct || newProduct;
      if (newProduct > product) {
        product = newProduct;
      }
    }
  }

  return highestProduct(array.slice(1), product);
}

module.exports = highestProduct;
