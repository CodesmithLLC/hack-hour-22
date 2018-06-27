/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

// find all negatives
// find highest two negatives
// find highest three positives
// if negatives product higher than the product of the lower two positives, return highest positive and both negatives

function highestProduct(array) {
  const sorted = array.sort((a, b) => a - b);
  const highestPos = sorted.slice(-3);
  if (highestPos.length < 3) return undefined;
  const highestNeg = sorted.filter(x => x < 0).slice(0, 2);
  if (highestNeg.length < 2) return highestPos.reduce((total, x) => total * x);
  if (!highestPos.filter(x => x < 0).length) {
    if (highestNeg[0] * highestNeg[1] > highestPos[2] * highestPos[1]) {
      highestPos[2] = highestNeg[0];
      highestPos[1] = highestNeg[1];
      console.log(highestPos);
    } else if (highestNeg[0] * highestNeg[1] > highestPos[0] * highestPos[1]) {
      highestPos[1] = highestNeg[0];
      highestPos[0] = highestNeg[1];
    }
  } else {
    highestPos[1] = highestNeg[0];
    highestPos[0] = highestNeg[1];
  }
  return highestPos.reduce((total, x) => total * x);
}

// console.log(highestProduct([-5,-1, -2, -3, 12, 1, 2,1,3,8]));

module.exports = highestProduct;
