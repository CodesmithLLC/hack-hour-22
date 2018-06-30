/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    let maxProduct;
    if (array.length < 3) return -1;

    for (let i = 0; i < array.length - 2; i++) {
        for (let j = i + 1; j < array.length - 1; j++) {
            for (let k = j + 1; k < array.length; k++) {
                maxProduct = array[i] * array[k] * array[j];
            }
        }
    }
    return maxProduct;
}


module.exports = highestProduct;
