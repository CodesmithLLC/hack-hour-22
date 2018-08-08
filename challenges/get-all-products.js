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
  // takes in an array
  // outputs a new array with all of the numbers inside the array multiplies by one another
  // make productsArr to push 
  // iterate over array
  // iterate over each element inside another loop
  // multiple all elements by oen another except the current element 
  // return
  let productsArr = [];
  for (let i = 0; i < array.length; i++) {
    let prod = 1;
    for (let j = 0; i < array.length; j++) {
      if (array[j] !== array[i]) prod *= array[j];
    }
    productsArr.push(prod);
  }
  return productsArr;
}

module.exports = getAllProducts;
