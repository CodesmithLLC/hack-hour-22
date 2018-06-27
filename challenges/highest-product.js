/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      for (let k = 0; k < array.length; k++) {
        if (i != j && j != k && i != k) {
          newTotal = array[i] * array[j] * array[k];
          if (newTotal > total) {
            total = newTotal;
          }
        }
      }
    }
  }
  return total;
}

module.exports = highestProduct;
