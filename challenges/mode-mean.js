/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 * mode is number that appears the most
 *
 * Return true or false
 *
 */


function modemean(array) {
  // account for case if array[0] === 0
  if (!array[0]){
    return false;
  }
  // determine the mode; if there are multiple modes, get the max
        
  let container = {largest : 0};
  let biggestMode = 0;
  
  array.map((x) => {
          
    const count = array.filter(num => num === x).length;
    // check how many times element repeats -> we'll use this to check for triplets
    container[x] = count;
    if (container.largest < count && container.largest < x) {
      container.largest = x;  
            
    }
  
  // 			console.log(x, count)
  })
  
  let sum = array.reduce((previous, current) => current += previous);
  let mean = Math.floor(sum / array.length);
      
    
  console.log(container, mean)
  if (container.largest === mean){
    return true;
  }
  else {
    return false;
  }
  
}
console.log(modemean([0]))
console.log(modemean([]))
console.log(modemean([1, 2, 1, 2, 3,  5]))
console.log(modemean([1, 2, 1, 2, 3, 3, 3, 5])) // false
console.log(modemean([1, 2, 1, 2, 2, 3, 3, 3, 5])) // false

  
//     module.exports = modemean;
  