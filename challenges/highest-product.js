/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (!Array.isArray(array) || array.length < 3) return 0;
  let product = [];
  array = array.sort().reverse();
  console.log(array);
  if (array[array.length - 1] * array[array.length - 2] > array[0] * array[1]) {
    product.push(array[array.length - 1], array[array.length - 2]);
    console.log(product);
  }
  return array.reduce((output, value, index) => (index < 3 ? output *= value : output *= 1), 1);
}

module.exports = highestProduct;

// Tests
let arr1 = [2, 34, 923, 56];
let arr2 = [23, 15];
let arr3 = [];
let arr4 = 6;
let arr5 = "array";
let arr6 = [-15, -91, -89, 88, 87];

console.log(highestProduct(arr1));
console.log(highestProduct(arr2));
console.log(highestProduct(arr3));
console.log(highestProduct(arr4));
console.log(highestProduct(arr5));
console.log(highestProduct(arr6));