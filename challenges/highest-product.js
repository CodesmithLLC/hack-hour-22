/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (array.length < 3) return 0;
  const newArray = [...array];
  newArray.sort((a, b) => a - b);
  const bigNumbers = newArray[newArray.length - 1] * newArray[newArray.length - 2] * newArray[newArray.length - 3];
  return bigNumbers;
}


function highestProduct(array) {
  if (!array || array.length < 3) {
    return 0;
  }
  array.sort(function (a, b) { return a - b; });
  var usingSmalls = array[0] * array[1] * array[array.length - 1];
  var usingBigs = array[array.length - 1] * array[array.length - 2] * array[array.length - 3];
  return Math.max(usingSmalls, usingBigs);
}

module.exports = highestProduct;
