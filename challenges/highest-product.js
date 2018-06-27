/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (array.length <= 3) return array.reduce((acc, num) => acc *= num);

  const negatives = array.filter(x => x < 0).sort((a,b) => a - b);
  const sortedArr = array.sort((a,b) => b - a);

  const multiplier = arr => arr.reduce((acc, num) => acc *= num);

  if (negatives.length <= 1) {
    return multiplier(sortedArr.slice(0, 3))
  } else {
    return multiplier(negatives.slice(0, 2).concat(sortedArr[0]));
  }
}


module.exports = highestProduct;

