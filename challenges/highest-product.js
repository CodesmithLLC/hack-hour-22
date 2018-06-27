/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  const multiplier = arr => arr.reduce((acc, num) => acc *= num);

  if (array.length <= 3 || !Array.isArray(array)) return 0;

  const negatives = array.filter(x => x < 0).sort((a,b) => a - b);
  const sortedArr = array.sort((a,b) => b - a);


  return (negatives.length <= 1 ?
    multiplier(sortedArr.slice(0, 3)) :
    multiplier(negatives.slice(0, 2).concat(sortedArr[0])));
}


module.exports = highestProduct;

