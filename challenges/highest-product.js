/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {

  // helper function to find product of the elements in an array
  const multiplier = arr => arr.reduce((acc, num) => acc * num);

  // catch line to make sure we have valid input 
  if (array.length < 3 || !Array.isArray(array)) return 0;

  // create two subarrays to maximize our 3-factor product. 
  const maxNegs = array.filter(x => x < 0).sort((a,b) => a - b).slice(0,2);
  const sortedArr = array.filter(x => x >= 0).sort((a,b) => b - a).slice(0,3);

  if (maxNegs.length === 2) {
    return multiplier(maxNegs) > multiplier(sortedArr.slice(1)) ? 
      multiplier([...maxNegs, sortedArr[0]]) : multiplier(sortedArr);
  }

  return multiplier(sortedArr);
}

const arr1 = [1, 2, -4, -5, 4, 3, -7, 5];
console.log(highestProduct(arr1));


module.exports = highestProduct;

