/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    //Check for our edge cases before we do any computations.
    if (array.length < 3 || !Array.isArray(array)) return 0;
    //Sort array from smallest to largest
    array.sort((a, b) => a - b);
    //only keep last three values since they are largest values in array
    array = array.slice(array.length -3, array.length);
    //Reduce allows us to iterate through array and return our total value
    return array.reduce((acc, cur) =>{
      return acc * cur;
    });
      
  }
  

module.exports = highestProduct;
