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
  let perms = [];
  let products = [];
  
  // get permutations of all elements
  // create copies
  for (let i = 0; i < array.length; i++) {
    perms.push(Array.from(array));
  }
  // splice one element at a time
  perms.forEach((el, i) => el.splice(i, 1));

  // reduce elements into products
  perms.forEach(e => products.push(e.reduce((a, b) => a * b)));

  // return output
  return products;
}

console.log(getAllProducts([1, 7, 3, 4]))

module.exports = getAllProducts;
