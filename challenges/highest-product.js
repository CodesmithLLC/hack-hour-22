/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array, maxProduct = 0) {
  let product = maxProduct;
  if (!(array instanceof Array) || array.length < 3) {
    return product;
  }
  const firstMultiplier = array[0];
  for (let index = 1; index < array.length; index += 1) {
    const secondMultiplier = array[index];
    for (let jdex = index + 1; jdex < array.length; jdex += 1) {
      const thirdMultiplier = array[jdex];
      product = Math.max(product, (firstMultiplier * secondMultiplier * thirdMultiplier));
    }
  }
  return highestProduct(array.slice(1), product);
}

module.exports = highestProduct;
