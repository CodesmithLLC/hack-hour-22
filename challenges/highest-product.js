/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array, maxProduct = 0) {
  // Solution 1
  // if (!(array instanceof Array) || array.length < 3) {
  //   return maxProduct;
  // }
  // let product;
  // const firstMultiplier = array[0];
  // for (let index = 1; index < array.length; index += 1) {
  //   const secondMultiplier = array[index];
  //   for (let jdex = index + 1; jdex < array.length; jdex += 1) {
  //     const thirdMultiplier = array[jdex];
  //     const newProduct = (firstMultiplier * secondMultiplier * thirdMultiplier);
  //     product = maxProduct || newProduct;
  //     if (newProduct > product) {
  //       product = newProduct;
  //     }
  //   }
  // }

  // return highestProduct(array.slice(1), product);

  // Solution 2
  // sort the array. get the max from the first three and last three.
  if (!(array instanceof Array) || array.length < 3) {
    return maxProduct;
  }
  const sortedArray = array.sort((a, b) => a - b);
  return Math.max(
    [...sortedArray.slice(0, 2), sortedArray[sortedArray.length - 1]]
      .reduce((acc, val) => acc * val),
    sortedArray.slice(sortedArray.length - 3)
      .reduce((acc, val) => acc * val),
  );
}

module.exports = highestProduct;
