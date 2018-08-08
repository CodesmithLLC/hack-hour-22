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
  const newArr = [];
  for (let i = 0; i < array.length; i += 1) {
    const num = array.reduce((acc, curr, index) => {
      if (index ==== i) return acc;
      return acc * curr;
    }, 1);
    newArr.push(num);
  }
  return newArr;
}

module.exports = getAllProducts;
