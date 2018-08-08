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

const product = array => array.reduce((a, b) => a * b);

const yank = (array, index) =>
  [...array.slice(0, index), ...array.slice(index + 1)];

function getAllProducts(array) {
  if (!Array.isArray(array) || array.length === 0) {
    throw new TypeError('Argument must be an array with at least one element');
  }

  const total = product(array);
  if (total === 0) {
    const output = Array(array.length).fill(0);
    const zero = array.indexOf(0);
    output[zero] = product(yank(array, zero));
    return output;
  }
  return array.map(val => total / val);
}

module.exports = getAllProducts;
