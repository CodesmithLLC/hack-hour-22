/* Accepts an array of integers and returns an array of all the possible products made by
 * multiplying all but one number. In other words, find all the products of multiplying any
 * array.length-1 numbers in the array.
 *
 * ex: getProducts([1, 7, 3, 4]); ->  [84, 12, 28, 21]
 * this is done via:
 * [7*3*4, 1*3*4, 1*7*4, 1*7*3]
 *
 * do not use division, becuase zero might be in the array and you cannot divide by zero
 */

function getAllProducts(array) {
  // edge case of array with length 0
  if (array.length === 0) return [0];
  
  let zeroCount = 0, prod = 1;
  let zeroIndex;
  
  for (let i = 0; i < array.length; i++) {
    // if zero, include in zero count
    if (array[i] === 0) {
      zeroCount++;
      zeroIndex = i;
    }
    // if nonzero, include in product
    else
      prod *= array[i];
  }
  
  // how many zeros did we find?
  if (zeroCount === 0)
    return array.map(ele => prod / ele);
  else if (zeroCount === 1) {
    const result = new Array(array.length).fill(0);
    result[zeroIndex] = prod;
    return result;
  }
  else
    return new Array(array.length).fill(0);
}

// console.log(getAllProducts([2, 7, 3, 4]));
// console.log(getAllProducts([2, 7, 0, 3, 4]));
// console.log(getAllProducts([2, 7, 0, 3, 4, 0]));

module.exports = getAllProducts;

