/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */


function modemean(array) {
  let meanFound;
  let modeFound;
  const mean = (arr) => {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
      sum += array[i];
    }
    meanFound = sum / arr.length;
  }

  // find the mode of the array
  const getMode = (arr) => {
    let mode;
    let most = 0;

    for(let i = 0; i < arr.length; i++) {
      let currentEle = arr[i];
      let currCount = 0;
      for(let j = 0; j < arr.length; j++) {
        if(arr[i] === arr[j]) {
          currCount++;
        }
      }
      if(currCount > most) {
        most = currCount;
        mode = currEle;
      }
    }
    return modeFound;
  }

  if(meanFound === modeFound) {
    return true;
  }
  return false;
}

module.exports = modemean;
