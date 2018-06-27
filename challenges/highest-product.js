/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  //sort descending
  let sortedArray = array.sort((a, b) => b - a);
  //take subarray of first 3
  let subarray = sortedArray.slice(0, 3);
  //return product of subarray
  return subarray.reduce((a, b) => a * b)
}



module.exports = highestProduct;
