/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (!Array.isArray(array) || array.length < 3)
    return 0;
  else {
    array.sort((a, b) => b - a);
    return Math.max(array[0] * array[1] * array[2], array[0] * array[array.length - 2] * array[array.length - 1]);
  }
}


// console.log(highestProduct([40, 100, 1, 5, 25, 10]));
// console.log(highestProduct([-40, 100, 1, 5, 25, 10]));
// 
// console.log(highestProduct([-40, -1, 5, 10]));
// console.log(highestProduct([-40, -1, 5, -10]));
// 
// console.log(highestProduct([-40, -1, -5, -10]));



module.exports = highestProduct;
