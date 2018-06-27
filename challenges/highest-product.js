/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {

  // sort numbers and multiply the three largest integers in the array together
  let numsArr = [];
  if(array.length < 3 || Array.isArray(array)) return 0;

  // sort array into order from least to greatest
  const sortArr = array.sort((x, y) => {
    return x - y;
  })

  for(let i = 0; i <= 1; i++) {
    if(Math.abs(sortArr[i]) > sorrArr[sortArr.length - 1]) {
      numsArr.push(sortArr[i]);
    }
  }
  numsArr.push(sorted[sorted.length - 1]);
}

module.exports = highestProduct;
