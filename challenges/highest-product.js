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
  
  function highestProduct(array) {
    //Sort array from smallest to largest
    array.sort((a, b) => a - b);
    
    if (array[0] < 0 && array[1] < 0){
      if (Math.abs(array[0]) > array[array.length-2] && Math.abs(array[1] > array[array.length-3])){
        array = array.slice(3, array.length-2); //won't work because you only want to keep
        }
    
    //only keep last three values since they are largest values in array
    array = array.slice(array.length -3, array.length);
    //Reduce allows us to iterate through array and return our total value
    return array.reduce((acc, cur) =>{
      return acc * cur;
    });
      
  }
  
  highestProduct([1, -4, 3, -6, 7, 0]);

module.exports = highestProduct;
