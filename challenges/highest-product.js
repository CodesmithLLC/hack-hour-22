/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  array = array.sort().reverse();
  return array.reduce((output, value, index) => (index < 3 ? output *= value : output *= 1), 1);
}

module.exports = highestProduct;
