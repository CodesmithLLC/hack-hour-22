/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  array.sort((a, b) => b - a);
  
  if (array.length === 0)
    return 1;
  else if (array.length === 1)
    return array[0];
  else if (array.length === 2)
    return array[0] * array[1];
  else
    return Math.max(array[0] * array[1] * array[2], array[0] * array[array.length - 2] * array[array.length - 1]);
}


// console.log(highestProduct([40, 100, 1, 5, 25, 10]));
// console.log(highestProduct([-40, 100, 1, 5, 25, 10]));
// 
// console.log(highestProduct([-40, -1, 5, 10]));
// console.log(highestProduct([-40, -1, 5, -10]));
// 
// console.log(highestProduct([-40, -1, -5, -10]));



module.exports = highestProduct;
