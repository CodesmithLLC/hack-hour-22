/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  const resultArr = [];
  const sorted = array.sort((a, b) => a - b);

  const negative = sorted.filter(e => e < 0)
  console.log(negative)
  if (negative.length > 1) {
    let mapped = negative.map(e => Math.abs(e))
    for (let i = 0; i < 1; i++) {
      let neg = mapped[0] * mapped[1];

      let pos = sorted[sorted.length - 1] * sorted[sorted.length - 2];
      if (neg > pos) {
        resultArr.push(sorted[0]);
        resultArr.push(sorted[1])
        mapped.shift();
        mapped.shift();
        sorted.shift();
        sorted.shift();
      } else {
        resultArr.push(sorted[sorted.length - 1]);
        resultArr.push(sorted[sorted.length - 2]);
        sorted.pop();
        sorted.pop();
      }

    }
    resultArr.push(Math.max(...sorted))
    console.log([sorted, resultArr])
  } else {
    for (let i = 0; i < 3; i++) {
      resultArr.push(Math.max(...sorted));
      sorted.pop();
    }
  }
  return resultArr.reduce((a, b) => a * b, 1);
}


module.exports = highestProduct;